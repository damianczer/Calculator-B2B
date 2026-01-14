import { z } from 'zod';

export const numberInputSchema = z.string()
    .refine((val) => val === '' || !isNaN(Number(val)), {
        message: 'Must be a valid number'
    })
    .refine((val) => val === '' || Number(val) >= 0, {
        message: 'Must be non-negative'
    });

export const positiveNumberSchema = z.string()
    .refine((val) => val !== '' && !isNaN(Number(val)) && Number(val) > 0, {
        message: 'Must be a positive number'
    });

export const currencyAmountSchema = z.string()
    .refine((val) => val === '' || !isNaN(Number(val)), {
        message: 'Must be a valid number'
    })
    .refine((val) => val === '' || Number(val) >= 0, {
        message: 'Must be non-negative'
    })
    .refine((val) => {
        if (val === '') return true;
        const num = Number(val);
        return num <= 999999999;
    }, {
        message: 'Amount too large'
    });

export const validateNumberInput = (value: string): boolean => {
    return numberInputSchema.safeParse(value).success;
};

export const validatePositiveNumber = (value: string): boolean => {
    return positiveNumberSchema.safeParse(value).success;
};

export const validateCurrencyAmount = (value: string): boolean => {
    return currencyAmountSchema.safeParse(value).success;
};

export const sanitizeNumberInput = (value: string): string => {
    let sanitized = value.replace(/[^\d.,]/g, '');
    sanitized = sanitized.replace(',', '.');
    const parts = sanitized.split('.');

    if (parts.length > 2) {
        sanitized = parts[0] + '.' + parts.slice(1).join('');
    }

    return sanitized;
};

export const getValidationError = (value: string, schema: z.ZodSchema): string | null => {
    const result = schema.safeParse(value);
    if (!result.success) {
        return result.error.issues[0]?.message || 'Invalid input';
    }
    return null;
};

export const validateRange = (value: string, min: number, max: number): boolean => {
    if (value === '') return true;
    const num = Number(value);
    return !isNaN(num) && num >= min && num <= max;
};

export const validateMonthlyRevenue = (value: string): boolean => {
    if (value.length > 10) return false;
    return validateCurrencyAmount(value);
};

export const validateDailyRate = (value: string): boolean => {
    if (value.length > 8) return false;
    return validateCurrencyAmount(value);
};

export const validateHourlyRate = (value: string): boolean => {
    if (value.length > 8) return false;
    return validateCurrencyAmount(value);
};

export const validateWorkingDays = (value: string): boolean => {
    return validateRange(value, 1, 31);
};

export const validateWorkingHours = (value: string): boolean => {
    return validateRange(value, 1, 24);
};

export const FIELD_LIMITS = {
    HOURLY_RATE_MAX_LENGTH: 8,
    DAILY_RATE_MAX_LENGTH: 8,
    MONTHLY_REVENUE_MAX_LENGTH: 10,
    MAX_WORKING_DAYS: 31,
    MAX_WORKING_HOURS: 24,
} as const;
