"use client";

import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

/**
 * Navigation bar component - sticky at top with backdrop blur
 * @returns {JSX.Element} Navigation component with smooth scroll links
 */
export default function Navbar() {
  const t = useTranslations('navbar');
  
  const nav_links = [
    { href: "#hero", label: t('links.hero') },
    { href: "#about", label: t('links.about') },
    { href: "#principles", label: t('links.principles') },
    { href: "#skills", label: t('links.skills') },
    { href: "#experience", label: t('links.experience') },
    { href: "#agents", label: t('links.agents') },
    { href: "#projects", label: t('links.projects') },
    { href: "#contact", label: t('links.contact') },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-cyan-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-cyan-400">{t('brand')}</h1>
          </div>
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              {nav_links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-neutral-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}

