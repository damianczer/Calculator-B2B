import type { PropsWithChildren } from 'react';

export interface BaseComponentProps {
    readonly className?: string;
}

export interface LayoutProps extends PropsWithChildren {
    readonly headerTitle?: string;
}

export interface HeaderProps {
    readonly title?: string;
}

export interface NavigationLink {
    readonly href: string;
    readonly label: string;
}
