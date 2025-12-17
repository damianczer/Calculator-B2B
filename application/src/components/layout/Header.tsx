import { memo, useState } from 'react';
import { NAVIGATION_LINKS } from '../../constants/app';
import type { HeaderProps } from '../../types/components';

const Header = memo<HeaderProps>(() => {
    const [activeTab, setActiveTab] = useState('B2B');

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur
         supports-[backdrop-filter]:bg-white/60">
            <div className="flex h-16 items-center justify-between mx-auto max-w-[1600px] px-4">
                <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight font-sans">
                        <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                            Calculator
                        </span>
                        {' '}
                        <span className="text-slate-400">B2B</span>
                    </h1>
                </div>

                <nav className="hidden md:flex items-center" aria-label="Main navigation">
                    <div className="inline-flex bg-slate-100 rounded-lg p-1 gap-1">
                        {NAVIGATION_LINKS.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => setActiveTab(link.label)}
                                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all duration-200 
                                    ${activeTab === link.label
                                        ? 'bg-white text-slate-900 shadow-sm'
                                        : 'text-slate-600 hover:text-slate-900'
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    );
});

Header.displayName = 'Header';

export default Header;
