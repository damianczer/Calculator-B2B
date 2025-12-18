import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { GuideSection } from '../GuideSection';
import { TaxRateBox } from '../TaxRateBox';
import { ItemList } from '../ItemList';
import { InfoBox } from '../InfoBox';
import { GUIDE_STYLES } from '../../../constants/styles';

export const LumpSumSection = memo(() => {
    const { t } = useTranslation();

    return (
        <GuideSection id="lumpSum" title={t('guide.lumpSum.title')}>
            <h3 className={GUIDE_STYLES.sectionSubtitle}>
                {t('guide.lumpSum.ratesTitle')}
            </h3>
            <div className={GUIDE_STYLES.gridThree}>
                <TaxRateBox rate="3%" label={t('guide.lumpSum.rate1')} />
                <TaxRateBox rate="8,5-12%" label={t('guide.lumpSum.rate2')} />
                <TaxRateBox rate="17%" label={t('guide.lumpSum.rate3')} />
            </div>

            <h3 className={GUIDE_STYLES.sectionSubtitle}>
                {t('guide.lumpSum.advantagesTitle')}
            </h3>
            <ItemList
                iconType="check"
                items={[
                    { text: t('guide.lumpSum.adv1') },
                    { text: t('guide.lumpSum.adv2') },
                    { text: t('guide.lumpSum.adv3') }
                ]}
            />

            <h3 className={GUIDE_STYLES.sectionSubtitle}>
                {t('guide.lumpSum.disadvantagesTitle')}
            </h3>
            <ItemList
                iconType="cross"
                items={[
                    { text: t('guide.lumpSum.dis1') },
                    { text: t('guide.lumpSum.dis2') },
                    { text: t('guide.lumpSum.dis3') }
                ]}
            />

            <InfoBox title={t('guide.lumpSum.exampleTitle')}>
                <p className={GUIDE_STYLES.textBody}>{t('guide.lumpSum.example')}</p>
            </InfoBox>
        </GuideSection>
    );
});

LumpSumSection.displayName = 'LumpSumSection';
