import type { TaxForm, ZUSType } from '../types/calculator';

export const calculateZUS = (
    type: ZUSType,
    withSickness: boolean = false
): number => {
    const rates = {
        full: { base: 1012.53, sickness: 81.56 },
        small: { base: 673.63, sickness: 54.25 },
        startup: { base: 336.82, sickness: 27.13 }
    };

    const zusData = rates[type];
    return zusData.base + (withSickness ? zusData.sickness : 0);
};

export const calculateHealthContribution = (
    income: number,
    zus: number
): number => {
    const healthBase = income - zus;
    return healthBase * 0.09;
};

export const calculatePIT = (
    income: number,
    zus: number,
    taxForm: TaxForm,
    totalRevenue: number,
    lumpSumRate: number = 12
): number => {
    const taxBase = income - zus;

    switch (taxForm) {
        case 'flat19':
            return taxBase * 0.19;

        case 'taxScale': {
            const yearlyIncome = taxBase * 12;
            const TAX_THRESHOLD = 120000;
            const TAX_FREE_AMOUNT = 30000;

            let yearlyTax = 0;
            if (yearlyIncome <= TAX_THRESHOLD) {
                yearlyTax = yearlyIncome * 0.12;
            } else {
                yearlyTax = TAX_THRESHOLD * 0.12 + (yearlyIncome - TAX_THRESHOLD) * 0.32;
            }

            const taxFreeDeduction = TAX_FREE_AMOUNT * 0.12;
            yearlyTax = Math.max(0, yearlyTax - taxFreeDeduction);

            return yearlyTax / 12;
        }

        case 'lumpSum':
            return totalRevenue * (lumpSumRate / 100);

        default:
            return 0;
    }
};

export const calculateVAT = (
    revenue: number,
    vatRate: number
): number => {
    return revenue * vatRate / (100 + vatRate);
};

export const formatNumber = (num: number, decimals: number = 2): string => {
    return num.toFixed(decimals);
};
