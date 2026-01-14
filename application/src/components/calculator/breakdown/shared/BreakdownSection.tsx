import { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface BreakdownSectionProps {
    title?: string;
    children: ReactNode;
}

const BreakdownSection: FC<BreakdownSectionProps> = memo(({ title, children }) => {
    return (
        <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg space-y-3">
            {title && (
                <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    {title}
                </div>
            )}
            {children}
        </div>
    );
});

BreakdownSection.displayName = 'BreakdownSection';

export default BreakdownSection;
