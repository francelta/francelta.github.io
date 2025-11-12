'use client';

import { useTranslations } from 'next-intl';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mouse } from 'lucide-react';

/**
 * Hero section component - Main presentation with typing effect
 * @returns {JSX.Element} Hero section
 */
export default function HeroSection() {
  const t = useTranslations('hero');
  
  const typing_sequence = [
    t('typing_sequence.subtitle_1'),
    2000,
    t('typing_sequence.subtitle_2'),
    2000,
    t('typing_sequence.subtitle_3'),
    2000,
    t('typing_sequence.subtitle_4'),
    2000,
    t('typing_sequence.subtitle_5'),
    2000,
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Columna Izquierda - Texto */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {t('title')}
            </h1>
            <div className="text-2xl md:text-3xl text-cyan-400 mt-4 mb-6 h-16 flex items-center justify-center md:justify-start">
              <TypeAnimation
                sequence={typing_sequence}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="text-lg text-neutral-300">
              {t('tagline')}
            </p>
          </motion.div>

          {/* Columna Derecha - Imagen de Perfil */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <Image
                src="/profile-photo.jpg"
                alt="Fran Carrasco"
                fill
                className="rounded-lg object-cover shadow-lg shadow-cyan-400/20"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Icono de Scroll */}
      <Mouse className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyan-400 animate-bounce" size={24} />
    </section>
  );
}

