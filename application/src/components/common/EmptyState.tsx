import type { FC } from 'react';
import type { EmptyStateProps } from '../../types/components';

const EmptyState: FC<EmptyStateProps> = ({ icon, message }) => {
    return (
        <div className="border border-dashed border-gray-300 rounded p-4 text-center bg-gray-50 flex-1 flex flex-col justify-center">
            <div className="w-12 h-12 mx-auto mb-2 text-gray-400">
                {icon}
            </div>
            <p className="text-gray-600 text-sm font-medium">{message}</p>
        </div>
    );
};

export default EmptyState;
