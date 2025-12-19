export interface ExchangeRate {
    code: string;
    currency: string;
    rate: number;
    date: string;
    table: string;
    type?: 'fiat' | 'crypto' | 'commodity';
    name?: string;
    error?: string;
}

export interface NBPRate {
    no: string;
    effectiveDate: string;
    mid: number;
}

export interface NBPResponse {
    table: string;
    currency: string;
    code: string;
    rates: NBPRate[];
}

export interface CoinGeckoResponse {
    [key: string]: {
        pln: number;
    };
}

export interface CryptoConfig {
    id: string;
    code: string;
    name: string;
}

export class APIError extends Error {
    statusCode?: number;

    constructor(message: string, statusCode?: number) {
        super(message);
        this.name = 'APIError';
        this.statusCode = statusCode;
    }
}

export interface Currency {
    code: string;
    name?: string;
    currency?: string;
    rate: number;
}

export interface UseCurrencyConverterProps {
    rates: ExchangeRate[];
    defaultFromCurrency?: string;
    defaultToCurrency?: string;
}

export interface UseCurrencyConverterReturn {
    amount: string;
    fromCurrency: string;
    toCurrency: string;
    result: number;
    allCurrencies: Currency[];
    setAmount: (amount: string) => void;
    setFromCurrency: (currency: string) => void;
    setToCurrency: (currency: string) => void;
    swapCurrencies: () => void;
    isValidAmount: boolean;
}

export interface CachedRatesData {
    rates: ExchangeRate[];
    timestamp: number;
}

export interface UseCurrencyRatesReturn {
    rates: ExchangeRate[];
    loading: boolean;
    error: string | null;
    lastUpdate: Date;
    refresh: () => Promise<void>;
}