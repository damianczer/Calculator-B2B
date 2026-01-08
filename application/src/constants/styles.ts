export const BUTTON_VARIANTS = {
    primary: 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-600',
    secondary: 'bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 text-white',
    success: 'bg-white hover:bg-green-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-green-700 dark:text-green-400',
    ghost: 'bg-green-500/40 hover:bg-green-500 dark:bg-green-600/40 dark:hover:bg-green-600 text-white',
    blue: 'bg-blue-500 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600 text-white',
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
    default: 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700',
    success: 'bg-green-600 dark:bg-green-700 border-green-500 dark:border-green-600',
} as const;

export const SELECT_INPUT_CLASSES = 'w-full px-3 py-1.5 text-sm border border-slate-300 dark:border-slate-600 rounded focus:border-slate-600 dark:focus:border-slate-400 focus:ring-1 focus:ring-slate-600 dark:focus:ring-slate-400 outline-none transition-all bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100';
export const CHECKBOX_INPUT_CLASSES = 'w-3.5 h-3.5 rounded border border-gray-400 dark:border-slate-600 accent-blue-600 dark:accent-blue-500 focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-slate-900 cursor-pointer';
export const LABEL_CLASSES = 'block text-xs font-semibold text-gray-700 dark:text-slate-300 uppercase';
export const CURRENCY_INPUT_CLASSES = 'w-full px-3 text-base font-semibold border border-slate-300 dark:border-slate-600 rounded-lg focus:border-blue-500 dark:focus:border-blue-400 outline-none bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 h-[50px] leading-[50px] text-center dark:[color-scheme:dark]';
export const CURRENCY_DROPDOWN_CLASSES = 'w-full lg:w-32 px-3 text-base font-medium border border-slate-300 dark:border-slate-600 rounded-lg focus:border-blue-500 dark:focus:border-blue-400 outline-none bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 h-[50px] leading-[50px] text-center';
export const CURRENCY_SWAP_BUTTON_CLASSES = 'p-3 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors border border-slate-200 dark:border-slate-600';
export const CURRENCY_RESULT_CONTAINER_CLASSES = 'px-3 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg h-[50px] flex items-center justify-center';
export const CURRENCY_RESULT_VALUE_CLASSES = 'text-xl font-bold text-blue-900 dark:text-blue-100';
export const CURRENCY_CONVERTER_HEADER_CLASSES = 'px-4 py-2.5 border-b bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700';
export const CURRENCY_CONVERTER_TITLE_CLASSES = 'text-base font-bold text-slate-700 dark:text-slate-300 text-center';
export const CURRENCY_CARD_CONTAINER_CLASSES = 'bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 shadow-sm';
export const CURRENCY_CARD_CODE_CLASSES = 'text-2xl font-bold text-slate-900 dark:text-slate-100';
export const CURRENCY_CARD_NAME_CLASSES = 'text-sm text-slate-600 dark:text-slate-400';
export const CURRENCY_CARD_RATE_CLASSES = 'text-3xl font-bold text-blue-600 dark:text-blue-400';
export const CURRENCY_CARD_BASE_CLASSES = 'text-xs text-slate-500 dark:text-slate-500';
export const CURRENCY_CARD_ERROR_CLASSES = 'text-xl font-semibold text-red-600 dark:text-red-400';
export const CURRENCY_CARD_ERROR_TEXT_CLASSES = 'text-xs text-red-600 dark:text-red-400';
export const CURRENCY_CARD_DIVIDER_CLASSES = 'pt-4 border-t border-slate-200 dark:border-slate-700';
export const CURRENCY_CARD_INFO_CLASSES = 'flex justify-between items-center text-xs text-slate-500 dark:text-slate-500';
export const CURRENCY_CARD_INFO_VALUE_CLASSES = 'font-medium';

export const HEADER_CLASSES = 'sticky top-0 z-50 w-full bg-gradient-to-r from-blue-400 to-blue-500 dark:from-blue-700 dark:to-blue-800 backdrop-blur transition-colors shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]';
export const HEADER_BUTTON_BASE = 'rounded-lg bg-white/20 dark:bg-white/10 text-white hover:bg-white/30 dark:hover:bg-white/20 transition-all';

export const GUIDE_STYLES = {
    container: 'h-full flex flex-col bg-slate-50 dark:bg-slate-950',
    maxWidth: 'max-w-[1600px] mx-auto w-full flex flex-col h-full',
    mainLayout: 'flex flex-1 overflow-hidden border-x border-slate-200 dark:border-slate-800',
    header: 'px-4 lg:px-8 py-4 sm:py-6 lg:py-8 border-b border-x border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex-shrink-0 text-center lg:text-left',
    headerTitle: 'text-xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2',
    headerSubtitle: 'text-sm sm:text-base lg:text-xl text-slate-600 dark:text-slate-400',
    sidebar: 'hidden lg:block w-72 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex-shrink-0',
    sidebarNav: 'p-6',
    sidebarTitle: 'text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4',
    sidebarList: 'space-y-2',
    sidebarButton: 'w-full text-left px-3 py-2 rounded-lg text-sm transition-colors',
    sidebarButtonActive: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-medium',
    sidebarButtonInactive: 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700',
    mainContent: 'flex-1 overflow-y-auto py-6 lg:py-8 px-6 lg:px-8',
    section: 'bg-white dark:bg-slate-900 rounded-lg shadow-sm p-6 lg:p-8 border border-slate-200 dark:border-slate-800 mb-6 last:mb-0',
    sectionTitle: 'text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6',
    sectionSubtitle: 'text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3 mt-6 first:mt-0',
    infoBox: 'p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-800 mt-6',
    noteBox: 'mt-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-800',
    rateBox: 'p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-800 text-center',
    rateBoxLarge: 'p-6 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-800 mb-6',
    rateValue: 'text-3xl font-bold text-slate-700 dark:text-slate-300',
    rateValueLarge: 'text-5xl font-bold text-slate-700 dark:text-slate-300',
    rateLabel: 'text-sm text-slate-600 dark:text-slate-400',
    list: 'space-y-2',
    listItem: 'flex items-start gap-2',
    listIcon: 'text-slate-600 dark:text-slate-400',
    listText: 'text-slate-600 dark:text-slate-400',
    checkmark: 'text-green-500',
    cross: 'text-red-500',
    bullet: 'text-slate-400',
    numberedBadge: 'inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-bold flex-shrink-0',
    gridTwo: 'grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6',
    gridThree: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6',
    textBody: 'text-slate-600 dark:text-slate-400',
    textStrong: 'text-slate-900 dark:text-slate-100',
    textSmall: 'text-sm',
    textItalic: 'italic',
} as const;
