import type { ZUSType } from '../types/calculator';
import { ZUS_BASE, ZUS_CONTRIBUTION_RATES } from '../constants/tax';

interface ZUSContributions {
    pension: number;
    disability: number;
    sickness: number;
    accident: number;
    labor: number;
    total: number;
}

const roundToTwoDecimals = (value: number): number => Math.round(value * 100) / 100;

export const calculateZUSContributions = (
    zusType: ZUSType,
    withSickness: boolean
): ZUSContributions => {
    if (zusType === 'startup') {
        return {
            pension: 0,
            disability: 0,
            sickness: 0,
            accident: 0,
            labor: 0,
            total: 0
        };
    }

    const base = ZUS_BASE[zusType];
    const pension = base * ZUS_CONTRIBUTION_RATES.pension;
    const disability = base * ZUS_CONTRIBUTION_RATES.disability;
    const sickness = withSickness ? base * ZUS_CONTRIBUTION_RATES.sickness : 0;
    const accident = base * ZUS_CONTRIBUTION_RATES.accident;
    const labor = base * ZUS_CONTRIBUTION_RATES.labor;
    const total = pension + disability + sickness + accident + labor;

    return {
        pension: roundToTwoDecimals(pension),
        disability: roundToTwoDecimals(disability),
        sickness: roundToTwoDecimals(sickness),
        accident: roundToTwoDecimals(accident),
        labor: roundToTwoDecimals(labor),
        total: roundToTwoDecimals(total)
    };
};
