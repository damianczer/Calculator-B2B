import { useState, useMemo } from 'react';
import type { TaxForm, ZUSType, TaxBreakdown } from '../types/calculator';
import { calculateZUSContributions } from '../utils/zus';
import { calculateTax } from '../utils/tax';

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
    const [sources, setSources] = useState<RevenueSource[]>(DEFAULT_REVENUE_SOURCES);
    const [costs, setCosts] = useState<CostItem[]>([]);
    const [settings, setSettings] = useState<CalculatorSettings>(DEFAULT_SETTINGS);

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
            invoiceTotal: roundToTwoDecimals(invoiceTotal)
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
