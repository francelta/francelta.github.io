'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

/**
 * ProjectsSection Component - Portfolio projects showcase
 */
export default function ProjectsSection() {
  const projects = [
    {
      title: 'Aceleración de MVP (Prototipo de Producción Rápida)',
      description: 'De "Idea a URL en producción" en menos de 10 minutos. Portfolio QA Engineer con IA, modo oscuro profesional y despliegue automatizado',
      image: '/projects/project-1.png',
      tags: ['HTML5', 'CSS3', 'Vanilla JS', 'Firebase Hosting'],
      demo: 'https://francelta.github.io/prototipo-produccion-rapida/',
      github: 'https://github.com/francelta/prototipo-produccion-rapida',
    },
    {
      title: 'Desarrollo Contextualizado y Estandarizado',
      description: 'Módulo TypeScript que demuestra control absoluto sobre IA generativa. Código generado que sigue estándares estrictos: snake_case, PascalCase, JSDoc completo',
      image: '/projects/project-2.png',
      tags: ['TypeScript', 'JSDoc', 'Code Standards', 'AI-Guided'],
      demo: 'https://francelta.github.io/desarrollo-contextualizado-estandarizado/',
      github: 'https://github.com/francelta/desarrollo-contextualizado-estandarizado',
    },
    {
      title: 'Orquestación y Auditoría de Agentes',
      description: 'Análisis arquitectónico completo generado por agente IA: microservicios, diagramas Mermaid, seguridad OWASP y escalabilidad. De requisitos a documentación técnica profesional',
      image: '/projects/project-3.png',
      tags: ['AI Agents', 'Architecture', 'Microservices', 'Mermaid'],
      demo: 'https://francelta.github.io/orquestacion-auditoria-agentes/',
      github: 'https://github.com/francelta/orquestacion-auditoria-agentes',
    },
    {
      title: 'Desarrollo Seguro con TDD',
      description: 'Servicio de códigos OTP desarrollado con Test-Driven Development: 17 tests escritos ANTES del código. Demuestra TDD + estándares + seguridad OWASP con hashing y expiración',
      image: '/projects/project-4.png',
      tags: ['TDD', 'TypeScript', 'Vitest', 'Security'],
      demo: 'https://francelta.github.io/desarrollo-tdd/',
      github: 'https://github.com/francelta/desarrollo-tdd',
    },
    {
      title: 'Gestión de Requisitos y Flujo de Trabajo (MCP)',
      description: 'Transformación automática de notas de reunión a historias Gherkin: de informal a estructurado en 3 minutos. Integración con Linear/Jira vía Model Context Protocol',
      image: '/projects/project-5.png',
      tags: ['MCP', 'Gherkin', 'BDD', 'Requirements'],
      demo: 'https://francelta.github.io/gestion-requisitos-flujo-trabajo-mcp/',
      github: 'https://github.com/francelta/gestion-requisitos-flujo-trabajo-mcp',
    },
    {
      title: 'Investigación y Aprendizaje Acelerado con Referencias',
      description: 'Análisis técnico tipo Notebook LM: Python vs JavaScript para IA. 8 fuentes académicas sintetizadas en 3 minutos con citas, mapas mentales y referencias verificables',
      image: '/projects/project-6.png',
      tags: ['Research', 'Notebook LM', 'AI Analysis', 'Citations'],
      demo: 'https://francelta.github.io/investigacion-aprendizaje-acelerado-referencias/',
      github: 'https://github.com/francelta/investigacion-aprendizaje-acelerado-referencias',
    },
    {
      title: 'Dashboard Analítico Empresarial',
      description: 'Dashboard en tiempo real con Vue.js + Django REST + PostgreSQL: métricas de digitalización, análisis de ventas por canal, objetivos estratégicos y Chart.js para visualización',
      image: '/projects/project-6.png',
      tags: ['Vue.js', 'Django REST', 'PostgreSQL', 'Chart.js'],
      demo: 'https://francelta.github.io/dashboard-analitico-empresarial/',
      github: 'https://github.com/francelta/dashboard-analitico-empresarial',
    },
    {
      title: 'Workflow de Automatización con IA y N8N',
      description: 'Sistema automatizado que genera posts para LinkedIn desde artículos de blog: RSS Feed → Web Scraping → Claude Haiku AI → LinkedIn. 100% automatizado, ahorra 15 min/artículo',
      image: '/projects/project-1.png',
      tags: ['n8n', 'Claude Haiku', 'Automation', 'LinkedIn API'],
      demo: 'https://francelta.github.io/workflow-automatizado-n8n/',
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
            Mi trabajo
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Una selección de proyectos que demuestran mi experiencia en desarrollo full-stack, 
            seguridad y arquitectura de sistemas
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
                    Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-neutral-700 text-neutral-300 rounded-lg font-semibold hover:border-accent-500 hover:text-accent-500 transition-colors"
                  >
                    <Github size={18} />
                    Código
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
