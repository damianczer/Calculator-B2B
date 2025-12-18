import { memo } from 'react';
import type { FC } from 'react';

const LoadingSpinner: FC = memo(() => {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900">
            <div className="flex flex-col items-center gap-4">
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-4 border-slate-700 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-transparent border-t-slate-100 rounded-full animate-spin"></div>
                </div>
                <p className="text-sm font-medium text-slate-300 animate-pulse">
                    Przełączanie motywu...
                </p>
            </div>
        </div>
    );
});

LoadingSpinner.displayName = 'LoadingSpinner';

export default LoadingSpinner;
