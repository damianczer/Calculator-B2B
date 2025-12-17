import type { FC } from 'react';
import Card from '../common/Card';
import CardHeader from '../common/CardHeader';
import EmptyState from '../common/EmptyState';
import Button from '../common/Button';
import { DocumentIcon } from '../common/icons';
import type { CostsCardProps } from '../../types/calculator';

const CostsCard: FC<CostsCardProps> = ({ totalCosts = 0 }) => {
    return (
        <Card>
            <CardHeader title="Koszty" subtitle={`Suma: ${totalCosts} PLN`} />
            <div className="p-4 space-y-3 flex-1 flex flex-col">
                <EmptyState
                    icon={<DocumentIcon className="w-full h-full" />}
                    message="Brak kosztów"
                />
                <Button fullWidth>
                    <span className="text-lg">+</span>
                    <span>Dodaj koszt</span>
                </Button>
            </div>
        </Card>
    );
};

export default CostsCard;
