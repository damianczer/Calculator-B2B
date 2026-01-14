import { useState, useMemo, useEffect } from 'react';
import type { TaxForm, ZUSType, TaxBreakdown } from '../types/calculator';
import { calculateZUSContributions } from '../utils/zus';
import { calculateTax } from '../utils/tax';
import { buildDetailedBreakdown } from '../utils/detailedBreakdown';
import { saveCalculatorState, loadCalculatorState } from '../utils/calculatorStorage';
import { useDebounce } from './useDebounce';

export interface RevenueSource {
    id: number;
    monthlyRevenue: string;
    dailyRate: string;
    hourlyRate: string;
    currency: string;
    vat: string;
    daysPerMonth: number;
    hoursPerDay: number;
    isExpanded: boolean;
    calculationMode: 'monthly' | 'daily' | 'hourly';
}

export interface CostItem {
    id: number;
    name: string;
    amount: string;
    isMonthly: boolean;
}

export interface CalculatorSettings {
    taxForm: TaxForm;
    zusType: ZUSType;
    lumpSumRate: string;
    voluntarySickness: boolean;
    saveForVacation: boolean;
    jointSettlement: boolean;
    ipBox: boolean;
    pit0: boolean;
}

export interface CalculationResult {
    grossIncome: number;
    netIncome: number;
    breakdown: TaxBreakdown;
    totalRevenue: number;
    totalCosts: number;
    invoiceTotal: number;
    detailedBreakdown: ReturnType<typeof buildDetailedBreakdown>;
}

const DEFAULT_REVENUE_SOURCES: RevenueSource[] = [
    {
        id: 1,
        monthlyRevenue: '19200',
        dailyRate: '960',
        hourlyRate: '120',
        currency: 'PLN',
        vat: '23',
        daysPerMonth: 20,
        hoursPerDay: 8,
        isExpanded: false,
        calculationMode: 'monthly'
    },
    {
        id: 2,
        monthlyRevenue: '0',
        dailyRate: '0',
        hourlyRate: '0',
        currency: 'PLN',
        vat: '23',
        daysPerMonth: 20,
        hoursPerDay: 8,
        isExpanded: true,
        calculationMode: 'monthly'
    }
];

const DEFAULT_SETTINGS: CalculatorSettings = {
    taxForm: 'lumpSum',
    zusType: 'startup',
    lumpSumRate: '12',
    voluntarySickness: false,
    saveForVacation: false,
    jointSettlement: false,
    ipBox: false,
    pit0: false
};

const roundToTwoDecimals = (value: number): number => Math.round(value * 100) / 100;

const calculateTotalRevenue = (sources: RevenueSource[]): number =>
    sources.reduce((sum, s) => sum + parseFloat(s.monthlyRevenue || '0'), 0);

const calculateTotalCosts = (costs: CostItem[]): number =>
    costs.reduce((sum, c) => {
        const amount = parseFloat(c.amount || '0');
        return sum + (c.isMonthly ? amount : amount / 12);
    }, 0);

const calculateVAT = (sources: RevenueSource[]): number =>
    sources.reduce((sum, s) => {
        const revenue = parseFloat(s.monthlyRevenue || '0');
        const vatRate = parseFloat(s.vat) / 100;
        return sum + revenue * vatRate;
    }, 0);

export const useB2BCalculator = () => {
    const loadInitialState = () => {
        const saved = loadCalculatorState();
        if (saved) {
            return {
                sources: saved.settings ? DEFAULT_REVENUE_SOURCES : DEFAULT_REVENUE_SOURCES,
                costs: saved.costs || [],
                settings: saved.settings || DEFAULT_SETTINGS
            };
        }
        return {
            sources: DEFAULT_REVENUE_SOURCES,
            costs: [],
            settings: DEFAULT_SETTINGS
        };
    };

    const initialState = loadInitialState();
    const [sources, setSources] = useState<RevenueSource[]>(initialState.sources);
    const [costs, setCosts] = useState<CostItem[]>(initialState.costs);
    const [settings, setSettings] = useState<CalculatorSettings>(initialState.settings);
    const debouncedSources = useDebounce(sources, 1000);
    const debouncedCosts = useDebounce(costs, 1000);
    const debouncedSettings = useDebounce(settings, 1000);

    useEffect(() => {
        const state = {
            monthlyRevenue: debouncedSources[0]?.monthlyRevenue || '0',
            dailyRate: debouncedSources[0]?.dailyRate || '0',
            hourlyRate: debouncedSources[0]?.hourlyRate || '0',
            workingDaysPerMonth: String(debouncedSources[0]?.daysPerMonth || 20),
            workingHoursPerDay: String(debouncedSources[0]?.hoursPerDay || 8),
            settings: debouncedSettings,
            costs: debouncedCosts
        };
        saveCalculatorState(state);
    }, [debouncedSources, debouncedCosts, debouncedSettings]);

    const calculations = useMemo((): CalculationResult => {
        const totalRevenue = calculateTotalRevenue(sources);
        const totalCosts = calculateTotalCosts(costs);
        const income = totalRevenue - totalCosts;
        const zusData = calculateZUSContributions(settings.zusType, settings.voluntarySickness);
        const zusTotal = zusData.total;
        const vatTotal = calculateVAT(sources);
        const revenueNetOfVAT = totalRevenue;

        const { pit, healthContribution } = calculateTax(settings.taxForm, {
            income,
            zusTotal,
            revenueNetOfVAT,
            lumpSumRate: parseFloat(settings.lumpSumRate || '12') / 100,
            pit0Enabled: settings.pit0
        });

        const healthTotal = roundToTwoDecimals(healthContribution);
        const netIncome = income - zusTotal - pit - healthTotal;
        const invoiceTotal = totalRevenue + vatTotal;
        const taxBase = income - zusTotal;
        const taxRate = parseFloat(settings.lumpSumRate || '12') / 100;
        const yearlyRevenue = revenueNetOfVAT * 12;

        const detailedBreakdown = buildDetailedBreakdown({
            pit: roundToTwoDecimals(pit),
            totalRevenue,
            totalCosts,
            zusTotal,
            healthTotal,
            vatTotal,
            taxForm: settings.taxForm,
            taxBase,
            taxRate,
            zusType: settings.zusType,
            zusData,
            yearlyRevenue
        });

        return {
            grossIncome: income,
            netIncome: roundToTwoDecimals(netIncome),
            breakdown: {
                pit: roundToTwoDecimals(pit),
                vat: roundToTwoDecimals(vatTotal),
                zus: roundToTwoDecimals(zusTotal),
                health: healthTotal
            },
            totalRevenue: roundToTwoDecimals(totalRevenue),
            totalCosts: roundToTwoDecimals(totalCosts),
            invoiceTotal: roundToTwoDecimals(invoiceTotal),
            detailedBreakdown
        };
    }, [sources, costs, settings]);

    return {
        sources,
        setSources,
        costs,
        setCosts,
        settings,
        setSettings,
        calculations
    };
};
