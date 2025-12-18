import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { GuideSection } from '../GuideSection';
import { ItemList } from '../ItemList';
import { InfoBox } from '../InfoBox';
import { GUIDE_STYLES } from '../../../constants/styles';

export const SummarySection = memo(() => {
    const { t } = useTranslation();

    return (
        <GuideSection id="summary" title={t('guide.summary.title')}>
            <div className="space-y-6">
                <InfoBox title={t('guide.summary.taxScaleTitle')}>
                    <ItemList
                        iconType="bullet"
                        items={[
                            { text: t('guide.summary.taxScale1') },
                            { text: t('guide.summary.taxScale2') },
                            { text: t('guide.summary.taxScale3') }
                        ]}
                    />
                </InfoBox>

                <InfoBox title={t('guide.summary.flatTaxTitle')}>
                    <ItemList
                        iconType="bullet"
                        items={[
                            { text: t('guide.summary.flatTax1') },
                            { text: t('guide.summary.flatTax2') },
                            { text: t('guide.summary.flatTax3') }
                        ]}
                    />
                </InfoBox>

                <InfoBox title={t('guide.summary.lumpSumTitle')}>
                    <ItemList
                        iconType="bullet"
                        items={[
                            { text: t('guide.summary.lumpSum1') },
                            { text: t('guide.summary.lumpSum2') },
                            { text: t('guide.summary.lumpSum3') }
                        ]}
                    />
                </InfoBox>
            </div>

            <InfoBox variant="note">
                <p className={`${GUIDE_STYLES.textBody} ${GUIDE_STYLES.textSmall} ${GUIDE_STYLES.textItalic}`}>
                    {t('guide.summary.note')}
                </p>
            </InfoBox>
        </GuideSection>
    );
});

SummarySection.displayName = 'SummarySection';
