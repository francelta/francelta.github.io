'use client';

import { useTranslations } from 'next-intl';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 mb-6">
              {t('title')}
            </h1>
            <div className="text-xl md:text-2xl text-neutral-300 mb-4 h-16 flex items-center justify-center md:justify-start">
              <TypeAnimation
                sequence={typing_sequence}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-cyan-400"
              />
            </div>
            <p className="text-lg text-slate-200">
              {t('tagline')}
            </p>
          </motion.div>

          {/* Right Column - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-400/20">
              <Image
                src="/profile-photo.jpg"
                alt="Fran Carrasco - Profile Photo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

