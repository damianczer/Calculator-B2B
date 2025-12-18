import { memo } from 'react';
import { GUIDE_STYLES } from '../../constants/styles';
import type { RateSize } from '../../types/guide';

interface TaxRateBoxProps {
    rate: string;
    label: string;
    size?: RateSize;
}

export const TaxRateBox = memo<TaxRateBoxProps>(({ rate, label, size = 'normal' }) => {
    const isLarge = size === 'large';

    return (
        <div className={isLarge ? GUIDE_STYLES.rateBoxLarge : GUIDE_STYLES.rateBox}>
            {isLarge && <div className="text-center">
                <div className={GUIDE_STYLES.rateValueLarge}>{rate}</div>
                <div className={`${GUIDE_STYLES.rateLabel} mt-2`}>{label}</div>
            </div>}
            {!isLarge && <>
                <div className={GUIDE_STYLES.rateValue}>{rate}</div>
                <div className={GUIDE_STYLES.rateLabel}>{label}</div>
            </>}
        </div>
    );
});

TaxRateBox.displayName = 'TaxRateBox';
