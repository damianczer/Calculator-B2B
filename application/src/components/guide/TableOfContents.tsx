import { memo } from 'react';
import { GUIDE_STYLES } from '../../constants/styles';
import type { Section, SectionId } from '../../types/guide';

interface TableOfContentsProps {
    sections: Section[];
    activeSection: SectionId | string;
    onSectionClick: (sectionId: SectionId) => void;
    title: string;
}

export const TableOfContents = memo<TableOfContentsProps>(({
    sections,
    activeSection,
    onSectionClick,
    title
}) => (
    <aside className={GUIDE_STYLES.sidebar}>
        <nav className={GUIDE_STYLES.sidebarNav}>
            <h3 className={GUIDE_STYLES.sidebarTitle}>{title}</h3>
            <ul className={GUIDE_STYLES.sidebarList}>
                {sections.map(({ id, label }) => (
                    <li key={id}>
                        <button
                            onClick={() => onSectionClick(id)}
                            className={`${GUIDE_STYLES.sidebarButton} ${activeSection === id
                                ? GUIDE_STYLES.sidebarButtonActive
                                : GUIDE_STYLES.sidebarButtonInactive
                                }`}
                        >
                            {label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    </aside>
));

TableOfContents.displayName = 'TableOfContents';
