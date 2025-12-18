import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { GuideSection } from '../GuideSection';
import { ItemList } from '../ItemList';
import { InfoBox } from '../InfoBox';
import { GUIDE_STYLES } from '../../../constants/styles';

export const WhenSection = memo(() => {
    const { t } = useTranslation();

    return (
        <GuideSection id="when" title={t('guide.when.title')}>
            <div className="space-y-3">
                <ItemList
                    iconType="none"
                    items={[
                        {
                            icon: <span className={GUIDE_STYLES.numberedBadge}>1</span>,
                            text: t('guide.when.point1')
                        },
                        {
                            icon: <span className={GUIDE_STYLES.numberedBadge}>2</span>,
                            text: t('guide.when.point2')
                        }
                    ]}
                />
            </div>
            <InfoBox variant="note">
                <p className={`${GUIDE_STYLES.textSmall} ${GUIDE_STYLES.textBody}`}>
                    <strong className={GUIDE_STYLES.textStrong}>{t('guide.when.important')}</strong> {t('guide.when.note')}
                </p>
            </InfoBox>
        </GuideSection>
    );
});

WhenSection.displayName = 'WhenSection';
