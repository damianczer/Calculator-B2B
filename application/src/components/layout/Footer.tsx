import { memo, useMemo } from 'react';
import { APP_NAME, SOCIAL_LINKS } from '../../constants/app';

const Footer = memo(() => {
    const currentYear = useMemo(() => new Date().getFullYear(), []);

    return (
        <footer className="mt-auto border-t border-slate-200 bg-white">
            <div className="container py-8">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="flex flex-col items-center gap-2 md:items-start">
                        <p className="text-sm text-slate-600">
                            Copyright © {currentYear} {APP_NAME}. All rights reserved.
                        </p>
                    </div>

                    <nav className="flex gap-6" aria-label="Social links">
                        <a
                            href={SOCIAL_LINKS.github.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                            aria-label={SOCIAL_LINKS.github.label}
                        >
                            GitHub
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    );
});

Footer.displayName = 'Footer';

export default Footer;
