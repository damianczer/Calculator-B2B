import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../common/Card';
import CardHeader from '../common/CardHeader';
import EmptyState from '../common/EmptyState';
import Button from '../common/Button';
import { CalculatorIcon } from '../common/icons';
import type { RevenueCardProps } from '../../types/calculator';

const RevenueCard: FC<RevenueCardProps> = ({
    title
}) => {
    const { t } = useTranslation();

    return (
        <Card>
            <CardHeader
                title={title || t('calculator.revenue.title')}
                subtitle={t('calculator.revenue.subtitle')}
            />
            <div className="p-4 space-y-3 flex-1 flex flex-col">
                <EmptyState
                    icon={<CalculatorIcon className="w-full h-full" />}
                    message={t('calculator.revenue.emptyState')}
                />
                <Button fullWidth>
                    <span className="text-lg">+</span>
                    <span>{t('calculator.revenue.addRevenue')}</span>
                </Button>
            </div>
        </Card>
    );
};

export default RevenueCard;
