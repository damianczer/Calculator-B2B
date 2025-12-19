import { Component, type ReactNode, type ErrorInfo } from 'react';
import { withTranslation, type WithTranslation } from 'react-i18next';
import type { ErrorBoundaryProps, ErrorBoundaryState } from '../../types/components';
import { WarningIcon } from './icons';

class ErrorBoundaryClass extends Component<ErrorBoundaryProps & WithTranslation, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps & WithTranslation) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    render(): ReactNode {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            const { t } = this.props;

            return (
                <div className="fixed inset-0 flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4 z-50">
                    <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 text-center 
                    border border-slate-200 dark:border-slate-700">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center 
                        justify-center">
                            <WarningIcon className="w-8 h-8 text-red-600 dark:text-red-400" />
                        </div>
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                            {t('error.title')}
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                            {t('error.message')}
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors 
                            font-medium w-full"
                        >
                            {t('error.reload')}
                        </button>
                        {import.meta.env.DEV && this.state.error && (
                            <details className="mt-6 text-left">
                                <summary className="cursor-pointer text-sm text-slate-500 hover:text-slate-700
                                 dark:hover:text-slate-300 font-medium">
                                    {t('error.details')}
                                </summary>
                                <pre className="mt-2 p-4 bg-slate-100 dark:bg-slate-900 rounded text-xs max-h-40 overflow-y-auto
                                 text-red-600 dark:text-red-400 whitespace-pre-wrap break-words">
                                    {this.state.error.toString()}
                                    {this.state.error.stack && `\n\n${this.state.error.stack}`}
                                </pre>
                            </details>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export const ErrorBoundary = withTranslation()(ErrorBoundaryClass);
