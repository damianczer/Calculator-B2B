import { memo } from 'react';
import { APP_NAME, NAVIGATION_LINKS } from '../../constants/app';
import type { HeaderProps } from '../../types/components';

const Header = memo<HeaderProps>(({ title = APP_NAME }) => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <h1 className="text-xl font-semibold text-slate-900">{title}</h1>
                </div>

                <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
                    {NAVIGATION_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
});

Header.displayName = 'Header';

export default Header;
