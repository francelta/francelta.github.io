'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

/**
 * ProjectsSection Component - Portfolio projects showcase
 */
export default function ProjectsSection() {
  const t = useTranslations('projects');
  const locale = useLocale();
  
  const projects = [
    {
      title: t('items.mvp.title'),
      description: t('items.mvp.description'),
      image: '/projects/project-1.png',
      tags: ['HTML5', 'CSS3', 'Vanilla JS', 'Firebase Hosting'],
      demo: `/api/demo/prototipo-produccion-rapida?locale=${locale}`,
      github: 'https://github.com/francelta/prototipo-produccion-rapida',
    },
    {
      title: t('items.standardized.title'),
      description: t('items.standardized.description'),
      image: '/projects/project-2.png',
      tags: ['TypeScript', 'JSDoc', 'Code Standards', 'AI-Guided'],
      demo: `/api/demo/desarrollo-contextualizado-estandarizado?locale=${locale}`,
      github: 'https://github.com/francelta/desarrollo-contextualizado-estandarizado',
    },
    {
      title: t('items.orchestration.title'),
      description: t('items.orchestration.description'),
      image: '/projects/project-3.png',
      tags: ['AI Agents', 'Architecture', 'Microservices', 'Mermaid'],
      demo: `/api/demo/orquestacion-auditoria-agentes?locale=${locale}`,
      github: 'https://github.com/francelta/orquestacion-auditoria-agentes',
    },
    {
      title: t('items.tdd.title'),
      description: t('items.tdd.description'),
      image: '/projects/project-4.png',
      tags: ['TDD', 'TypeScript', 'Vitest', 'Security'],
      demo: `/api/demo/desarrollo-tdd?locale=${locale}`,
      github: 'https://github.com/francelta/desarrollo-tdd',
    },
    {
      title: t('items.mcp.title'),
      description: t('items.mcp.description'),
      image: '/projects/project-5.png',
      tags: ['MCP', 'Gherkin', 'BDD', 'Requirements'],
      demo: `/api/demo/gestion-requisitos-flujo-trabajo-mcp?locale=${locale}`,
      github: 'https://github.com/francelta/gestion-requisitos-flujo-trabajo-mcp',
    },
    {
      title: t('items.research.title'),
      description: t('items.research.description'),
      image: '/projects/project-6.png',
      tags: ['Research', 'Notebook LM', 'AI Analysis', 'Citations'],
      demo: `/api/demo/investigacion-aprendizaje-acelerado-referencias?locale=${locale}`,
      github: 'https://github.com/francelta/investigacion-aprendizaje-acelerado-referencias',
    },
    {
      title: t('items.dashboard.title'),
      description: t('items.dashboard.description'),
      image: '/projects/project-6.png',
      tags: ['Vue.js', 'Django REST', 'PostgreSQL', 'Chart.js'],
      demo: `/api/demo/dashboard-analitico-empresarial?locale=${locale}`,
      github: 'https://github.com/francelta/dashboard-analitico-empresarial',
    },
    {
      title: t('items.n8n.title'),
      description: t('items.n8n.description'),
      image: '/projects/project-1.png',
      tags: ['n8n', 'Claude Haiku', 'Automation', 'LinkedIn API'],
      demo: `/api/demo/workflow-automatizado-n8n?locale=${locale}`,
      github: 'https://github.com/francelta/workflow-automatizado-n8n',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl bg-zinc-900/50 border border-neutral-800 overflow-hidden hover:border-accent-500 transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/10"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-neutral-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-display font-semibold mb-3 group-hover:text-accent-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-accent-500/10 text-accent-500 border border-accent-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-accent-500 text-zinc-950 rounded-lg font-semibold hover:bg-accent-500/90 transition-colors"
                  >
                    <ExternalLink size={18} />
                    {t('buttons.demo')}
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-neutral-700 text-neutral-300 rounded-lg font-semibold hover:border-accent-500 hover:text-accent-500 transition-colors"
                  >
                    <Github size={18} />
                    {t('buttons.code')}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
