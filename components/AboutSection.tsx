'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

/**
 * About section component - Philosophy: "Arquitecto y Piloto"
 * @returns {JSX.Element} About section
 */
export default function AboutSection() {
  const t = useTranslations('about');
  const highlights = useTranslations('about.highlights');
  
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-cyan-400 mb-12 text-center">
          {t('title')}
        </h2>
        <div className="text-lg text-neutral-300 space-y-6 leading-relaxed">
          <p>
            {t('paragraph_1')}
          </p>
          <p>
            Recientemente, he incorporado una especialización avanzada en el{' '}
            <span className="text-cyan-400 font-semibold">{highlights('genai_dev')}</span>, 
            adaptando mi flujo de trabajo para ser el{' '}
            <span className="text-cyan-400 font-semibold">&quot;{highlights('architect_pilot')}&quot;</span> (Orquestador) de agentes de IA. 
            Utilizo de forma avanzada plataformas como Cursor.ia y GitHub Copilot, integrando metodologías de trabajo seguro como
            <span className="text-cyan-400 font-semibold"> {highlights('tdd')}</span> (Desarrollo Guiado por Tests) y aplicando el principio de
            <span className="text-cyan-400 font-semibold"> {highlights('security_by_design')}</span> (Security by Design). Mi enfoque permite maximizar la eficiencia, 
            optimizar el debugging y acelerar el ciclo de vida del desarrollo, manejando entornos donde hasta el{' '}
            <span className="text-cyan-400 font-semibold">{highlights('ai_percentage')}</span> del código está asistido por IA, 
            acelerando el proceso de desarrollo en más del{' '}
            <span className="text-cyan-400 font-semibold">{highlights('speed_percentage')}</span>.
          </p>
          <p>
            {t('paragraph_3')}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
