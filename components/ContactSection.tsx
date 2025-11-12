'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

/**
 * Contact section component - GitHub, LinkedIn, etc.
 * @returns {JSX.Element} Contact section
 */
export default function ContactSection() {
  const t = useTranslations('contact');
  
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-cyan-400 mb-12">
          {t('title')}
        </h2>
        <div className="space-y-6">
          <p className="text-xl text-neutral-300">
            {t('placeholder')}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center gap-8 mt-8"
          >
            <a
              href="#"
              className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg border border-cyan-400/30 px-6 py-3 rounded-lg hover:border-cyan-400/50 hover:bg-zinc-800/50 duration-300"
            >
              {t('links.github')}
            </a>
            <a
              href="#"
              className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg border border-cyan-400/30 px-6 py-3 rounded-lg hover:border-cyan-400/50 hover:bg-zinc-800/50 duration-300"
            >
              {t('links.linkedin')}
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
