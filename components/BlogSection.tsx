'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Clock } from 'lucide-react';
import { usePathname } from 'next/navigation';

/**
 * BlogSection Component - Blog posts showcase
 */
export default function BlogSection() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'es';
  const blog_posts = [
    {
      title: 'Más Allá del "Vibe Coding": Por Qué Dejé de Escribir Código y Empecé a Dirigir Agentes',
      excerpt: 'El 45% del código ya lo escribe una IA. El trabajo ya no es teclear, es orquestar. Esta es mi filosofía como "Piloto de IA".',
      image: '/blog/blog-1.png',
      date: '15 Oct 2024',
      read_time: '8 min',
      category: 'Filosofía',
      link: '/blog/vibe-coding',
    },
    {
      title: 'La IA como "Becario" Vulnerable: Mi Flujo TDD y OWASP en la Era de GenAI',
      excerpt: 'La IA genera código con vulnerabilidades (Vulnerability as a Service). Mi trabajo es aplicar "Seguridad por Diseño" y TDD para auditarla. La confianza cero es la nueva norma.',
      image: '/blog/blog-2.png',
      date: '3 Oct 2024',
      read_time: '12 min',
      category: 'Metodología',
      link: '/blog/tdd-owasp',
    },
    {
      title: 'Caso de Estudio: Cómo Orquesté un Equipo de Agentes para Construir este Mismo Portafolio',
      excerpt: 'Este sitio no fue escrito por mí, fue dirigido por mí. Desgloso el "equipo" de agentes (agente_bootstrap, agente_visual...) que usé en Cursor para clonar y personalizar este sitio en horas, no semanas.',
      image: '/blog/blog-3.png',
      date: '21 Sep 2024',
      read_time: '10 min',
      category: 'Caso Real',
      link: '/blog/caso-estudio',
    },
  ];

  return (
    <section id="blog" className="py-20 md:py-32 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            También escribo...
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Comparto conocimientos sobre IA, desarrollo de software y mejores prácticas 
            de ingeniería
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blog_posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl bg-zinc-900/50 border border-neutral-800 overflow-hidden hover:border-accent-500 transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/10"
            >
              {/* Post Image */}
              <div className="relative aspect-video overflow-hidden bg-neutral-900">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-sm rounded-full bg-accent-500 text-zinc-950 font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-neutral-500 mb-3">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.read_time}
                  </span>
                </div>

                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-accent-500 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-neutral-400 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <a
                  href={`/${locale}${post.link}`}
                  className="inline-flex items-center gap-2 text-accent-500 font-semibold hover:gap-3 transition-all duration-200"
                >
                  Leer más
                  <ArrowRight size={18} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-neutral-700 text-neutral-300 rounded-full font-semibold hover:border-accent-500 hover:text-accent-500 transition-all duration-200"
          >
            Ver todos los artículos
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

