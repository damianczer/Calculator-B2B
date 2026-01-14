import type { CalculatorSettings, CostItem } from '../hooks/useB2BCalculator';

const CALCULATOR_STORAGE_KEY = 'calculator-b2b-state';

interface CalculatorState {
    monthlyRevenue: string;
    dailyRate: string;
    hourlyRate: string;
    workingDaysPerMonth: string;
    workingHoursPerDay: string;
    settings: CalculatorSettings;
    costs: CostItem[];
}

export const saveCalculatorState = (state: CalculatorState): void => {
    try {
        localStorage.setItem(CALCULATOR_STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
        console.error('Failed to save calculator state:', error);
    }
};

export const loadCalculatorState = (): CalculatorState | null => {
    try {
        const saved = localStorage.getItem(CALCULATOR_STORAGE_KEY);
        if (!saved) return null;

        const state = JSON.parse(saved);

        if (!state.settings || !Array.isArray(state.costs)) {
            return null;
        }

        return state as CalculatorState;
    } catch (error) {
        console.error('Failed to load calculator state:', error);
        return null;
    }
};

export const clearCalculatorState = (): void => {
    try {
        localStorage.removeItem(CALCULATOR_STORAGE_KEY);
    } catch (error) {
        console.error('Failed to clear calculator state:', error);
    }
};
