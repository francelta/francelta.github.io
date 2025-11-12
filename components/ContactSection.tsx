'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

/**
 * Contact section component - GitHub, LinkedIn, etc.
 * @returns {JSX.Element} Contact section
 */
export default function ContactSection() {
  const t = useTranslations('contact');
  
  return (
    <motion.section 
      id="contact" 
      className="py-24 sm:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-cyan-400 text-center">
            {t('title')}
          </h2>
          <p className="text-xl text-neutral-300 mb-8 text-center">
            {t('placeholder')}
          </p>
          <div className="flex gap-8 mt-8">
            <Link href="#" target="_blank">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
                whileHover={{ scale: 1.1 }}
              >
                <Github className="w-10 h-10 text-neutral-400 hover:text-cyan-400 transition-colors" />
              </motion.div>
            </Link>
            <Link href="#" target="_blank">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin className="w-10 h-10 text-neutral-400 hover:text-cyan-400 transition-colors" />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
