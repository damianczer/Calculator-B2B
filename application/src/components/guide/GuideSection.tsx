import { memo, type ReactNode } from 'react';
import { GUIDE_STYLES } from '../../constants/styles';
import type { SectionId } from '../../types/guide';

interface GuideSectionProps {
    id: SectionId;
    title: string;
    children: ReactNode;
}

export const GuideSection = memo<GuideSectionProps>(({ id, title, children }) => (
    <section id={id} className={GUIDE_STYLES.section}>
        <h2 className={GUIDE_STYLES.sectionTitle}>{title}</h2>
        {children}
    </section>
));

GuideSection.displayName = 'GuideSection';
