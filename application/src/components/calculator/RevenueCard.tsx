import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../common/Card';
import CardHeader from '../common/CardHeader';
import Button from '../common/Button';
import { CustomDropdown } from '../common/CustomDropdown';
import { TrashIcon, ChevronDownIcon, CashIcon } from '../common/icons';
import type { RevenueSource } from '../../hooks/useB2BCalculator';
import { formatNumber } from '../../utils/format';

interface RevenueCardProps {
    sources: RevenueSource[];
    setSources: React.Dispatch<React.SetStateAction<RevenueSource[]>>;
}

const RevenueCard: FC<RevenueCardProps> = ({ sources, setSources }) => {
    const { t } = useTranslation();

    const addSource = () => {
        const newId = Math.max(...sources.map(s => s.id), 0) + 1;
        setSources([
            ...sources.map(s => ({ ...s, isExpanded: false })),
            {
                id: newId,
                monthlyRevenue: '0',
                dailyRate: '0',
                hourlyRate: '0',
                currency: 'PLN',
                vat: '23',
                daysPerMonth: 20,
                hoursPerDay: 8,
                isExpanded: true,
                calculationMode: 'monthly' as const
            }
        ]);
    };

    const toggleExpand = (id: number) => {
        setSources(sources.map(s => s.id === id ? { ...s, isExpanded: !s.isExpanded } : s));
    };

    const deleteSource = (id: number) => {
        if (sources.length > 1) {
            setSources(sources.filter(s => s.id !== id));
        }
    };

    const updateSource = (id: number, field: keyof RevenueSource, value: unknown) => {
        setSources(sources.map(s => {
            if (s.id !== id) return s;

            const updated = { ...s, [field]: value };

            if (field === 'monthlyRevenue') {
                const monthly = parseFloat(value as string) || 0;
                updated.dailyRate = (monthly / updated.daysPerMonth).toFixed(2);
                updated.hourlyRate = (monthly / (updated.daysPerMonth * updated.hoursPerDay)).toFixed(2);
                updated.calculationMode = 'monthly';
            } else if (field === 'dailyRate') {
                const daily = parseFloat(value as string) || 0;
                updated.monthlyRevenue = (daily * updated.daysPerMonth).toFixed(2);
                updated.hourlyRate = (daily / updated.hoursPerDay).toFixed(2);
                updated.calculationMode = 'daily';
            } else if (field === 'hourlyRate') {
                const hourly = parseFloat(value as string) || 0;
                updated.monthlyRevenue = (hourly * updated.hoursPerDay * updated.daysPerMonth).toFixed(2);
                updated.dailyRate = (hourly * updated.hoursPerDay).toFixed(2);
                updated.calculationMode = 'hourly';
            } else if (field === 'daysPerMonth' || field === 'hoursPerDay') {
                if (field === 'daysPerMonth') {
                    const daily = parseFloat(updated.dailyRate) || 0;
                    updated.monthlyRevenue = (daily * updated.daysPerMonth).toFixed(2);
                    updated.hourlyRate = (daily / updated.hoursPerDay).toFixed(2);
                } else {
                    const hourly = parseFloat(updated.hourlyRate) || 0;
                    updated.monthlyRevenue = (hourly * updated.hoursPerDay * updated.daysPerMonth).toFixed(2);
                    updated.dailyRate = (hourly * updated.hoursPerDay).toFixed(2);
                }
            }

            return updated;
        }));
    };

    const totalMonthly = sources.reduce((sum, s) => sum + parseFloat(s.monthlyRevenue || '0'), 0);

    return (
        <Card>
            <CardHeader
                title={t('calculator.revenue.title')}
                subtitle={`${t('common.total')}: ${formatNumber(totalMonthly)} ${t('common.perMonth')}`}
                icon={<CashIcon />}
            />
            <div className="p-4 space-y-4 flex-1">
                {sources.map((source, index) => {
                    const sourceTotal = formatNumber(parseFloat(source.monthlyRevenue || '0'));

                    return (
                        <div key={source.id} className="p-3 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700">
                            <div
                                className={`text-sm font-semibold text-slate-700 dark:text-slate-300 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center justify-between ${source.isExpanded ? 'mb-3' : ''}`}
                            >
                                <span onClick={() => toggleExpand(source.id)} className="flex items-center gap-2">
                                    <span>{t('calculator.revenue.source')} {index + 1}</span>
                                    <span className="text-slate-500 dark:text-slate-400 font-normal ml-4">{sourceTotal} {source.currency}/mies.</span>
                                </span>
                                <div className="flex items-center gap-2">
                                    {sources.length > 1 && (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                deleteSource(source.id);
                                            }}
                                            className="p-1 hover:bg-red-100 dark:hover:bg-red-900/30 rounded transition-colors"
                                            title="Usuń źródło"
                                        >
                                            <TrashIcon className="w-4 h-4 text-gray-600 dark:text-slate-400" />
                                        </button>
                                    )}
                                    <span onClick={() => toggleExpand(source.id)}>
                                        <ChevronDownIcon
                                            className={`w-5 h-5 text-slate-400 dark:text-slate-500 transition-transform duration-200 ${source.isExpanded ? 'rotate-0' : '-rotate-90'}`}
                                        />
                                    </span>
                                </div>
                            </div>

                            {source.isExpanded && (
                                <div className="space-y-3">
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-700 dark:text-slate-300 mb-1">
                                                {t('calculator.revenue.monthlyRevenue')}
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="number"
                                                    value={source.monthlyRevenue}
                                                    onChange={(e) => updateSource(source.id, 'monthlyRevenue', e.target.value)}
                                                    aria-label="Przychód miesięczny"
                                                    className="w-full pr-12 px-3 py-1.5 text-sm border border-slate-300 dark:border-slate-600 rounded focus:border-slate-600 dark:focus:border-slate-400 focus:ring-1 focus:ring-slate-600 dark:focus:ring-slate-400 outline-none transition-all bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 dark:[color-scheme:dark]"
                                                />
                                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-500 dark:text-slate-400 pointer-events-none">
                                                    PLN
                                                </span>
                                            </div>
                                        </div>

                                        <div>
                                            <CustomDropdown
                                                value={source.vat}
                                                onChange={(value) => updateSource(source.id, 'vat', value)}
                                                options={['0', '5', '8', '23'].map(v => ({ code: v }))}
                                                className="w-full px-3 py-1.5 text-sm border border-slate-300 dark:border-slate-600 rounded focus:border-slate-600 dark:focus:border-slate-400 focus:ring-1 focus:ring-slate-600 dark:focus:ring-slate-400 outline-none transition-all bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
                                                label="VAT"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-700 dark:text-slate-300 mb-1">
                                                {t('calculator.revenue.dailyRate')}
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="number"
                                                    value={source.dailyRate}
                                                    onChange={(e) => updateSource(source.id, 'dailyRate', e.target.value)}
                                                    aria-label="Stawka dzienna"
                                                    className="w-full pr-12 px-3 py-1.5 text-sm border border-slate-300 dark:border-slate-600 rounded focus:border-slate-600 dark:focus:border-slate-400 focus:ring-1 focus:ring-slate-600 dark:focus:ring-slate-400 outline-none transition-all bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 dark:[color-scheme:dark]"
                                                />
                                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-500 dark:text-slate-400 pointer-events-none">
                                                    PLN
                                                </span>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-semibold text-gray-700 dark:text-slate-300 mb-1">
                                                {t('calculator.revenue.daysPerMonth')}
                                            </label>
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => updateSource(source.id, 'daysPerMonth', Math.max(1, source.daysPerMonth - 1))}
                                                    className="w-8 h-8 rounded bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 font-bold flex items-center justify-center leading-none"
                                                >
                                                    <span className="-translate-y-[2px] inline-block">−</span>
                                                </button>
                                                <div className="flex-1 h-8 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded flex items-center justify-center">
                                                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{source.daysPerMonth}</span>
                                                </div>
                                                <button
                                                    onClick={() => updateSource(source.id, 'daysPerMonth', source.daysPerMonth + 1)}
                                                    className="w-8 h-8 rounded bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 font-bold flex items-center justify-center leading-none"
                                                >
                                                    <span className="-translate-y-[2px] inline-block">+</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-700 dark:text-slate-300 mb-1">
                                                {t('calculator.revenue.hourlyRate')}
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="number"
                                                    value={source.hourlyRate}
                                                    onChange={(e) => updateSource(source.id, 'hourlyRate', e.target.value)}
                                                    aria-label="Stawka godzinowa"
                                                    className="w-full pr-12 px-3 py-1.5 text-sm border border-slate-300 dark:border-slate-600 rounded focus:border-slate-600 dark:focus:border-slate-400 focus:ring-1 focus:ring-slate-600 dark:focus:ring-slate-400 outline-none transition-all bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 dark:[color-scheme:dark]"
                                                />
                                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-500 dark:text-slate-400 pointer-events-none">
                                                    PLN
                                                </span>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-semibold text-gray-700 dark:text-slate-300 mb-1">
                                                {t('calculator.revenue.hoursPerDay')}
                                            </label>
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => updateSource(source.id, 'hoursPerDay', Math.max(1, source.hoursPerDay - 1))}
                                                    className="w-8 h-8 rounded bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 font-bold flex items-center justify-center leading-none"
                                                >
                                                    <span className="-translate-y-[2px] inline-block">−</span>
                                                </button>
                                                <div className="flex-1 h-8 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded flex items-center justify-center">
                                                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{source.hoursPerDay}</span>
                                                </div>
                                                <button
                                                    onClick={() => updateSource(source.id, 'hoursPerDay', source.hoursPerDay + 1)}
                                                    className="w-8 h-8 rounded bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 font-bold flex items-center justify-center leading-none"
                                                >
                                                    <span className="-translate-y-[2px] inline-block">+</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}

                <Button fullWidth onClick={addSource}>
                    <span className="text-lg">+</span>
                    <span>{t('calculator.revenue.addRevenue')}</span>
                </Button>
            </div>
        </Card>
    );
};

export default RevenueCard;
