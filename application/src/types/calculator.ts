export interface TaxBreakdown {
    pit: number;
    vat: number;
    zus: number;
    health: number;
}

export interface DetailedBreakdown {
    pit: {
        pit: number;
        revenue: number;
        costs: number;
        zus: number;
        healthDeduction: number;
        taxBase: number;
        taxRate: number;
        taxForm: string;
        freeAmount?: number;
    };
    vat: {
        vat: number;
        vatFromRevenue: number;
        vatFromCosts: number;
    };
    zus: {
        total: number;
        pension: number;
        disability: number;
        sickness: number;
        accident: number;
        labor: number;
        base: number;
        zusType: string;
    };
    health: {
        health: number;
        healthBase: number;
        healthRate: number;
        taxForm: string;
        yearlyRevenue?: number;
        tier?: string;
    };
}

export interface CalculatorSettings {
    taxForm: string;
    zusType: string;
    lumpSumRate: string;
    voluntarySickness: boolean;
    saveForVacation: boolean;
    jointSettlement: boolean;
    ipBox: boolean;
    pit0: boolean;
}

export const TaxForm = {
    TAX_SCALE: 'taxScale',
    FLAT_19: 'flat19',
    LUMP_SUM: 'lumpSum'
} as const;

export const ZUSType = {
    FULL: 'full',
    SMALL: 'small',
    STARTUP: 'startup'
} as const;

export type TaxForm = typeof TaxForm[keyof typeof TaxForm];
export type ZUSType = typeof ZUSType[keyof typeof ZUSType];

export interface ResultsCardProps {
    netIncome?: number;
    breakdown?: TaxBreakdown;
    invoiceTotal?: number;
    detailedBreakdown?: DetailedBreakdown;
}
