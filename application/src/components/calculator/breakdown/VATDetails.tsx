import { memo } from 'react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { formatNumber } from '../../../utils/format';
import BreakdownHeader from './shared/BreakdownHeader';
import BreakdownSection from './shared/BreakdownSection';
import BreakdownRow from './shared/BreakdownRow';
import InfoBox from './shared/InfoBox';
import type { DetailedBreakdown } from '../../../types/calculator';

interface VATDetailsProps {
    data: DetailedBreakdown['vat'];
}

const VATDetails: FC<VATDetailsProps> = memo(({ data }) => {
    const { vat, vatFromRevenue, vatFromCosts } = data;
    const { t } = useTranslation();

    return (
        <div className="space-y-4">
            <BreakdownHeader
                amount={vat}
                subtitle={t('calculator.results.breakdown.vat.subtitle')}
            />

            <div className="space-y-4">
                <BreakdownSection title={t('calculator.results.breakdown.vat.step1')}>
                    <BreakdownRow
                        label={t('calculator.results.breakdown.vat.revenueGross')}
                        value={`${formatNumber(vatFromRevenue / 0.23)} PLN`}
                    />
                    <BreakdownRow
                        label={t('calculator.results.breakdown.vat.vatRate')}
                        value="23%"
                    />

                    <hr className="border-slate-300 dark:border-slate-600" />

                    <BreakdownRow
                        label={t('calculator.results.breakdown.vat.vatDue')}
                        value={`${formatNumber(vatFromRevenue)} PLN`}
                        isTotal
                    />
                </BreakdownSection>

                <BreakdownSection title={t('calculator.results.breakdown.vat.step2')}>
                    {vatFromCosts > 0 ? (
                        <>
                            <BreakdownRow
                                label={t('calculator.results.breakdown.vat.costsGross')}
                                value={`${formatNumber(vatFromCosts / 0.23)} PLN`}
                            />
                            <BreakdownRow
                                label={t('calculator.results.breakdown.vat.vatRate')}
                                value="23%"
                            />

                            <hr className="border-slate-300 dark:border-slate-600" />

                            <BreakdownRow
                                label={t('calculator.results.breakdown.vat.vatDeductible')}
                                value={`${formatNumber(vatFromCosts)} PLN`}
                                isTotal
                            />
                        </>
                    ) : (
                        <div className="text-slate-500 dark:text-slate-400 text-sm">
                            {t('calculator.results.breakdown.vat.noCosts')}
                        </div>
                    )}
                </BreakdownSection>

                <BreakdownSection title={t('calculator.results.breakdown.vat.step3')}>
                    <BreakdownRow
                        label={t('calculator.results.breakdown.vat.vatDue')}
                        value={`${formatNumber(vatFromRevenue)} PLN`}
                    />

                    {vatFromCosts > 0 && (
                        <BreakdownRow
                            label={t('calculator.results.breakdown.vat.vatDeducted')}
                            value={`${formatNumber(vatFromCosts)} PLN`}
                        />
                    )}

                    <hr className="border-slate-300 dark:border-slate-600" />

                    <div className="flex justify-between items-center text-lg font-bold text-slate-900 dark:text-slate-100">
                        <span>{t('calculator.results.breakdown.vat.toPay')}</span>
                        <span className="text-slate-600 dark:text-slate-400">{formatNumber(vat)} PLN</span>
                    </div>
                </BreakdownSection>

                <InfoBox>
                    {t('calculator.results.breakdown.vat.info')}
                </InfoBox>
            </div>
        </div>
    );
});

VATDetails.displayName = 'VATDetails';

export default VATDetails;
