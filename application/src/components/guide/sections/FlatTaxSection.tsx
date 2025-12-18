import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { GuideSection } from '../GuideSection';
import { TaxRateBox } from '../TaxRateBox';
import { ItemList } from '../ItemList';
import { InfoBox } from '../InfoBox';
import { GUIDE_STYLES } from '../../../constants/styles';

export const FlatTaxSection = memo(() => {
    const { t } = useTranslation();

    return (
        <GuideSection id="flatTax" title={t('guide.flatTax.title')}>
            <TaxRateBox
                rate="19%"
                label={t('guide.flatTax.rateNote')}
                size="large"
            />

            <h3 className={GUIDE_STYLES.sectionSubtitle}>
                {t('guide.flatTax.advantagesTitle')}
            </h3>
            <ItemList
                iconType="check"
                items={[
                    { text: t('guide.flatTax.adv1') },
                    { text: t('guide.flatTax.adv2') },
                    { text: t('guide.flatTax.adv3') }
                ]}
            />

            <h3 className={GUIDE_STYLES.sectionSubtitle}>
                {t('guide.flatTax.limitationsTitle')}
            </h3>
            <ItemList
                iconType="cross"
                items={[
                    { text: t('guide.flatTax.lim1') },
                    { text: t('guide.flatTax.lim2') },
                    { text: t('guide.flatTax.lim3') }
                ]}
            />

            <InfoBox title={t('guide.flatTax.exampleTitle')}>
                <p className={GUIDE_STYLES.textBody}>{t('guide.flatTax.example')}</p>
            </InfoBox>
        </GuideSection>
    );
});

FlatTaxSection.displayName = 'FlatTaxSection';
