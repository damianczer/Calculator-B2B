import type { FC } from 'react';
import Card from '../common/Card';
import CardHeader from '../common/CardHeader';
import EmptyState from '../common/EmptyState';
import Button from '../common/Button';
import { CalculatorIcon } from '../common/icons';
import type { RevenueCardProps } from '../../types/calculator';

const RevenueCard: FC<RevenueCardProps> = ({
    title = 'Przychody B2B',
    totalRevenue = 0
}) => {
    return (
        <Card>
            <CardHeader title={title} subtitle={`Suma: ${totalRevenue} PLN/mies.`} />
            <div className="p-4 space-y-3 flex-1 flex flex-col">
                <EmptyState
                    icon={<CalculatorIcon className="w-full h-full" />}
                    message="Brak źródeł przychodu"
                />
                <Button fullWidth>
                    <span className="text-lg">+</span>
                    <span>Dodaj przychód</span>
                </Button>
            </div>
        </Card>
    );
};

export default RevenueCard;
