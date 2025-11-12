'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

/**
 * Professional Experience interface
 * @interface ProfessionalExperience
 */
interface ProfessionalExperience {
  title: string;
  company_and_dates: string;
  responsibilities: string[];
  technologies: string;
}

/**
 * Experience section component - Professional Experience
 * @returns {JSX.Element} Experience section
 */
export default function ExperienceSection() {
  const t = useTranslations('experience');
  
  // Build jobs array from translations
  const professional_experience: ProfessionalExperience[] = [0, 1, 2, 3].map((index) => ({
    title: t(`jobs.${index}.title`),
    company_and_dates: t(`jobs.${index}.company_and_dates`),
    responsibilities: t.raw(`jobs.${index}.responsibilities`),
    technologies: t(`jobs.${index}.technologies`),
  }));

  return (
    <motion.section 
      id="experience" 
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
        <div className="space-y-8">
          {professional_experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900 border border-neutral-800 rounded-lg p-6 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/10"
            >
              <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
                {job.title}
              </h3>
              <p className="text-neutral-400 text-sm mb-4">
                {job.company_and_dates}
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                {job.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="text-neutral-300 text-sm leading-relaxed">
                    {responsibility}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-neutral-800">
                <p className="text-xs text-neutral-400">
                  <span className="text-cyan-400 font-semibold">{t('technologies_label')}:</span> {job.technologies}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
