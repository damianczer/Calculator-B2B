export const APP_CONFIG = {
    NAME: 'Calculator B2B',
    DEFAULT_LANGUAGE: 'pl',
    DEFAULT_THEME: 'light',
    COOKIE_NAME: 'dc_calculator_b2b_settings',
    COOKIE_MAX_AGE: 365 * 24 * 60 * 60,
} as const;

export const ANIMATION = {
    THEME_TRANSITION: 400,
    HOVER_TRANSITION: 200,
} as const;

export const BREAKPOINTS = {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    '2XL': 1536,
} as const;

export const Z_INDEX = {
    DROPDOWN: 1000,
    STICKY: 1020,
    FIXED: 1030,
    MODAL_BACKDROP: 1040,
    MODAL: 1050,
    POPOVER: 1060,
    TOOLTIP: 1070,
    LOADING_SPINNER: 9999,
} as const;
