import { memo } from 'react';
import type { LayoutProps } from '../../types/components';
import Header from './Header';
import Footer from './Footer';

const Layout = memo<LayoutProps>(({ children, headerTitle }) => {
    return (
        <div className="flex h-screen flex-col overflow-hidden">
            <Header title={headerTitle} />

            <main className="flex-1 overflow-hidden">
                {children}
            </main>

            <Footer />
        </div>
    );
});

Layout.displayName = 'Layout';

export default Layout;
