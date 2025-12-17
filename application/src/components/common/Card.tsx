import type { FC } from 'react';
import type { CardProps } from '../../types/components';
import { CARD_VARIANTS } from '../../constants/styles';

const Card: FC<CardProps> = ({ children, variant = 'default' }) => {
    return (
        <div className={`rounded-lg shadow border overflow-hidden flex flex-col h-full ${CARD_VARIANTS[variant]}`}>
            {children}
        </div>
    );
};

export default Card;
