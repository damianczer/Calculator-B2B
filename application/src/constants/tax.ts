export const ZUS_BASE = {
    full: 4694.40,
    small: 3123.00,
    startup: 0
} as const;

export const ZUS_CONTRIBUTION_RATES = {
    pension: 0.1952,
    disability: 0.08,
    sickness: 0.0245,
    accident: 0.0167,
    labor: 0.0245,
    health: 0.09
} as const;

export const TAX_CONSTANTS = {
    FREE_AMOUNT: 30000,
    THRESHOLD: 120000,
    PIT0_YEARLY_LIMIT: 85528,
    AVERAGE_SALARY: 8254
} as const;

export const TAX_RATES = {
    FLAT: 0.19,
    SCALE_LOW: 0.12,
    SCALE_HIGH: 0.32
} as const;

export const LUMP_SUM_HEALTH_TIERS = {
    LOW_REVENUE: 60000,
    MID_REVENUE: 300000,
    LOW_RATE: 0.6,
    MID_RATE: 1.0,
    HIGH_RATE: 0.049
} as const;
