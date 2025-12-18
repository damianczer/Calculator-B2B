export const ROUTES = {
    HOME: '/',
    UOP: '/uop',
    COMPANY: '/company',
    GUIDE: '/guide',
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = typeof ROUTES[RouteKey];
