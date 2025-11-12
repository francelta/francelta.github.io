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
    <motion.section 
      id="agents" 
      className="py-24 sm:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-cyan-400 text-center">
          {t('title')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900 border border-neutral-800 rounded-lg p-6 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/10 text-center"
            >
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">{agent.name}</h3>
              <p className="text-sm text-neutral-300">{agent.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
