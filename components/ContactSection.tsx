'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

/**
 * ContactSection Component - Contact information and social links
 */
export default function ContactSection() {
  const social_links = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/francelta',
      color: 'hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/francisco-jose-carrasco-guerrero-81a92533/',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      url: 'mailto:francelta@gmail.com',
      color: 'hover:text-accent-500',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent-500/5 via-transparent to-transparent" />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Conectemos
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              ¿Necesitas desarrollo full-stack, automatización o machine learning? 
              Trabajo tanto remoto como presencial. Disponible para proyectos freelance y colaboraciones.
            </p>
          </div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <a
              href="mailto:francelta@gmail.com"
              className="inline-flex items-center gap-3 px-10 py-4 bg-accent-500 text-zinc-950 rounded-full font-bold text-lg hover:bg-accent-500/90 transition-all duration-200 hover:scale-105 shadow-lg shadow-accent-500/20"
            >
              <Send className="w-6 h-6" />
              francelta@gmail.com
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-neutral-500 mb-6 text-sm uppercase tracking-wider font-semibold">
              O encuéntrame en
            </p>
            <div className="flex justify-center gap-6">
              {social_links.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className={`group p-4 rounded-xl bg-zinc-900/50 border border-neutral-800 ${link.color} transition-all duration-300 hover:border-current hover:scale-110`}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 pt-8 border-t border-neutral-800"
          >
            <p className="text-neutral-500 text-sm">
              Málaga, España • +6 años de experiencia • Disponible para remoto y presencial
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
