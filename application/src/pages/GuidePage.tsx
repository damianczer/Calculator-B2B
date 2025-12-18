import { memo } from 'react';

const GuidePage = memo(() => {
    return (
        <div className="min-h-screen bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-slate-900 mb-8">
                    Poradnik B2B
                </h1>
                <div className="bg-white rounded-lg shadow-sm p-8">
                    <p className="text-slate-600 text-lg">
                        Treść poradnika będzie tutaj...
                    </p>
                </div>
            </div>
        </div>
    );
});

GuidePage.displayName = 'GuidePage';

export default GuidePage;
