import { memo } from 'react';
import type { FC } from 'react';

interface NumberStepperProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    label?: string;
}

const NumberStepper: FC<NumberStepperProps> = memo(({ value, onChange, min = 1, max, label }) => {
    const handleDecrement = () => {
        const newValue = value - 1;
        if (newValue >= min) onChange(newValue);
    };

    const handleIncrement = () => {
        const newValue = value + 1;
        if (max === undefined || newValue <= max) onChange(newValue);
    };

    return (
        <div>
            {label && (
                <label className="block text-xs font-semibold text-gray-700 dark:text-slate-300 mb-1">
                    {label}
                </label>
            )}
            <div className="flex items-center gap-2">
                <button
                    onClick={handleDecrement}
                    disabled={value <= min}
                    className="w-8 h-8 rounded bg-slate-200 dark:bg-slate-700 hover:bg-slate-300
                     dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed text-slate-700
                     dark:text-slate-300 font-bold flex items-center justify-center leading-none"
                >
                    <span className="-translate-y-[2px] inline-block">−</span>
                </button>
                <div className="flex-1 h-8 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600
                 rounded flex items-center justify-center">
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{value}</span>
                </div>
                <button
                    onClick={handleIncrement}
                    disabled={max !== undefined && value >= max}
                    className="w-8 h-8 rounded bg-slate-200 dark:bg-slate-700 hover:bg-slate-300
                    dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed text-slate-700
                    dark:text-slate-300 font-bold flex items-center justify-center leading-none"
                >
                    <span className="-translate-y-[2px] inline-block">+</span>
                </button>
            </div>
        </div>
    );
});

NumberStepper.displayName = 'NumberStepper';

export default NumberStepper;
