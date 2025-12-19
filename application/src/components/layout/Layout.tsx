import { memo } from 'react';
import type { LayoutProps } from '../../types/components';
import Header from './Header';
import Footer from './Footer';

const Layout = memo<LayoutProps>(({ children, headerTitle }) => {
    return (
        <div className="flex h-screen flex-col overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors">
            <Header title={headerTitle} />

            <main className="flex-1 overflow-y-auto">
                {children}
            </main>

            <Footer />
        </div>
    );
});

Layout.displayName = 'Layout';

export default Layout;
