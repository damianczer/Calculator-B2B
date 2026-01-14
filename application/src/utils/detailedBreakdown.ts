import type { DetailedBreakdown, TaxForm, ZUSType } from '../types/calculator';
import { TAX_CONSTANTS, LUMP_SUM_HEALTH_TIERS, ZUS_BASE } from '../constants/tax';

interface BuildDetailedBreakdownParams {
    pit: number;
    totalRevenue: number;
    totalCosts: number;
    zusTotal: number;
    healthTotal: number;
    vatTotal: number;
    taxForm: TaxForm;
    taxBase: number;
    taxRate: number;
    zusType: ZUSType;
    zusData: {
        pension: number;
        disability: number;
        sickness: number;
        accident: number;
        labor: number;
        total: number;
    };
    yearlyRevenue: number;
}

export const buildDetailedBreakdown = (params: BuildDetailedBreakdownParams): DetailedBreakdown => {
    const {
        pit,
        totalRevenue,
        totalCosts,
        zusTotal,
        healthTotal,
        vatTotal,
        taxForm,
        taxBase,
        taxRate,
        zusType,
        zusData,
        yearlyRevenue
    } = params;

    const roundToTwo = (n: number) => Math.round(n * 100) / 100;

    let healthRateUsed = 0.09;
    let tier = '';
    let healthBase = totalRevenue - totalCosts - zusTotal;

    if (taxForm === 'lumpSum') {
        if (yearlyRevenue <= LUMP_SUM_HEALTH_TIERS.LOW_REVENUE) {
            healthRateUsed = LUMP_SUM_HEALTH_TIERS.LOW_RATE * 0.09;
            tier = 'Do 60 000 PLN/rok';
        } else if (yearlyRevenue <= LUMP_SUM_HEALTH_TIERS.MID_REVENUE) {
            healthRateUsed = LUMP_SUM_HEALTH_TIERS.MID_RATE * 0.09;
            tier = '60 000-300 000 PLN/rok';
        } else {
            healthRateUsed = LUMP_SUM_HEALTH_TIERS.HIGH_RATE;
            tier = 'Powyżej 300 000 PLN/rok';
        }
        healthBase = TAX_CONSTANTS.AVERAGE_SALARY;
    }

    return {
        pit: {
            pit: roundToTwo(pit),
            revenue: totalRevenue,
            costs: totalCosts,
            zus: zusTotal,
            healthDeduction: taxForm !== 'lumpSum' ? healthTotal * 0.5 : 0,
            taxBase,
            taxRate,
            taxForm,
            freeAmount: taxForm === 'taxScale' ? TAX_CONSTANTS.FREE_AMOUNT : undefined
        },
        vat: {
            vat: roundToTwo(vatTotal),
            vatFromRevenue: roundToTwo(vatTotal),
            vatFromCosts: 0
        },
        zus: {
            total: zusTotal,
            pension: zusData.pension,
            disability: zusData.disability,
            sickness: zusData.sickness,
            accident: zusData.accident,
            labor: zusData.labor,
            base: ZUS_BASE[zusType] || 0,
            zusType
        },
        health: {
            health: healthTotal,
            healthBase,
            healthRate: healthRateUsed,
            taxForm,
            yearlyRevenue: taxForm === 'lumpSum' ? yearlyRevenue : undefined,
            tier: taxForm === 'lumpSum' ? tier : undefined
        }
    };
};
