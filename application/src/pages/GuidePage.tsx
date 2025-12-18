import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { GUIDE_STYLES } from '../constants/styles';
import { useActiveSection } from '../hooks/useActiveSection';
import { TableOfContents } from '../components/guide/TableOfContents';
import { IntroSection } from '../components/guide/sections/IntroSection';
import { WhenSection } from '../components/guide/sections/WhenSection';
import { TaxScaleSection } from '../components/guide/sections/TaxScaleSection';
import { FlatTaxSection } from '../components/guide/sections/FlatTaxSection';
import { LumpSumSection } from '../components/guide/sections/LumpSumSection';
import { SummarySection } from '../components/guide/sections/SummarySection';
import { SECTION_IDS, scrollToSection, generateSections } from '../utils/guideHelpers';

const GuidePage = memo(() => {
    const { t } = useTranslation();
    const activeSection = useActiveSection([...SECTION_IDS]);
    const sections = generateSections(SECTION_IDS, t);

    return (
        <div className={GUIDE_STYLES.container}>
            <div className={GUIDE_STYLES.maxWidth}>
                <header className={GUIDE_STYLES.header}>
                    <h1 className={GUIDE_STYLES.headerTitle}>{t('guide.title')}</h1>
                    <p className={GUIDE_STYLES.headerSubtitle}>{t('guide.subtitle')}</p>
                </header>

                <div className={GUIDE_STYLES.mainLayout}>
                    <TableOfContents
                        sections={sections}
                        activeSection={activeSection}
                        onSectionClick={scrollToSection}
                        title="Spis treści"
                    />

                    <main className={GUIDE_STYLES.mainContent}>
                        <div>
                            <IntroSection />
                            <WhenSection />
                            <TaxScaleSection />
                            <FlatTaxSection />
                            <LumpSumSection />
                            <SummarySection />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
});

GuidePage.displayName = 'GuidePage';

export default GuidePage;
