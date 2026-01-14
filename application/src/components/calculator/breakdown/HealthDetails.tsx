import { memo } from 'react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { formatNumber } from '../../../utils/format';
import BreakdownHeader from './shared/BreakdownHeader';
import InfoBox from './shared/InfoBox';
import type { DetailedBreakdown } from '../../../types/calculator';

interface HealthDetailsProps {
    data: DetailedBreakdown['health'];
}

const HealthDetails: FC<HealthDetailsProps> = memo(({ data }) => {
    const { health, healthBase, healthRate, taxForm, yearlyRevenue, tier } = data;
    const { t } = useTranslation();

    const deductionInfo = taxForm === 'flat19'
        ? t('calculator.results.breakdown.health.flat19Info')
        : taxForm === 'taxScale'
            ? t('calculator.results.breakdown.health.taxScaleInfo')
            : t('calculator.results.breakdown.health.lumpSumDeductionInfo');

    return (
        <div className="space-y-4">
            <BreakdownHeader
                amount={health}
                subtitle={t('calculator.results.breakdown.health.subtitle')}
            />

            <div className="space-y-3 text-slate-700 dark:text-slate-300">
                {taxForm === 'lumpSum' && yearlyRevenue !== undefined && (
                    <div className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded">
                        <div className="text-sm mb-2">
                            <span className="font-semibold">{t('calculator.results.breakdown.health.lumpSumInfo')}:</span>
                        </div>
                        <div className="text-sm space-y-1">
                            <div>• {t('calculator.results.breakdown.health.tier1')}</div>
                            <div>• {t('calculator.results.breakdown.health.tier2')}</div>
                            <div>• {t('calculator.results.breakdown.health.tier3')}</div>
                        </div>
                        {tier && (
                            <div className="mt-3 p-2 bg-slate-100 dark:bg-slate-700 rounded">
                                <div className="text-sm font-semibold">
                                    {t('calculator.results.breakdown.health.yearlyRevenue')}: {formatNumber(yearlyRevenue)} PLN
                                </div>
                                <div className="text-sm">{t('calculator.results.breakdown.health.tier')}: {tier}</div>
                            </div>
                        )}
                    </div>
                )}

                <div className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded flex justify-between items-center">
                    <div>
                        <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                            {t('calculator.results.breakdown.health.calculation')}:
                        </div>
                        <div className="text-sm">
                            {Math.round(healthRate * 100)}% × {formatNumber(healthBase)} PLN
                        </div>
                    </div>
                    <span className="font-semibold text-lg ml-4">{formatNumber(health)} PLN</span>
                </div>

                <InfoBox>
                    {deductionInfo}
                </InfoBox>
            </div>
        </div>
    );
});

HealthDetails.displayName = 'HealthDetails';

export default HealthDetails;
