export const APP_NAME = 'Calculator B2B' as const;

export const NAVIGATION_LINKS = [
    { href: '#b2b', label: 'B2B' },
    { href: '#uop', label: 'UOP' },
    { href: '#spolka', label: 'Spółka' },
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
