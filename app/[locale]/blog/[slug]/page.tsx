import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import fs from 'fs';
import path from 'path';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  read_time: string;
  category: string;
}

export async function generateStaticParams() {
  const locales = ['es', 'en'];
  const slugs = ['vibe-coding', 'tdd-owasp', 'caso-estudio'];
  
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({
      locale,
      slug,
    }))
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> | { slug: string; locale: string } }): Promise<Metadata> {
  const { slug, locale } = await Promise.resolve(params);
  const t = await getTranslations({ locale, namespace: 'blog' });
  
  const postKey = slug === 'vibe-coding' ? 'vibeCoding' : slug === 'tdd-owasp' ? 'tddOwasp' : 'caseStudy';
  const post = {
    title: t(`posts.${postKey}.title`),
    excerpt: t(`posts.${postKey}.excerpt`),
  };

  return {
    title: `${post.title} - Fran Carrasco`,
    description: post.excerpt,
  };
}

function get_blog_content(slug: string, locale: string): string {
  try {
    const blog_dir = path.join(process.cwd(), 'blog');
    const file_path = path.join(blog_dir, locale === 'en' ? `${slug}.en.md` : `${slug}.md`);
    return fs.readFileSync(file_path, 'utf-8');
  } catch {
    return '';
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string; locale: string }> | { slug: string; locale: string } }) {
  const { slug, locale } = await Promise.resolve(params);
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'blog' });

  const postKey = slug === 'vibe-coding' ? 'vibeCoding' : slug === 'tdd-owasp' ? 'tddOwasp' : 'caseStudy';
  
  const post = {
    slug,
    title: t(`posts.${postKey}.title`),
    excerpt: t(`posts.${postKey}.excerpt`),
    image: slug === 'vibe-coding' ? '/blog/blog-1.png' : slug === 'tdd-owasp' ? '/blog/blog-2.png' : '/blog/blog-3.png',
    date: locale === 'es' 
      ? (slug === 'vibe-coding' ? '15 de Octubre, 2024' : slug === 'tdd-owasp' ? '3 de Octubre, 2024' : '21 de Septiembre, 2024')
      : (slug === 'vibe-coding' ? 'October 15, 2024' : slug === 'tdd-owasp' ? 'October 3, 2024' : 'September 21, 2024'),
    read_time: slug === 'vibe-coding' ? '8 min' : slug === 'tdd-owasp' ? '12 min' : '10 min',
    category: slug === 'vibe-coding' ? t('categories.philosophy') : slug === 'tdd-owasp' ? t('categories.methodology') : t('categories.caseStudy'),
  };

  const content = get_blog_content(slug, locale);
  
  // Convertir markdown simple a HTML (básico)
  const html_content = content
    .split('\n\n')
    .map((paragraph) => {
      // Headers
      if (paragraph.startsWith('# ')) {
        return `<h1 class="text-4xl font-display font-bold mb-6 mt-12">${paragraph.replace('# ', '')}</h1>`;
      }
      if (paragraph.startsWith('## ')) {
        return `<h2 class="text-3xl font-display font-bold mb-4 mt-10">${paragraph.replace('## ', '')}</h2>`;
      }
      if (paragraph.startsWith('### ')) {
        return `<h3 class="text-2xl font-display font-semibold mb-3 mt-8">${paragraph.replace('### ', '')}</h3>`;
      }
      if (paragraph.startsWith('#### ')) {
        return `<h4 class="text-xl font-display font-semibold mb-2 mt-6">${paragraph.replace('#### ', '')}</h4>`;
      }
      
      // Code blocks
      if (paragraph.startsWith('```')) {
        const lines = paragraph.split('\n');
        const code = lines.slice(1, -1).join('\n');
        return `<pre class="bg-zinc-900 border border-neutral-800 rounded-lg p-4 overflow-x-auto my-4"><code class="text-sm font-mono text-accent-500">${code}</code></pre>`;
      }
      
      // Lists
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').map(line => {
          if (line.startsWith('- ')) {
            return `<li class="ml-4">${line.replace('- ', '')}</li>`;
          }
          return line;
        }).join('\n');
        return `<ul class="list-disc list-inside space-y-2 my-4 text-neutral-300">${items}</ul>`;
      }
      
      // Bold text
      paragraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-accent-500 font-semibold">$1</strong>');
      
      // Inline code
      paragraph = paragraph.replace(/`(.*?)`/g, '<code class="bg-zinc-900 px-2 py-1 rounded text-accent-500 font-mono text-sm">$1</code>');
      
      // Links
      paragraph = paragraph.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-accent-500 hover:underline">$1</a>');
      
      // Horizontal rule
      if (paragraph === '---') {
        return '<hr class="border-neutral-800 my-8">';
      }
      
      // Regular paragraphs
      if (paragraph.trim()) {
        return `<p class="text-lg leading-relaxed mb-4 text-neutral-300">${paragraph}</p>`;
      }
      
      return '';
    })
    .join('\n');

  return (
    <div className="min-h-screen bg-zinc-950 text-neutral-300">
      {/* Header */}
      <header className="border-b border-neutral-800 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link 
            href={`/${locale}/blog`} 
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-accent-500 transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            {t('backToBlog')}
          </Link>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative w-full h-[400px] bg-neutral-900">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-6 -mt-32 relative z-10">
        {/* Category Badge */}
        <div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-accent-500 text-zinc-950 font-semibold text-sm">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-6 text-neutral-400 mb-8 pb-8 border-b border-neutral-800">
          <span className="flex items-center gap-2">
            <Calendar size={18} />
            {post.date}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={18} />
            {post.read_time} {t('readingTime')}
          </span>
          <button className="flex items-center gap-2 hover:text-accent-500 transition-colors ml-auto">
            <Share2 size={18} />
            {t('share')}
          </button>
        </div>

        {/* Content */}
        <div 
          className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-a:text-accent-500 prose-code:text-accent-500"
          dangerouslySetInnerHTML={{ __html: html_content }}
        />

        {/* Author */}
        <div className="mt-16 pt-8 border-t border-neutral-800">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-accent-500/10 flex items-center justify-center">
              <span className="text-2xl font-bold text-accent-500">FC</span>
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg text-white">{t('author')}</h3>
              <p className="text-neutral-400">{t('authorDescription')}</p>
            </div>
          </div>
          <div className="mt-4 flex gap-4">
            <a href="https://github.com/francelta" target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/francisco-jose-carrasco-guerrero-81a92533/" target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline">
              LinkedIn
            </a>
            <a href="mailto:francelta@gmail.com" className="text-accent-500 hover:underline">
              Email
            </a>
          </div>
        </div>

        {/* Back to blog */}
        <div className="mt-12 mb-16 text-center">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-neutral-700 text-neutral-300 rounded-full font-semibold hover:border-accent-500 hover:text-accent-500 transition-all duration-200"
          >
            {t('viewAllArticles')}
          </Link>
        </div>
      </article>
    </div>
  );
}

