'use client';

import { motion } from 'framer-motion';
import { Code2, Shield, TestTube, Workflow } from 'lucide-react';
import { useTranslations } from 'next-intl';

/**
 * AboutSection Component - About me and philosophy section
 */
export default function AboutSection() {
  const t = useTranslations('about');
  
  const features = [
    {
      icon: <Workflow className="w-6 h-6" />,
      title: t('features.fullstack.title'),
      description: t('features.fullstack.description'),
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t('features.security.title'),
      description: t('features.security.description'),
    },
    {
      icon: <TestTube className="w-6 h-6" />,
      title: t('features.tdd.title'),
      description: t('features.tdd.description'),
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: t('features.ai.title'),
      description: t('features.ai.description'),
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {t('title')}
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              {t('description')}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-neutral-800 hover:border-accent-500 transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/10"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
