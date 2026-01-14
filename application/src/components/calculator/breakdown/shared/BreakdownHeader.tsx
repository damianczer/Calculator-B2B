import { memo } from 'react';
import type { FC } from 'react';
import { formatNumber } from '../../../../utils/format';

interface BreakdownHeaderProps {
    amount: number;
    subtitle: string;
}

const BreakdownHeader: FC<BreakdownHeaderProps> = memo(({ amount, subtitle }) => {
    return (
        <div className="text-center p-4 bg-slate-100 dark:bg-slate-700 rounded-lg">
            <div className="text-3xl font-bold text-slate-600 dark:text-slate-400">
                {formatNumber(amount)} PLN
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                {subtitle}
            </div>
        </div>
    );
});

BreakdownHeader.displayName = 'BreakdownHeader';

export default BreakdownHeader;
