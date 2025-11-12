'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/i18n';

/**
 * Language switcher component
 * Allows users to switch between available locales (es/en)
 * @returns {JSX.Element} Language switcher buttons
 */
export default function LanguageSwitcher() {
  const current_locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  /**
   * Handles locale change
   * @param {string} new_locale - The locale to switch to
   */
  const handle_locale_change = (new_locale: string) => {
    // Replace the current locale in the pathname with the new one
    const new_pathname = pathname.replace(`/${current_locale}`, `/${new_locale}`);
    router.push(new_pathname);
  };

  return (
    <div className="flex items-center gap-2 ml-4">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => handle_locale_change(locale)}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-300 ${
            current_locale === locale
              ? 'bg-cyan-400 text-zinc-950 font-bold'
              : 'bg-zinc-800 text-neutral-300 hover:bg-zinc-700 hover:text-cyan-400'
          }`}
          aria-label={`Switch to ${locale.toUpperCase()}`}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

