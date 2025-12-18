import { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface ComingSoonPageProps {
    title: string;
    description: string;
    icon: ReactNode;
}

const ComingSoonPage: FC<ComingSoonPageProps> = memo(({ title, description, icon }) => {
    return (
        <div className="w-full h-full flex items-center justify-center p-6">
            <div className="max-w-2xl w-full">
                <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-slate-200">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 rounded-full mb-6">
                        {icon}
                    </div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">
                        {title}
                    </h1>
                    <p className="text-slate-600 text-lg mb-2">
                        {description}
                    </p>
                    <div className="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mt-4">
                        Wkrótce
                    </div>
                </div>
            </div>
        </div>
    );
});

ComingSoonPage.displayName = 'ComingSoonPage';

export default ComingSoonPage;
