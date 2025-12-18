import type { ReactNode } from 'react';

export type SectionId = 'intro' | 'when' | 'taxScale' | 'flatTax' | 'lumpSum' | 'summary';

export interface Section {
    id: SectionId;
    label: string;
}

export interface ListItem {
    text: string;
    icon?: ReactNode;
}

export type IconType = 'check' | 'cross' | 'bullet' | 'none';

export type BoxVariant = 'default' | 'note';

export type RateSize = 'normal' | 'large';

export interface TaxRate {
    rate: string;
    label: string;
    description?: string;
}

export interface GuideContent {
    sections: Section[];
    taxRates: {
        taxScale: TaxRate[];
        flatTax: TaxRate;
        lumpSum: TaxRate[];
    };
}
