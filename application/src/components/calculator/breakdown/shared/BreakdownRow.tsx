import { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface BreakdownRowProps {
    label: string | ReactNode;
    value: string | ReactNode;
    isTotal?: boolean;
}

const BreakdownRow: FC<BreakdownRowProps> = memo(({ label, value, isTotal = false }) => {
    const baseClasses = "flex justify-between items-center";
    const textClasses = isTotal
        ? "font-semibold text-slate-900 dark:text-slate-100"
        : "text-slate-700 dark:text-slate-300";

    return (
        <div className={`${baseClasses} ${textClasses}`}>
            <span>{label}</span>
            <span className={isTotal ? "" : "font-semibold"}>{value}</span>
        </div>
    );
});

BreakdownRow.displayName = 'BreakdownRow';

export default BreakdownRow;
