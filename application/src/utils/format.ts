import { CURRENCY_CONFIG } from '../constants/currency';

export const formatCurrency = (amount: number | undefined): string => {
    if (amount === undefined || amount === null || isNaN(amount)) {
        return '0.00 zł';
    }
    return `${amount.toFixed(2)} zł`;
};

export const formatPercentage = (value: number): string => {
    return `${value}%`;
};

export const formatCurrencyRate = (rate: number, decimals: number = CURRENCY_CONFIG.RATE_DECIMALS): string => {
    return rate.toFixed(decimals);
};

export const formatDate = (dateString: string, locale: string): string => {
    try {
        return new Date(dateString).toLocaleDateString(locale);
    } catch {
        return dateString;
    }
};

export const formatTime = (date: Date, locale: string): string => {
    return date.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
};
