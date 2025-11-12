'use client';

import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';

/**
 * Footer Component - Site footer with credits and links
 */
export default function Footer() {
  const current_year = new Date().getFullYear();

  const footer_links = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <footer className="border-t border-neutral-800 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-display text-white font-bold">
                FC<span className="text-accent-500">.</span>
              </span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Desarrollador Full-Stack con +6 años de experiencia. 
              Python, JavaScript, Machine Learning y desarrollo asistido por IA.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-display font-semibold mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {footer_links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-accent-500 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-display font-semibold mb-4">
              Stack Principal
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Django', 'React', 'Vue.js', 'TensorFlow', 'PostgreSQL'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-zinc-900 text-neutral-400 border border-neutral-800"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-neutral-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
            <p className="flex items-center gap-2">
              © {current_year} Fran Carrasco. Todos los derechos reservados.
            </p>
            <p className="flex items-center gap-2">
              Hecho con <Heart className="w-4 h-4 text-accent-500 fill-accent-500" /> y{' '}
              <Code2 className="w-4 h-4 text-accent-500" />
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

