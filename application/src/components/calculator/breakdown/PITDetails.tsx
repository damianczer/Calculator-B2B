import { memo } from 'react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { formatNumber } from '../../../utils/format';
import BreakdownHeader from './shared/BreakdownHeader';
import BreakdownSection from './shared/BreakdownSection';
import BreakdownRow from './shared/BreakdownRow';
import type { DetailedBreakdown } from '../../../types/calculator';

interface PITDetailsProps {
    data: DetailedBreakdown['pit'];
}

const PITDetails: FC<PITDetailsProps> = memo(({ data }) => {
    const { pit, revenue, costs, zus, healthDeduction, taxBase, taxRate, taxForm, freeAmount } = data;
    const { t } = useTranslation();

    return (
        <div className="space-y-4">
            <BreakdownHeader
                amount={pit}
                subtitle={t('calculator.results.breakdown.pit.subtitle')}
            />

            <div className="space-y-4">
                <BreakdownSection title={t('calculator.results.breakdown.pit.step1')}>
                    <BreakdownRow
                        label={t('calculator.results.breakdown.pit.revenue')}
                        value={`${formatNumber(revenue)} PLN`}
                    />

                    {taxForm !== 'lumpSum' && costs > 0 && (
                        <BreakdownRow
                            label={t('calculator.results.breakdown.pit.costs')}
                            value={`${formatNumber(costs)} PLN`}
                        />
                    )}

                    <BreakdownRow
                        label={t('calculator.results.breakdown.pit.zus')}
                        value={`${formatNumber(zus)} PLN`}
                    />

                    {healthDeduction > 0 && (
                        <BreakdownRow
                            label={t('calculator.results.breakdown.pit.health50')}
                            value={`${formatNumber(healthDeduction)} PLN`}
                        />
                    )}

                    <hr className="border-slate-300 dark:border-slate-600" />

                    <BreakdownRow
                        label={t('calculator.results.breakdown.pit.taxBase')}
                        value={`${formatNumber(taxBase)} PLN`}
                        isTotal
                    />
                </BreakdownSection>

                <BreakdownSection title={t('calculator.results.breakdown.pit.step2')}>
                    <BreakdownRow
                        label={`${t('calculator.results.breakdown.pit.taxRate')} (${Math.round(taxRate * 100)}%)`}
                        value={`${formatNumber(taxBase * taxRate)} PLN`}
                    />

                    {freeAmount && freeAmount > 0 && (
                        <>
                            <BreakdownRow
                                label={t('calculator.results.breakdown.pit.freeAmount')}
                                value={`${formatNumber(freeAmount / 12)} PLN`}
                            />
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                💡 {t('calculator.results.breakdown.pit.freeAmountYearly')}: {formatNumber(freeAmount)} PLN
                            </div>
                        </>
                    )}

                    <hr className="border-slate-300 dark:border-slate-600" />

                    <div className="flex justify-between items-center text-lg font-bold text-slate-900 dark:text-slate-100">
                        <span>{t('calculator.results.breakdown.pit.taxToPay')}</span>
                        <span className="text-slate-600 dark:text-slate-400">{formatNumber(pit)} PLN</span>
                    </div>
                </BreakdownSection>
            </div>
        </div>
    );
});

PITDetails.displayName = 'PITDetails';

export default PITDetails;
