import { memo, type ReactNode } from 'react';
import { GUIDE_STYLES } from '../../constants/styles';
import type { BoxVariant } from '../../types/guide';

interface InfoBoxProps {
    title?: string;
    children: ReactNode;
    variant?: BoxVariant;
}

export const InfoBox = memo<InfoBoxProps>(({ title, children, variant = 'default' }) => {
    const className = variant === 'note' ? GUIDE_STYLES.noteBox : GUIDE_STYLES.infoBox;

    return (
        <div className={className}>
            {title && (
                <h4 className={`font-semibold ${GUIDE_STYLES.textStrong} mb-2`}>
                    {title}
                </h4>
            )}
            {children}
        </div>
    );
});

InfoBox.displayName = 'InfoBox';
