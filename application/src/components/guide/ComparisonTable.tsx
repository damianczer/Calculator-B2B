import { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface ComparisonRow {
    featureKey: string;
    taxScaleKey: string;
    flatTaxKey: string;
    lumpSumKey: string;
}

const COMPARISON_DATA: ComparisonRow[] = [
    {
        featureKey: 'taxRate',
        taxScaleKey: 'taxRateTaxScale',
        flatTaxKey: 'taxRateFlat',
        lumpSumKey: 'taxRateLump',
    },
    {
        featureKey: 'taxFree',
        taxScaleKey: 'taxFreeTaxScale',
        flatTaxKey: 'taxFreeFlat',
        lumpSumKey: 'taxFreeLump',
    },
    {
        featureKey: 'costs',
        taxScaleKey: 'costsTaxScale',
        flatTaxKey: 'costsFlat',
        lumpSumKey: 'costsLump',
    },
    {
        featureKey: 'jointSettlement',
        taxScaleKey: 'jointSettlementTaxScale',
        flatTaxKey: 'jointSettlementFlat',
        lumpSumKey: 'jointSettlementLump',
    },
    {
        featureKey: 'taxReliefs',
        taxScaleKey: 'taxReliefsTaxScale',
        flatTaxKey: 'taxReliefsFlat',
        lumpSumKey: 'taxReliefsLump',
    },
];

const TABLE_STYLES = {
    headerCell: 'border-b border-r border-slate-200 dark:border-slate-700 px-4 py-3 text-left text-sm font-semibold text-slate-900 dark:text-slate-100',
    headerCellLast: 'border-b border-slate-200 dark:border-slate-700 px-4 py-3 text-left text-sm font-semibold text-slate-900 dark:text-slate-100',
    featureCell: 'border-b border-r border-slate-200 dark:border-slate-700 px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100',
    featureCellLast: 'border-r border-slate-200 dark:border-slate-700 px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100',
    dataCell: 'border-b border-r border-slate-200 dark:border-slate-700 px-4 py-3 text-sm text-slate-600 dark:text-slate-400',
    dataCellLast: 'border-b border-slate-200 dark:border-slate-700 px-4 py-3 text-sm text-slate-600 dark:text-slate-400',
    dataCellLastRow: 'border-r border-slate-200 dark:border-slate-700 px-4 py-3 text-sm text-slate-600 dark:text-slate-400',
    dataCellLastRowLast: 'px-4 py-3 text-sm text-slate-600 dark:text-slate-400',
} as const;

export const ComparisonTable = memo(() => {
    const { t } = useTranslation();

    const taxForms = [
        { nameKey: 'taxScale', dataKeys: COMPARISON_DATA.map(r => r.taxScaleKey) },
        { nameKey: 'flatTax', dataKeys: COMPARISON_DATA.map(r => r.flatTaxKey) },
        { nameKey: 'lumpSum', dataKeys: COMPARISON_DATA.map(r => r.lumpSumKey) },
    ];

    return (
        <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
                {t('guide.comparison.title')}
            </h3>

            <div className="hidden md:block overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                            <th className={TABLE_STYLES.headerCell}>
                                {t('guide.comparison.feature')}
                            </th>
                            <th className={TABLE_STYLES.headerCell}>
                                {t('guide.comparison.taxScale')}
                            </th>
                            <th className={TABLE_STYLES.headerCell}>
                                {t('guide.comparison.flatTax')}
                            </th>
                            <th className={TABLE_STYLES.headerCellLast}>
                                {t('guide.comparison.lumpSum')}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {COMPARISON_DATA.map((row, index) => {
                            const isEven = index % 2 === 0;
                            const isLastRow = index === COMPARISON_DATA.length - 1;

                            return (
                                <tr
                                    key={row.featureKey}
                                    className={isEven ? 'bg-white dark:bg-slate-900' : 'bg-slate-50 dark:bg-slate-800/50'}
                                >
                                    <td className={isLastRow ? TABLE_STYLES.featureCellLast : TABLE_STYLES.featureCell}>
                                        {t(`guide.comparison.${row.featureKey}`)}
                                    </td>
                                    <td className={isLastRow ? TABLE_STYLES.dataCellLastRow : TABLE_STYLES.dataCell}>
                                        {t(`guide.comparison.${row.taxScaleKey}`)}
                                    </td>
                                    <td className={isLastRow ? TABLE_STYLES.dataCellLastRow : TABLE_STYLES.dataCell}>
                                        {t(`guide.comparison.${row.flatTaxKey}`)}
                                    </td>
                                    <td className={isLastRow ? TABLE_STYLES.dataCellLastRowLast : TABLE_STYLES.dataCellLast}>
                                        {t(`guide.comparison.${row.lumpSumKey}`)}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className="md:hidden space-y-4">
                {taxForms.map((form) => (
                    <div key={form.nameKey} className="rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                        <div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
                            <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                                {t(`guide.comparison.${form.nameKey}`)}
                            </h4>
                        </div>
                        <div className="bg-white dark:bg-slate-900">
                            {COMPARISON_DATA.map((row, index) => (
                                <div
                                    key={row.featureKey}
                                    className={`px-4 py-3 ${index !== COMPARISON_DATA.length - 1 ? 'border-b border-slate-200 dark:border-slate-700' : ''}`}
                                >
                                    <div className="text-xs font-medium text-slate-900 dark:text-slate-100 mb-1">
                                        {t(`guide.comparison.${row.featureKey}`)}
                                    </div>
                                    <div className="text-sm text-slate-600 dark:text-slate-400">
                                        {t(`guide.comparison.${form.dataKeys[index]}`)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
});

ComparisonTable.displayName = 'ComparisonTable';
