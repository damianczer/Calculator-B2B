import { memo } from 'react';
import type { FC } from 'react';
import type { CardProps } from '../../types/components';
import { CARD_VARIANTS } from '../../constants/styles';

const Card: FC<CardProps> = memo(({ children, variant = 'default' }) => {
    return (
        <div className={`rounded-lg shadow border overflow-hidden flex flex-col flex-1 ${CARD_VARIANTS[variant]}`}>
            {children}
        </div>
    );
});

Card.displayName = 'Card';

export default Card;
