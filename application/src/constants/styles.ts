export const BUTTON_VARIANTS = {
    primary: 'bg-slate-700 hover:bg-slate-800 dark:bg-slate-600 dark:hover:bg-slate-700 text-white',
    secondary: 'bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 text-white',
    success: 'bg-white hover:bg-green-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-green-700 dark:text-green-400',
    ghost: 'bg-green-500/40 hover:bg-green-500 dark:bg-green-600/40 dark:hover:bg-green-600 text-white',
} as const;

export const BUTTON_SIZES = {
    sm: 'text-xs py-1.5 px-3',
    md: 'text-sm py-2 px-4',
} as const;

export const CARD_VARIANTS = {
    default: 'bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700',
    success: 'bg-green-600 dark:bg-green-700 border-green-500 dark:border-green-600',
} as const;

export const CARD_HEADER_VARIANTS = {
    default: 'bg-slate-800 dark:bg-slate-900 border-slate-700 dark:border-slate-800',
    success: 'bg-green-600 dark:bg-green-700 border-green-500 dark:border-green-600',
} as const;

export const SELECT_INPUT_CLASSES = 'w-full px-3 py-1.5 text-sm border border-gray-300 dark:border-slate-600 rounded focus:border-slate-600 dark:focus:border-slate-400 focus:ring-1 focus:ring-slate-600 dark:focus:ring-slate-400 outline-none transition-all bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100';
export const CHECKBOX_INPUT_CLASSES = 'w-3.5 h-3.5 rounded border border-gray-400 dark:border-slate-600 text-slate-700 dark:text-slate-400 focus:ring-1 focus:ring-slate-600 dark:focus:ring-slate-400 bg-white dark:bg-slate-900';
export const LABEL_CLASSES = 'block text-xs font-semibold text-gray-700 dark:text-slate-300 uppercase';

export const HEADER_CLASSES = 'sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 transition-colors';
export const HEADER_BUTTON_BASE = 'rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-100 transition-all';
