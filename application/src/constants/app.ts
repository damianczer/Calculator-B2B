import { ROUTES } from './routes';
import { APP_CONFIG } from './config';

export const APP_NAME = APP_CONFIG.NAME;

export const NAVIGATION_LINKS = [
    { path: ROUTES.HOME, labelKey: 'header.b2b' },
    { path: ROUTES.UOP, labelKey: 'header.uop' },
    { path: ROUTES.COMPANY, labelKey: 'header.company' },
    { path: ROUTES.CURRENCIES, labelKey: 'header.currencies' },
] as const;

export const SOCIAL_LINKS = {
    github: {
        url: 'https://github.com/damianczer/Calculator-B2B',
        label: 'GitHub Repository',
    },
    author: {
        url: 'https://www.damianczerwinski.pl/',
        label: 'Damian Czerwiński',
    },
} as const;
