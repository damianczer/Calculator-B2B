import type { FC, SVGProps } from 'react';

export const CalculatorIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
    </svg>
);

export const DocumentIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
    </svg>
);
