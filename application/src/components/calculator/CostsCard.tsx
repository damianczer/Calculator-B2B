import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../common/Card';
import CardHeader from '../common/CardHeader';
import EmptyState from '../common/EmptyState';
import Button from '../common/Button';
import { DocumentIcon } from '../common/icons';
import type { CostsCardProps } from '../../types/calculator';

const CostsCard: FC<CostsCardProps> = () => {
    const { t } = useTranslation();

    return (
        <Card>
            <CardHeader title={t('calculator.costs.title')} subtitle={t('calculator.costs.subtitle')} />
            <div className="p-4 space-y-3 flex-1 flex flex-col">
                <EmptyState
                    icon={<DocumentIcon className="w-full h-full" />}
                    message={t('calculator.costs.emptyState')}
                />
                <Button fullWidth>
                    <span className="text-lg">+</span>
                    <span>{t('calculator.costs.addCost')}</span>
                </Button>
            </div>
        </Card>
    );
};

export default CostsCard;
