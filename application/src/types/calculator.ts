export interface TaxBreakdown {
    pit: number;
    vat: number;
    zus: number;
    health: number;
}

export type TaxForm = 'Skala podatkowa' | 'Podatek liniowy 19%' | 'Ryczałt';
export type ZUSType = 'Pełny ZUS' | 'Mały ZUS+' | 'Ulga na start';

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
