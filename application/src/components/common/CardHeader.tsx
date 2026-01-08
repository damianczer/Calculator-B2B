import { memo } from 'react';
import type { FC } from 'react';
import type { CardHeaderProps } from '../../types/components';
import { CARD_HEADER_VARIANTS } from '../../constants/styles';

const CardHeader: FC<CardHeaderProps> = memo(({ title, subtitle, variant = 'default', icon }) => {
    return (
        <div className={`px-4 py-2.5 border-b ${CARD_HEADER_VARIANTS[variant]}`}>
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-base font-bold text-slate-700 dark:text-slate-300">{title}</h2>
                    {subtitle && <p className="text-xs mt-0.5 text-slate-600 dark:text-slate-400">{subtitle}</p>}
                </div>
                {icon && <div className="w-6 h-6 text-slate-500 dark:text-slate-500 opacity-50 flex-shrink-0">{icon}</div>}
            </div>
        </div>
    );
});

CardHeader.displayName = 'CardHeader';

export default CardHeader;
