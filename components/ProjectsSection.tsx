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
      title: 'Red Neuronal OCR para Documentos',
      description: 'Sistema de identificación automática de campos en DNI, NIE y pasaportes con 97.83% de precisión usando deep learning',
      image: '/projects/project-1.png',
      tags: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
      demo: '#',
      github: '#',
    },
    {
      title: 'Plataforma Web Responsive',
      description: 'Modernización completa de sitio web legacy a estándares actuales, incrementando conversión en 55%',
      image: '/projects/project-2.png',
      tags: ['Django', 'React', 'Tailwind CSS', 'PostgreSQL'],
      demo: '#',
      github: '#',
    },
    {
      title: 'Sistema de Automatización DB',
      description: 'Aplicación de escritorio para validación automatizada de bases de datos, incrementando eficiencia en 75%',
      image: '/projects/project-3.png',
      tags: ['Python', 'Flask', 'SQLAlchemy', 'pytest'],
      demo: '#',
      github: '#',
    },
    {
      title: 'Workflows con N8N',
      description: 'Automatización de procesos empresariales con scraping inteligente y integración de APIs',
      image: '/projects/project-4.png',
      tags: ['N8N', 'Python', 'Selenium', 'REST APIs'],
      demo: '#',
      github: '#',
    },
    {
      title: 'Suite de Testing TDD',
      description: 'Framework de pruebas automatizadas con más de 40 tests por feature, reduciendo bugs en producción',
      image: '/projects/project-5.png',
      tags: ['pytest', 'unittest', 'Jenkins', 'GitHub Actions'],
      demo: '#',
      github: '#',
    },
    {
      title: 'Dashboard Analítico Empresarial',
      description: 'Panel de control con métricas en tiempo real para estrategias de digitalización y ventas',
      image: '/projects/project-6.png',
      tags: ['Vue.js', 'Django REST', 'PostgreSQL', 'Chart.js'],
      demo: '#',
      github: '#',
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
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-accent-500 text-zinc-950 rounded-lg font-semibold hover:bg-accent-500/90 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </a>
                  <a
                    href={project.github}
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
