'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

/**
 * Skills section component - Technologies and Tools
 * @returns {JSX.Element} Skills section
 */
export default function SkillsSection() {
  const t = useTranslations('skills');
  
  // Get arrays from translations
  const languages: string[] = t.raw('categories.languages.items');
  const frameworks: string[] = t.raw('categories.frameworks.items');
  const ai_tools: string[] = t.raw('categories.ai_tools.items');

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-24 sm:py-32">
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
        
        <div className="space-y-12">
          {/* Lenguajes de Programación */}
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6 text-center">
              {t('categories.languages.title')}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {languages.map((lang, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-zinc-800 text-cyan-400 rounded-full px-4 py-2 text-sm font-medium border border-cyan-400/30 hover:bg-zinc-700 hover:border-cyan-400/50 transition-all duration-300"
                >
                  {lang}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6 text-center">
              {t('categories.frameworks.title')}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {frameworks.map((framework, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-zinc-800 text-cyan-400 rounded-full px-4 py-2 text-sm font-medium border border-cyan-400/30 hover:bg-zinc-700 hover:border-cyan-400/50 transition-all duration-300"
                >
                  {framework}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Herramientas de IA */}
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6 text-center">
              {t('categories.ai_tools.title')}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {ai_tools.map((tool, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-zinc-800 text-cyan-400 rounded-full px-4 py-2 text-sm font-medium border border-cyan-400/30 hover:bg-zinc-700 hover:border-cyan-400/50 transition-all duration-300"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Operating Systems */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-neutral-300 text-sm pt-8"
          >
            <p>
              <span className="text-cyan-400 font-semibold">{t('categories.operating_systems.label')}:</span> {t('categories.operating_systems.value')}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

