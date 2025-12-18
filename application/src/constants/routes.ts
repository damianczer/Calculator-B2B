export const ROUTES = {
    HOME: '/',
    UOP: '/uop',
    COMPANY: '/company',
    CURRENCIES: '/currencies',
    GUIDE: '/guide',
    PRIVACY: '/privacy-policy',
    TERMS: '/terms-of-service',
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = typeof ROUTES[RouteKey];
