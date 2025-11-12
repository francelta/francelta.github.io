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
    <motion.section 
      id="skills" 
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
                  className="bg-zinc-900 border border-neutral-800 text-cyan-400 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/10"
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
                  className="bg-zinc-900 border border-neutral-800 text-cyan-400 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/10"
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
                  className="bg-zinc-900 border border-neutral-800 text-cyan-400 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/10"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Operating Systems */}
          <div className="text-center text-neutral-300 text-sm pt-8">
            <p>
              <span className="text-cyan-400 font-semibold">{t('categories.operating_systems.label')}:</span> {t('categories.operating_systems.value')}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

