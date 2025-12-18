export type Language = 'pl' | 'en';

export interface NavigationLink {
    readonly path: string;
    readonly labelKey: string;
}

export interface TranslationKeys {
    readonly common: {
        readonly appName: string;
        readonly loading: string;
        readonly comingSoon: string;
    };
    readonly header: {
        readonly guide: string;
        readonly b2b: string;
        readonly uop: string;
        readonly company: string;
    };
}
