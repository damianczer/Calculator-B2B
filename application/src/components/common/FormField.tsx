import type { FC } from 'react';
import type { SelectFieldProps, CheckboxFieldProps } from '../../types/components';
import { SELECT_INPUT_CLASSES, CHECKBOX_INPUT_CLASSES, LABEL_CLASSES } from '../../constants/styles';

export const SelectField: FC<SelectFieldProps> = ({ label, options, id, ...props }) => {
    return (
        <div className="space-y-1">
            <label htmlFor={id} className={LABEL_CLASSES}>
                {label}
            </label>
            <select
                id={id}
                className={SELECT_INPUT_CLASSES}
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
};

export const CheckboxField: FC<CheckboxFieldProps> = ({ label, ...props }) => {
    return (
        <label className="flex items-center gap-2 cursor-pointer group">
            <input
                type="checkbox"
                className={CHECKBOX_INPUT_CLASSES}
                {...props}
            />
            <span className="text-xs text-gray-700 group-hover:text-gray-900">{label}</span>
        </label>
    );
};
