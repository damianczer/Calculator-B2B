import { memo, useCallback } from 'react';
import type { FC, InputHTMLAttributes, ChangeEvent } from 'react';
import { sanitizeNumberInput } from '../../utils/validation';

interface InputWithUnitProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
    unit: string;
    label?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    sanitize?: boolean;
}

const InputWithUnit: FC<InputWithUnitProps> = memo(({
    unit,
    label,
    className = '',
    onChange,
    sanitize = true,
    onKeyDown,
    maxLength,
    ...props
}) => {
    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (maxLength && e.target.value.length > maxLength) {
            e.target.value = e.target.value.slice(0, maxLength);
        }

        if (sanitize) {
            const sanitized = sanitizeNumberInput(e.target.value);
            if (sanitized !== e.target.value) {
                e.target.value = sanitized;
            }
        }
        onChange?.(e);
    }, [onChange, sanitize, maxLength]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (['e', 'E', '+', '-'].includes(e.key)) {
            e.preventDefault();
        }
        onKeyDown?.(e);
    }, [onKeyDown]);

    return (
        <div>
            {label && (
                <label className="block text-xs font-semibold text-gray-700 dark:text-slate-300 mb-1">
                    {label}
                </label>
            )}
            <div className="relative">
                <input
                    type="number"
                    className={`w-full pr-12 px-3 py-1.5 text-sm border border-slate-300 dark:border-slate-600 
                        rounded focus:border-slate-600 dark:focus:border-slate-400 focus:ring-1 focus:ring-slate-600
                        dark:focus:ring-slate-400 outline-none transition-all bg-white dark:bg-slate-900
                        text-slate-900 dark:text-slate-100 dark:[color-scheme:dark] ${className}`}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    {...props}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-500 dark:text-slate-400
                 pointer-events-none">
                    {unit}
                </span>
            </div>
        </div>
    );
});

InputWithUnit.displayName = 'InputWithUnit';

export default InputWithUnit;
