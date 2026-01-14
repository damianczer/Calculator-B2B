import { memo } from 'react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { formatNumber } from '../../../utils/format';
import BreakdownHeader from './shared/BreakdownHeader';
import type { DetailedBreakdown } from '../../../types/calculator';

interface ZUSDetailsProps {
    data: DetailedBreakdown['zus'];
}

const ZUSDetails: FC<ZUSDetailsProps> = memo(({ data }) => {
    const { total, pension, disability, sickness, accident, labor, base, zusType } = data;
    const { t } = useTranslation();

    const zusTypeLabel = zusType === 'full' ? t('calculator.results.breakdown.zus.full') : zusType === 'small' ? t('calculator.results.breakdown.zus.small') : t('calculator.results.breakdown.zus.startup');

    const contributions = [
        { name: t('calculator.results.breakdown.zus.pension'), rate: '19.52%', percent: '30%', base, amount: pension },
        { name: t('calculator.results.breakdown.zus.disability'), rate: '8.00%', percent: '30%', base, amount: disability },
        { name: t('calculator.results.breakdown.zus.sickness'), rate: sickness > 0 ? '2.45%' : '0.00%', percent: sickness > 0 ? '100%' : '0%', base: sickness > 0 ? base : 0, amount: sickness },
        { name: t('calculator.results.breakdown.zus.accident'), rate: '1.67%', percent: '30%', base, amount: accident },
        { name: t('calculator.results.breakdown.zus.labor'), rate: '0.00%', percent: '0%', base: 0, amount: labor },
    ];

    return (
        <div className="space-y-4">
            <BreakdownHeader
                amount={total}
                subtitle={`${t('calculator.results.breakdown.zus.subtitle')} (${zusTypeLabel})`}
            />

            {zusType === 'startup' ? (
                <div className="text-center p-4 bg-slate-100 dark:bg-slate-700 rounded-lg">
                    <div className="text-slate-700 dark:text-slate-300">
                        {t('calculator.results.breakdown.zus.startupInfo')}
                    </div>
                </div>
            ) : (
                <div className="space-y-2">
                    {contributions.map((item) => (
                        <div
                            key={item.name}
                            className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded flex justify-between items-center"
                        >
                            <div>
                                <div className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                                    {item.name}
                                </div>
                                <div className="text-sm text-slate-600 dark:text-slate-400">
                                    {item.rate} × {item.percent} × {formatNumber(item.base)} PLN
                                </div>
                            </div>
                            <span className="text-lg font-bold text-slate-600 dark:text-slate-400 ml-4">
                                {formatNumber(item.amount)} PLN
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
});

ZUSDetails.displayName = 'ZUSDetails';

export default ZUSDetails;
