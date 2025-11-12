import { getRequestConfig } from 'next-intl/server';

/**
 * Supported locales for the application
 */
export const locales = ['es', 'en'] as const;

/**
 * Default locale for the application
 */
export const default_locale = 'es';

/**
 * Type definition for supported locales
 */
export type Locale = (typeof locales)[number];

/**
 * next-intl configuration (Next.js 15 + next-intl 3.22+ compatible)
 * Loads the appropriate messages file based on the current locale
 * @param {Object} params - Configuration parameters
 * @param {Promise<string>} params.requestLocale - Current locale promise
 * @returns {Promise<Object>} Configuration object with locale and messages
 */
export default getRequestConfig(async ({ requestLocale }) => {
  // Wait for the locale from the request (new API in next-intl 3.22+)
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !locales.includes(locale as Locale)) {
    locale = default_locale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});

