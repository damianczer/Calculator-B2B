import { memo, useId } from 'react';
import type { FC } from 'react';
import type { SelectFieldProps, CheckboxFieldProps } from '../../types/components';
import { SELECT_INPUT_CLASSES, CHECKBOX_INPUT_CLASSES, LABEL_CLASSES } from '../../constants/styles';

export const SelectField: FC<SelectFieldProps> = memo(({ label, options, id, ...props }) => {
    return (
        <div className="space-y-1">
            <label htmlFor={id} className={LABEL_CLASSES}>
                {label}
            </label>
            <select
                id={id}
                className={SELECT_INPUT_CLASSES}
                aria-label={label}
                {...props}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
});

SelectField.displayName = 'SelectField';

export const CheckboxField: FC<CheckboxFieldProps> = memo(({ label, id, ...props }) => {
    const reactId = useId();
    const checkboxId = id || `checkbox-${reactId}`;

    return (
        <label htmlFor={checkboxId} className="flex items-center gap-2 cursor-pointer group">
            <input
                id={checkboxId}
                type="checkbox"
                className={CHECKBOX_INPUT_CLASSES}
                aria-label={label}
                {...props}
            />
            <span className="text-xs text-gray-700 dark:text-slate-300 group-hover:text-gray-900
             dark:group-hover:text-slate-100 transition-colors">
                {label}
            </span>
        </label>
    );
});

CheckboxField.displayName = 'CheckboxField';
