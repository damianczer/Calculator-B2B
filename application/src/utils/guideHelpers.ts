import type { SectionId, Section } from '../types/guide';

export const SECTION_IDS: readonly SectionId[] = ['intro', 'when', 'taxScale', 'flatTax', 'lumpSum', 'summary'] as const;

export const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const generateSections = (
    sectionIds: readonly SectionId[],
    t: (key: string) => string
): Section[] => {
    return sectionIds.map(id => ({
        id,
        label: t(`guide.${id}.title`)
    }));
};
