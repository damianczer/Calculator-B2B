import type { CryptoConfig } from '../types/currency';

export const CURRENCY_CONFIG = {
    SUPPORTED_CURRENCIES: ['EUR', 'USD', 'GBP', 'CHF', 'JPY'] as const,
    REFRESH_INTERVAL: 5 * 60 * 1000,
    CACHE_KEY: 'currency_rates_cache',
    CACHE_TTL: 60 * 60 * 1000,
    RATE_DECIMALS: 4,
} as const;

export const API_CONFIG = {
    NBP_BASE_URL: 'https://api.nbp.pl/api',
    COINGECKO_BASE_URL: 'https://api.coingecko.com/api/v3',
    REQUEST_TIMEOUT: 5000,
} as const;

export const CRYPTO_CURRENCIES: CryptoConfig[] = [
    { id: 'bitcoin', code: 'BTC', name: 'Bitcoin' },
    { id: 'ethereum', code: 'ETH', name: 'Ethereum' },
];

export const COMMODITY_CONFIG = {
    GOLD: {
        code: 'XAU',
        name: 'Złoto',
    },
} as const;

export type SupportedCurrency = typeof CURRENCY_CONFIG.SUPPORTED_CURRENCIES[number];