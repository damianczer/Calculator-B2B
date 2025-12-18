import { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface LegalPageProps {
    translationKey: 'privacy' | 'terms';
    sectionsCount: number;
    showContactEmail?: boolean;
}

const LegalPage = memo<LegalPageProps>(({ translationKey, sectionsCount, showContactEmail = true }) => {
    const { t } = useTranslation();

    return (
        <div className="max-w-4xl mx-auto px-6 py-8">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                {t(`${translationKey}.title`)}
            </h1>
            <div className="prose dark:prose-invert max-w-none">
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {t(`${translationKey}.lastUpdated`, { date: new Date().toLocaleDateString() })}
                </p>

                {Array.from({ length: sectionsCount }, (_, i) => i + 1).map((num) => (
                    <section key={num} className="mb-8">
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
                            {t(`${translationKey}.section${num}.title`)}
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                            {t(`${translationKey}.section${num}.content`)}
                        </p>
                    </section>
                ))}

                {showContactEmail && (
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
                            {t(`${translationKey}.contact.title`)}
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                            {t(`${translationKey}.contact.content`)}{' '}
                            <a
                                href="mailto:kontakt@damianczerwinski.pl"
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
                            >
                                kontakt@damianczerwinski.pl
                            </a>
                        </p>
                    </section>
                )}
            </div>
        </div>
    );
});

LegalPage.displayName = 'LegalPage';

export default LegalPage;
