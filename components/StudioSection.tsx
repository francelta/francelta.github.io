'use client';

import { motion } from 'framer-motion';
import { Sparkles, Users, Target, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';

/**
 * StudioSection Component - Philosophy and approach section
 */
export default function StudioSection() {
  const t = useTranslations('studio');
  
  const principles = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: t('principles.orchestration.title'),
      description: t('principles.orchestration.description'),
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('principles.tdd.title'),
      description: t('principles.tdd.description'),
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: t('principles.security.title'),
      description: t('principles.security.description'),
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t('principles.automation.title'),
      description: t('principles.automation.description'),
    },
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-500/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            {t('title')}
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-neutral-300 leading-relaxed mb-6">
              {t.rich('description1', {
                experience: (chunks) => <span className="text-accent-500 font-semibold">{chunks}</span>,
                genai: (chunks) => <span className="text-accent-500 font-semibold">{chunks}</span>,
              })}
            </p>
            <p className="text-lg text-neutral-400 leading-relaxed">
              {t.rich('description2', {
                tdd: (chunks) => <span className="text-accent-500">{chunks}</span>,
                security: (chunks) => <span className="text-accent-500">{chunks}</span>,
                automation: (chunks) => <span className="text-accent-500">{chunks}</span>,
              })}
            </p>
          </div>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-zinc-900/50 border border-neutral-800 hover:border-accent-500 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-500 group-hover:bg-accent-500/20 transition-colors duration-300">
                  {principle.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-semibold mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

