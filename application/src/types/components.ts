import type { PropsWithChildren, ReactNode, ButtonHTMLAttributes, SelectHTMLAttributes, InputHTMLAttributes } from 'react';

export interface LayoutProps extends PropsWithChildren {
    readonly headerTitle?: string;
}

export interface HeaderProps {
    readonly title?: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'success' | 'ghost';
    size?: 'sm' | 'md';
    fullWidth?: boolean;
    children: ReactNode;
}

export interface CardProps {
    children: ReactNode;
    variant?: 'default' | 'success';
}

export interface CardHeaderProps {
    title: string;
    subtitle?: string;
    variant?: 'default' | 'success';
    icon?: ReactNode;
}

export interface EmptyStateProps {
    icon: ReactNode;
    message: string;
}

export interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    options: string[];
}

export interface CheckboxFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export interface ComingSoonPageProps {
    title: string;
    description: string;
    icon: ReactNode;
}

export interface ErrorBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode;
}

export interface ErrorBoundaryState {
    hasError: boolean;
    error?: Error;
}
