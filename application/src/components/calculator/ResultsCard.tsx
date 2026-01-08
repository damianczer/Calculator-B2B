import { memo } from 'react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../common/Button';
import { formatNumber } from '../../utils/format';
import type { ResultsCardProps } from '../../types/calculator';
import { CARD_VARIANTS } from '../../constants/styles';
import { ChevronDownIcon } from '../common/icons';
import { useCountUp } from '../../hooks/useCountUp';

const ResultsCard: FC<ResultsCardProps> = memo(({
    netIncome = 0,
    breakdown = { pit: 0, vat: 0, zus: 0, health: 0 },
    invoiceTotal = 0
}) => {
    const { t } = useTranslation();

    const animatedNetIncome = useCountUp(netIncome);
    const animatedInvoiceTotal = useCountUp(invoiceTotal);
    const animatedPit = useCountUp(breakdown.pit);
    const animatedVat = useCountUp(breakdown.vat);
    const animatedZus = useCountUp(breakdown.zus);
    const animatedHealth = useCountUp(breakdown.health);

    const breakdownItems = [
        { label: t('calculator.results.pit'), amount: animatedPit },
        { label: t('calculator.results.vat'), amount: animatedVat },
        { label: t('calculator.results.zus'), amount: animatedZus },
        { label: t('calculator.results.health'), amount: animatedHealth },
    ];

    return (
        <div className={`border-t border-b overflow-hidden flex flex-col ${CARD_VARIANTS.default}`}>
            <div className="py-4 pl-4 pr-4">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 text-center px-6 py-3 bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded">
                            <div className="mb-1">
                                <span className="text-slate-900 dark:text-slate-100 text-sm font-semibold">
                                    {t('calculator.results.netIncome')}
                                </span>
                            </div>
                            <div className="text-3xl font-bold text-green-600 dark:text-green-500">
                                {formatNumber(animatedNetIncome)} <span className="text-lg">PLN</span>
                            </div>
                        </div>

                        <div className="flex-shrink-0 text-center px-6 py-3 bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded">
                            <div className="mb-1">
                                <span className="text-slate-900 dark:text-slate-100 text-sm font-semibold">
                                    {t('calculator.results.invoiceTotal')}
                                </span>
                            </div>
                            <div className="text-3xl font-bold text-slate-600 dark:text-slate-400">
                                {formatNumber(animatedInvoiceTotal)} <span className="text-lg">PLN</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pr-4">
                        {breakdownItems.map(({ label, amount }) => (
                            <div
                                key={label}
                                className="relative px-6 py-3 bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded text-center whitespace-nowrap cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                            >
                                <button 
                                    className="absolute top-2 right-2 p-0.5 rounded hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors"
                                    aria-label={`${label} details`}
                                >
                                    <ChevronDownIcon className="w-4 h-4 text-slate-500 dark:text-slate-400 rotate-[-90deg]" />
                                </button>
                                <div className="text-slate-900 dark:text-slate-100 text-sm mb-1">
                                    {label}
                                </div>
                                <div className="text-slate-600 dark:text-slate-400 text-lg font-semibold">
                                    {formatNumber(amount)} <span className="text-slate-600 dark:text-slate-400">PLN</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex-shrink-0 pr-8 flex flex-col gap-2 w-64">
                        <Button variant="primary">
                            {t('calculator.results.yearlySettlement')}
                        </Button>
                        <Button variant="primary">
                            {t('calculator.results.compareUOP')}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
});

ResultsCard.displayName = 'ResultsCard';

export default ResultsCard;
