import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { GuideSection } from '../GuideSection';
import { TaxRateBox } from '../TaxRateBox';
import { ItemList } from '../ItemList';
import { InfoBox } from '../InfoBox';
import { GUIDE_STYLES } from '../../../constants/styles';

export const TaxScaleSection = memo(() => {
    const { t } = useTranslation();

    return (
        <GuideSection id="taxScale" title={t('guide.taxScale.title')}>
            <h3 className={GUIDE_STYLES.sectionSubtitle}>
                {t('guide.taxScale.ratesTitle')}
            </h3>
            <div className={GUIDE_STYLES.gridTwo}>
                <TaxRateBox rate="12%" label={t('guide.taxScale.rate1')} />
                <TaxRateBox rate="32%" label={t('guide.taxScale.rate2')} />
            </div>

            <h3 className={GUIDE_STYLES.sectionSubtitle}>
                {t('guide.taxScale.advantagesTitle')}
            </h3>
            <ItemList
                iconType="check"
                items={[
                    { text: t('guide.taxScale.adv1') },
                    { text: t('guide.taxScale.adv2') },
                    { text: t('guide.taxScale.adv3') },
                    { text: t('guide.taxScale.adv4') }
                ]}
            />

            <h3 className={GUIDE_STYLES.sectionSubtitle}>
                {t('guide.taxScale.obligationsTitle')}
            </h3>
            <ItemList
                iconType="bullet"
                items={[
                    { text: t('guide.taxScale.obl1') },
                    { text: t('guide.taxScale.obl2') },
                    { text: t('guide.taxScale.obl3') }
                ]}
            />

            <InfoBox title={t('guide.taxScale.exampleTitle')}>
                <p className={GUIDE_STYLES.textBody}>{t('guide.taxScale.example')}</p>
            </InfoBox>
        </GuideSection>
    );
});

TaxScaleSection.displayName = 'TaxScaleSection';
