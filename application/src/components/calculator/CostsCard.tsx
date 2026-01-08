import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../common/Card';
import CardHeader from '../common/CardHeader';
import EmptyState from '../common/EmptyState';
import Button from '../common/Button';
import { CustomDropdown } from '../common/CustomDropdown';
import { DocumentIcon, TrashIcon, ReceiptIcon } from '../common/icons';
import type { CostItem } from '../../hooks/useB2BCalculator';
import { formatNumber } from '../../utils/format';

interface CostsCardProps {
    costs: CostItem[];
    setCosts: React.Dispatch<React.SetStateAction<CostItem[]>>;
}

const CostsCard: FC<CostsCardProps> = ({ costs, setCosts }) => {
    const { t } = useTranslation();

    const addCost = () => {
        const newId = Math.max(...costs.map(c => c.id), 0) + 1;
        setCosts([
            ...costs,
            {
                id: newId,
                name: '',
                amount: '0',
                isMonthly: true
            }
        ]);
    };

    const deleteCost = (id: number) => {
        setCosts(costs.filter(c => c.id !== id));
    };

    const updateCost = (id: number, field: keyof CostItem, value: unknown) => {
        setCosts(costs.map(c => c.id === id ? { ...c, [field]: value } : c));
    };

    const totalMonthlyCosts = costs.reduce((sum, c) => {
        const amount = parseFloat(c.amount || '0');
        return sum + (c.isMonthly ? amount : amount / 12);
    }, 0);

    return (
        <Card>
            <CardHeader 
                title={t('calculator.costs.title')} 
                subtitle={costs.length > 0 ? `${t('common.total')}: ${formatNumber(totalMonthlyCosts)} ${t('common.perMonth')}` : t('calculator.costs.subtitle')}
                icon={<ReceiptIcon />}
            />
            <div className="p-4 space-y-3 flex-1 flex flex-col">
                {costs.length === 0 ? (
                    <EmptyState
                        icon={<DocumentIcon className="w-full h-full" />}
                        message={t('calculator.costs.emptyState')}
                    />
                ) : (
                    <div className="space-y-3 flex-1">
                        {costs.map((cost) => (
                            <div 
                                key={cost.id} 
                                className="p-3 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700"
                            >
                                <div className="flex items-start gap-2 mb-2">
                                    <input
                                        type="text"
                                        value={cost.name}
                                        onChange={(e) => updateCost(cost.id, 'name', e.target.value)}
                                        placeholder={t('calculator.costs.costName')}
                                        className="flex-1 px-3 py-1.5 text-sm border border-slate-300 dark:border-slate-600 rounded focus:border-slate-600 dark:focus:border-slate-400 focus:ring-1 focus:ring-slate-600 dark:focus:ring-slate-400 outline-none transition-all bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
                                    />
                                    <button
                                        onClick={() => deleteCost(cost.id)}
                                        className="p-1.5 hover:bg-red-100 dark:hover:bg-red-900/30 rounded transition-colors"
                                        title="Usuń koszt"
                                    >
                                        <TrashIcon className="w-4 h-4 text-gray-600 dark:text-slate-400" />
                                    </button>
                                </div>
                                
                                <div className="flex gap-2">
                                    <input
                                        type="number"
                                        value={cost.amount}
                                        onChange={(e) => updateCost(cost.id, 'amount', e.target.value)}
                                        placeholder="0"
                                        className="flex-1 px-3 py-1.5 text-sm border border-slate-300 dark:border-slate-600 rounded focus:border-slate-600 dark:focus:border-slate-400 focus:ring-1 focus:ring-slate-600 dark:focus:ring-slate-400 outline-none transition-all bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 dark:[color-scheme:dark]"
                                    />
                                    <CustomDropdown
                                        value={cost.isMonthly ? t('calculator.costs.monthly') : t('calculator.costs.yearly')}
                                        onChange={(value) => updateCost(cost.id, 'isMonthly', value === t('calculator.costs.monthly'))}
                                        options={[
                                            { code: t('calculator.costs.monthly') },
                                            { code: t('calculator.costs.yearly') }
                                        ]}
                                        className="w-32 pl-3 pr-8 py-1.5 text-sm border border-slate-300 dark:border-slate-600 rounded focus:border-slate-600 dark:focus:border-slate-400 focus:ring-1 focus:ring-slate-600 dark:focus:ring-slate-400 outline-none transition-all bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                
                <Button fullWidth onClick={addCost}>
                    <span className="text-lg">+</span>
                    <span>{t('calculator.costs.addCost')}</span>
                </Button>
            </div>
        </Card>
    );
};

export default CostsCard;
