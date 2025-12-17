import type { FC } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import type { ResultsCardProps } from '../../types/calculator';

const formatCurrency = (amount: number): string => {
    return `${amount.toFixed(2)} zł`;
};

const ResultsCard: FC<ResultsCardProps> = ({
    netIncome = 0,
    breakdown = { pit: 0, vat: 0, zus: 0, health: 0 }
}) => {
    const breakdownItems = [
        { label: 'PIT', amount: breakdown.pit },
        { label: 'VAT', amount: breakdown.vat },
        { label: 'ZUS', amount: breakdown.zus },
        { label: 'Zdrowotna', amount: breakdown.health },
    ];

    return (
        <Card variant="success">
            <div className="p-4 text-center border-b border-green-500">
                <div className="inline-block px-3 py-1 bg-green-500 rounded mb-2">
                    <span className="text-white text-xs font-semibold">Przychód netto</span>
                </div>
                <div className="text-4xl font-bold text-white mb-1">
                    {formatCurrency(netIncome).split(' ')[0]} <span className="text-xl">zł</span>
                </div>
                <p className="text-green-50 text-xs">Po podatkach i składkach</p>
            </div>

            <div className="p-4 space-y-1.5 flex-1">
                {breakdownItems.map(({ label, amount }) => (
                    <div
                        key={label}
                        className="flex items-center justify-between p-2 bg-green-500/40 rounded hover:bg-green-500 transition-all"
                    >
                        <span className="text-white text-sm">{label}</span>
                        <span className="text-white font-bold text-sm">{formatCurrency(amount)}</span>
                    </div>
                ))}
            </div>

            <div className="p-4 pt-0 space-y-2">
                <Button variant="success" fullWidth>
                    Porównaj z UOP
                </Button>
                <div className="grid grid-cols-2 gap-2">
                    <Button variant="secondary" size="sm">
                        Udostępnij
                    </Button>
                    <Button variant="secondary" size="sm">
                        Reset
                    </Button>
                </div>
                <Button variant="ghost" fullWidth size="sm">
                    Szczegółowe
                </Button>
            </div>
        </Card>
    );
};

export default ResultsCard;
