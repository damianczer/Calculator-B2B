import { ROUTES } from './routes';

export const APP_NAME = 'Calculator B2B' as const;

export const NAVIGATION_LINKS = [
    { path: ROUTES.HOME, label: 'B2B' },
    { path: ROUTES.UOP, label: 'UOP' },
    { path: ROUTES.COMPANY, label: 'Spółka' },
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
