import { memo } from 'react';

const GuidePage = memo(() => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
                    Poradnik B2B
                </h1>
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-8 border
                 border-slate-200 dark:border-slate-700">
                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Treść poradnika będzie tutaj...
                    </p>
                </div>
            </div>
        </div>
    );
});

GuidePage.displayName = 'GuidePage';

export default GuidePage;
