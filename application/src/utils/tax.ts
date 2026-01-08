import type { TaxForm } from '../types/calculator';
import {
    TAX_CONSTANTS,
    TAX_RATES,
    LUMP_SUM_HEALTH_TIERS,
    ZUS_CONTRIBUTION_RATES
} from '../constants/tax';

interface TaxCalculationParams {
    income: number;
    zusTotal: number;
    revenueNetOfVAT: number;
    lumpSumRate: number;
    pit0Enabled: boolean;
}

interface TaxResult {
    pit: number;
    healthContribution: number;
}

const applyPit0Deduction = (taxBase: number, pit0Enabled: boolean): number => {
    if (!pit0Enabled) return taxBase;
    const monthlyPit0Limit = TAX_CONSTANTS.PIT0_YEARLY_LIMIT / 12;
    return Math.max(0, taxBase - monthlyPit0Limit);
};

export const calculateFlat19Tax = (params: TaxCalculationParams): TaxResult => {
    const { income, zusTotal, pit0Enabled } = params;
    const healthBase = income - zusTotal;
    const taxBase = applyPit0Deduction(healthBase, pit0Enabled);

    return {
        pit: taxBase * TAX_RATES.FLAT,
        healthContribution: healthBase * ZUS_CONTRIBUTION_RATES.health
    };
};

export const calculateTaxScaleTax = (params: TaxCalculationParams): TaxResult => {
    const { income, zusTotal, pit0Enabled } = params;
    const healthBase = income - zusTotal;
    const baseIncome = applyPit0Deduction(healthBase, pit0Enabled);
    const yearlyIncome = baseIncome * 12;

    let pit: number;
    if (yearlyIncome <= TAX_CONSTANTS.THRESHOLD) {
        pit = baseIncome * TAX_RATES.SCALE_LOW;
    } else {
        const belowThreshold = TAX_CONSTANTS.THRESHOLD / 12;
        const aboveThreshold = baseIncome - belowThreshold;
        pit = belowThreshold * TAX_RATES.SCALE_LOW + aboveThreshold * TAX_RATES.SCALE_HIGH;
    }

    const monthlyTaxFree = TAX_CONSTANTS.FREE_AMOUNT / 12;
    const taxFreeDeduction = monthlyTaxFree * TAX_RATES.SCALE_LOW;
    pit = Math.max(0, pit - taxFreeDeduction);

    return {
        pit,
        healthContribution: healthBase * ZUS_CONTRIBUTION_RATES.health
    };
};

export const calculateLumpSumTax = (params: TaxCalculationParams): TaxResult => {
    const { revenueNetOfVAT, zusTotal, income, lumpSumRate, pit0Enabled } = params;
    const taxableRevenue = applyPit0Deduction(revenueNetOfVAT, pit0Enabled);
    const pit = taxableRevenue * lumpSumRate;

    const yearlyRevenue = revenueNetOfVAT * 12;
    let healthContribution: number;

    if (yearlyRevenue <= LUMP_SUM_HEALTH_TIERS.LOW_REVENUE) {
        healthContribution = TAX_CONSTANTS.AVERAGE_SALARY *
            LUMP_SUM_HEALTH_TIERS.LOW_RATE *
            ZUS_CONTRIBUTION_RATES.health;
    } else if (yearlyRevenue <= LUMP_SUM_HEALTH_TIERS.MID_REVENUE) {
        healthContribution = TAX_CONSTANTS.AVERAGE_SALARY *
            LUMP_SUM_HEALTH_TIERS.MID_RATE *
            ZUS_CONTRIBUTION_RATES.health;
    } else {
        const healthBase = income - zusTotal;
        healthContribution = healthBase * LUMP_SUM_HEALTH_TIERS.HIGH_RATE;
    }

    return { pit, healthContribution };
};

export const calculateTax = (
    taxForm: TaxForm,
    params: TaxCalculationParams
): TaxResult => {
    switch (taxForm) {
        case 'flat19':
            return calculateFlat19Tax(params);
        case 'taxScale':
            return calculateTaxScaleTax(params);
        case 'lumpSum':
            return calculateLumpSumTax(params);
        default:
            return { pit: 0, healthContribution: 0 };
    }
};
