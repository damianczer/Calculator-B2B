export const BUTTON_VARIANTS = {
    primary: 'bg-slate-700 hover:bg-slate-800 text-white',
    secondary: 'bg-green-700 hover:bg-green-800 text-white',
    success: 'bg-white hover:bg-green-50 text-green-700',
    ghost: 'bg-green-500/40 hover:bg-green-500 text-white',
} as const;

export const BUTTON_SIZES = {
    sm: 'text-xs py-1.5 px-3',
    md: 'text-sm py-2 px-4',
} as const;

export const CARD_VARIANTS = {
    default: 'bg-white border-gray-200',
    success: 'bg-green-600 border-green-500',
} as const;

export const CARD_HEADER_VARIANTS = {
    default: 'bg-slate-800 border-slate-700',
    success: 'bg-green-600 border-green-500',
} as const;

export const SELECT_INPUT_CLASSES = 'w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:border-slate-600 focus:ring-1 focus:ring-slate-600 outline-none transition-all bg-white';
export const CHECKBOX_INPUT_CLASSES = 'w-3.5 h-3.5 rounded border border-gray-400 text-slate-700 focus:ring-1 focus:ring-slate-600';
export const LABEL_CLASSES = 'block text-xs font-semibold text-gray-700 uppercase';
