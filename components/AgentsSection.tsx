'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

/**
 * Agents section component - My Team of AI Agents
 * @returns {JSX.Element} Agents section
 */
export default function AgentsSection() {
  const t = useTranslations('agents');
  
  // Build agents array from translations
  const agents = [0, 1, 2, 3].map((index) => ({
    name: t(`items.${index}.name`),
    description: t(`items.${index}.description`),
  }));

  return (
    <section id="agents" className="min-h-screen flex items-center justify-center px-4 py-24 sm:py-32">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 border border-cyan-400/20 rounded-lg bg-zinc-900 hover:border-cyan-400/50 hover:bg-zinc-800/50 transition-all duration-300 shadow-lg hover:shadow-cyan-400/10 text-center"
            >
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">{agent.name}</h3>
              <p className="text-sm text-neutral-300">{agent.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
