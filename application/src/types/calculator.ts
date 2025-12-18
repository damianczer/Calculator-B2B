export interface TaxBreakdown {
    pit: number;
    vat: number;
    zus: number;
    health: number;
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

export interface RevenueCardProps {
    title?: string;
    totalRevenue?: number;
}

export interface CostsCardProps {
    totalCosts?: number;
}

export interface ResultsCardProps {
    netIncome?: number;
    breakdown?: TaxBreakdown;
}
