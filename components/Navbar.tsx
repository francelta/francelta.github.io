'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Navbar Component - Sticky navigation bar with smooth scroll links
 */
export default function Navbar() {
  const [is_scrolled, set_is_scrolled] = useState(false);
  const [is_menu_open, set_is_menu_open] = useState(false);

  useEffect(() => {
    const handle_scroll = () => {
      set_is_scrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handle_scroll);
    return () => window.removeEventListener('scroll', handle_scroll);
  }, []);

  const nav_items = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Mi trabajo', href: '#projects' },
    { label: 'Blog', href: '#blog' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        is_scrolled
          ? 'bg-zinc-950/80 backdrop-blur-md border-b border-neutral-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-display text-white font-bold">
              FC<span className="text-accent-500">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {nav_items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-neutral-300 hover:text-accent-500 transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 bg-accent-500 text-zinc-950 rounded-full font-semibold hover:bg-accent-500/90 transition-all duration-200 hover:scale-105"
            >
              Contáctame
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => set_is_menu_open(!is_menu_open)}
            className="md:hidden text-neutral-300 hover:text-accent-500 transition-colors"
            aria-label="Toggle menu"
          >
            {is_menu_open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {is_menu_open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-b border-neutral-800"
          >
            <div className="px-6 py-4 space-y-3">
              {nav_items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => set_is_menu_open(false)}
                  className="block text-neutral-300 hover:text-accent-500 transition-colors duration-200 py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => set_is_menu_open(false)}
                className="block text-center px-6 py-2.5 bg-accent-500 text-zinc-950 rounded-full font-semibold hover:bg-accent-500/90 transition-all duration-200"
              >
                Contáctame
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
