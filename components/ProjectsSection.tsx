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
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-24 sm:py-32 bg-zinc-900/50">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((project_num) => (
            <motion.div
              key={project_num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: project_num * 0.1 }}
              className="p-6 border border-cyan-400/20 rounded-lg bg-zinc-900 hover:border-cyan-400/50 hover:bg-zinc-800/50 transition-all duration-300 shadow-lg hover:shadow-cyan-400/10"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                {t('project_label')} {project_num}
              </h3>
              <p className="text-neutral-300 mb-4">
                {t('placeholder_description')}
              </p>
              <p className="text-sm text-slate-200">
                {t('placeholder_note')}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
