import { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface InfoBoxProps {
    icon?: string;
    children: ReactNode;
}

const InfoBox: FC<InfoBoxProps> = memo(({ icon = '💡', children }) => {
    return (
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 p-3
         bg-slate-100 dark:bg-slate-700 rounded">
            <span className="text-base">{icon}</span>
            <span>{children}</span>
        </div>
    );
});

InfoBox.displayName = 'InfoBox';

export default InfoBox;
