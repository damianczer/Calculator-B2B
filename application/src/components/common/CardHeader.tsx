import type { FC } from 'react';
import type { CardHeaderProps } from '../../types/components';
import { CARD_HEADER_VARIANTS } from '../../constants/styles';

const CardHeader: FC<CardHeaderProps> = ({ title, subtitle, variant = 'default' }) => {
    return (
        <div className={`px-4 py-2.5 border-b ${CARD_HEADER_VARIANTS[variant]}`}>
            <h2 className="text-base font-bold text-white">{title}</h2>
            {subtitle && <p className="text-xs mt-0.5 text-white/80">{subtitle}</p>}
        </div>
    );
};

export default CardHeader;
