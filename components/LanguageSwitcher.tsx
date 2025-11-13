'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Languages } from 'lucide-react';
import { useState } from 'react';

/**
 * LanguageSwitcher Component - Allows users to switch between Spanish and English
 */
export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [is_open, set_is_open] = useState(false);

  const locales = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
  ];

  // Get path without locale
  const path_without_locale = pathname.replace(`/${locale}`, '') || '/';

  const switch_locale = (new_locale: string) => {
    router.push(`/${new_locale}${path_without_locale}`);
    set_is_open(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => set_is_open(!is_open)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-neutral-700 text-neutral-300 hover:border-accent-500 hover:text-accent-500 transition-all duration-200"
        aria-label="Switch language"
      >
        <Languages size={18} />
        <span className="text-sm font-medium">{locale.toUpperCase()}</span>
      </button>

      {is_open && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => set_is_open(false)}
          />
          <div className="absolute right-0 mt-2 w-32 bg-zinc-900 border border-neutral-800 rounded-lg shadow-lg z-20">
            {locales.map((loc) => (
              <button
                key={loc.code}
                onClick={() => switch_locale(loc.code)}
                className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                  locale === loc.code
                    ? 'bg-accent-500/20 text-accent-500 font-semibold'
                    : 'text-neutral-300 hover:bg-zinc-800 hover:text-accent-500'
                }`}
              >
                {loc.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
