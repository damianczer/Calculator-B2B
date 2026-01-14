import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { GuideSection } from '../GuideSection';
import { ItemList } from '../ItemList';
import { GUIDE_STYLES } from '../../../constants/styles';

export const IntroSection = memo(() => {
    const { t } = useTranslation();

    return (
        <GuideSection id="intro" title={t('guide.intro.title')}>
            <p className={`${GUIDE_STYLES.textBody} mb-4`}>
                {t('guide.intro.description')}
            </p>
            <p className={`${GUIDE_STYLES.textBody} mb-4`}>
                {t('guide.intro.factors')}
            </p>
            <ItemList
                iconType="none"
                items={[
                    {
                        text: t('guide.intro.factor1'), icon:
                            <span className="text-slate-600 dark:text-slate-400 font-medium mr-2">1.</span>
                    },
                    {
                        text: t('guide.intro.factor2'), icon:
                            <span className="text-slate-600 dark:text-slate-400 font-medium mr-2">2.</span>
                    },
                    {
                        text: t('guide.intro.factor3'), icon:
                            <span className="text-slate-600 dark:text-slate-400 font-medium mr-2">3.</span>
                    },
                    {
                        text: t('guide.intro.factor4'), icon:
                            <span className="text-slate-600 dark:text-slate-400 font-medium mr-2">4.</span>
                    }
                ]}
            />
        </GuideSection>
    );
});

IntroSection.displayName = 'IntroSection';
