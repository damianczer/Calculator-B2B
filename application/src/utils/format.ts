import { CURRENCY_CONFIG } from '../constants/currency';

export const formatNumber = (value: number | string, decimals: number = 2): string => {
    const num = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(num)) return '0,00';

    const fixed = num.toFixed(decimals);
    const [integerPart, decimalPart] = fixed.split('.');
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    return decimalPart ? `${formattedInteger},${decimalPart}` : formattedInteger;
};

export const formatCurrency = (amount: number | undefined): string => {
    if (amount === undefined || amount === null || isNaN(amount)) {
        return '0,00 zł';
    }
    return `${formatNumber(amount, 2)} zł`;
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

export const getResponsiveNumberClasses = (formattedValue: string) => {
    const length = formattedValue.replace(/\s/g, '').length;

    if (length > 12) {
        return {
            fontSize: 'text-xl',
            padding: 'px-3 py-2',
            unitSize: 'text-sm'
        };
    }

    if (length > 9) {
        return {
            fontSize: 'text-2xl',
            padding: 'px-4 py-2.5',
            unitSize: 'text-base'
        };
    }

    if (length > 7) {
        return {
            fontSize: 'text-2xl',
            padding: 'px-5 py-3',
            unitSize: 'text-base'
        };
    }

    return {
        fontSize: 'text-3xl',
        padding: 'px-6 py-3',
        unitSize: 'text-lg'
    };
};
