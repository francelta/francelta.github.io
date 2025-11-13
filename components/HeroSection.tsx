'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { MousePointerClick } from 'lucide-react';
import { useTranslations } from 'next-intl';

/**
 * HeroSection Component - Main hero section with typing animation and profile image
 */
export default function HeroSection() {
  const t = useTranslations('hero');
  
  return (
    <section id="hero" className="min-h-screen pt-20 md:pt-0 flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              {t('name')}
            </h1>
            
            <div className="text-2xl md:text-3xl lg:text-4xl text-neutral-300 mb-8 h-20 flex items-center">
              <TypeAnimation
                sequence={[
                  t('roles.fullstack'),
                  2000,
                  t('roles.architect'),
                  2000,
                  t('roles.ml'),
                  2000,
                  t('roles.automation'),
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-accent-500 font-semibold"
              />
            </div>

            <p className="text-lg md:text-xl text-neutral-400 mb-12 leading-relaxed max-w-xl">
              {t('description')}
            </p>

            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-8 py-3.5 bg-accent-500 text-zinc-950 rounded-full font-semibold hover:bg-accent-500/90 transition-all duration-200 hover:scale-105 inline-flex items-center gap-2"
              >
                {t('cta.viewWork')}
                <MousePointerClick size={20} />
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 border-2 border-neutral-700 text-neutral-300 rounded-full font-semibold hover:border-accent-500 hover:text-accent-500 transition-all duration-200"
              >
                {t('cta.contact')}
              </a>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="mt-16 hidden md:flex items-center gap-2 text-neutral-500"
            >
              <MousePointerClick size={20} />
              <span className="text-sm">{t('scrollIndicator')}</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-1 md:order-2"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-accent-500/20 blur-3xl rounded-full" />
              
              {/* Image Container */}
              <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-neutral-800 hover:border-accent-500 transition-all duration-300">
                <Image
                  src="/fran-profile.jpg"
                  alt={t('alt')}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
