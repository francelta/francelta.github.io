'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

/**
 * Projects section component - The 6 example projects
 * @returns {JSX.Element} Projects section
 */
export default function ProjectsSection() {
  const t = useTranslations('projects');
  
  return (
    <motion.section 
      id="projects" 
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((project_num) => (
            <motion.div
              key={project_num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: project_num * 0.1 }}
              className="bg-zinc-900 border border-neutral-800 rounded-lg p-6 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/10"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                {t('project_label')} {project_num}
              </h3>
              <p className="text-neutral-300 mb-4">
                {t('placeholder_description')}
              </p>
              <p className="text-sm text-neutral-300">
                {t('placeholder_note')}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
