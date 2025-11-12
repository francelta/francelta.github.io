'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

/**
 * GenAI Principle interface
 * @interface GenAIPrinciple
 */
interface GenAIPrinciple {
  title: string;
  description: string;
}

/**
 * Principles section component - GenAI Methodologies: TDD, Security, etc.
 * @returns {JSX.Element} Principles section
 */
export default function PrinciplesSection() {
  const t = useTranslations('principles');
  
  // Build principles array from translations
  const gen_ai_principles: GenAIPrinciple[] = [0, 1, 2, 3, 4, 5].map((index) => ({
    title: t(`items.${index}.title`),
    description: t(`items.${index}.description`),
  }));

  return (
    <section id="principles" className="min-h-screen flex items-center justify-center px-4 py-24 sm:py-32 bg-zinc-900/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-cyan-400 mb-12 text-center">
          {t('title')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gen_ai_principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 border border-cyan-400/20 rounded-lg bg-zinc-900 hover:border-cyan-400/50 hover:bg-zinc-800/50 transition-all duration-300 shadow-lg hover:shadow-cyan-400/10"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                {principle.title}
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

