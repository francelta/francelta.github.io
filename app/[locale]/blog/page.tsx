import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog - Fran Carrasco',
  description: 'Artículos sobre desarrollo con IA, TDD, OWASP y orquestación de agentes',
};

// Necesario para static export
export function generateStaticParams() {
  return [{ locale: 'es' }, { locale: 'en' }];
}

const blog_posts = [
  {
    slug: 'vibe-coding',
    title: 'Más Allá del "Vibe Coding": Por Qué Dejé de Escribir Código y Empecé a Dirigir Agentes',
    excerpt: 'El 45% del código ya lo escribe una IA. El trabajo ya no es teclear, es orquestar. Esta es mi filosofía como "Piloto de IA".',
    image: '/blog/blog-1.png',
    date: '15 Oct 2024',
    read_time: '8 min',
    category: 'Filosofía',
  },
  {
    slug: 'tdd-owasp',
    title: 'La IA como "Becario" Vulnerable: Mi Flujo TDD y OWASP en la Era de GenAI',
    excerpt: 'La IA genera código con vulnerabilidades (Vulnerability as a Service). Mi trabajo es aplicar "Seguridad por Diseño" y TDD para auditarla. La confianza cero es la nueva norma.',
    image: '/blog/blog-2.png',
    date: '3 Oct 2024',
    read_time: '12 min',
    category: 'Metodología',
  },
  {
    slug: 'caso-estudio',
    title: 'Caso de Estudio: Cómo Orquesté un Equipo de Agentes para Construir este Mismo Portafolio',
    excerpt: 'Este sitio no fue escrito por mí, fue dirigido por mí. Desgloso el "equipo" de agentes (agente_bootstrap, agente_visual...) que usé en Cursor para clonar y personalizar este sitio en horas, no semanas.',
    image: '/blog/blog-3.png',
    date: '21 Sep 2024',
    read_time: '10 min',
    category: 'Caso Real',
  },
];

export default function BlogPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  return (
    <div className="min-h-screen bg-zinc-950 text-neutral-300">
      {/* Header */}
      <header className="border-b border-neutral-800 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link 
            href={`/${locale}#blog`} 
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-accent-500 transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Volver al portafolio
          </Link>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Blog
          </h1>
          <p className="text-xl text-neutral-400">
            Artículos sobre desarrollo con IA, TDD, OWASP y orquestación de agentes
          </p>
        </div>
      </header>

      {/* Blog Posts List */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {blog_posts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl bg-zinc-900/50 border border-neutral-800 overflow-hidden hover:border-accent-500 transition-all duration-300"
            >
              <div className="md:flex">
                {/* Image */}
                <div className="md:w-2/5 relative aspect-video md:aspect-square overflow-hidden bg-neutral-900">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-sm rounded-full bg-accent-500 text-zinc-950 font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-6 md:p-8">
                  <div className="flex items-center gap-4 text-sm text-neutral-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.read_time}
                    </span>
                  </div>

                  <h2 className="text-2xl font-display font-semibold mb-3 group-hover:text-accent-500 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-neutral-400 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/${locale}/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 text-zinc-950 rounded-full font-semibold hover:bg-accent-500/90 transition-all duration-200 hover:scale-105"
                  >
                    Leer artículo completo
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

