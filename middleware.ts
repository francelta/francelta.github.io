import createMiddleware from 'next-intl/middleware';
import { locales, default_locale } from './i18n';

/**
 * next-intl middleware for locale-based routing
 * Handles automatic locale detection and routing
 */
export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: default_locale,

  // Always use prefix for locale routes (e.g., /es/..., /en/...)
  localePrefix: 'always',
});

/**
 * Middleware configuration - applies to all routes except static files
 */
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(es|en)/:path*'],
};

