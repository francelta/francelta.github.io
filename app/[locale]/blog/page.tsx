import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> | { locale: string } }): Promise<Metadata> {
  const { locale } = await Promise.resolve(params);
  const t = await getTranslations({ locale, namespace: 'blog' });
  
  return {
    title: `${t('pageTitle')} - Fran Carrasco`,
    description: t('pageSubtitle'),
  };
}

// Necesario para static export
export function generateStaticParams() {
  return [{ locale: 'es' }, { locale: 'en' }];
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> | { locale: string } }) {
  const { locale } = await Promise.resolve(params);
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'blog' });

  const blog_posts = [
    {
      slug: 'vibe-coding',
      title: t('posts.vibeCoding.title'),
      excerpt: t('posts.vibeCoding.excerpt'),
      image: '/blog/blog-1.png',
      date: locale === 'es' ? '15 Oct 2024' : 'Oct 15, 2024',
      read_time: '8 min',
      category: t('categories.philosophy'),
    },
    {
      slug: 'tdd-owasp',
      title: t('posts.tddOwasp.title'),
      excerpt: t('posts.tddOwasp.excerpt'),
      image: '/blog/blog-2.png',
      date: locale === 'es' ? '3 Oct 2024' : 'Oct 3, 2024',
      read_time: '12 min',
      category: t('categories.methodology'),
    },
    {
      slug: 'caso-estudio',
      title: t('posts.caseStudy.title'),
      excerpt: t('posts.caseStudy.excerpt'),
      image: '/blog/blog-3.png',
      date: locale === 'es' ? '21 Sep 2024' : 'Sep 21, 2024',
      read_time: '10 min',
      category: t('categories.caseStudy'),
    },
  ];
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
            {t('backToPortfolio')}
          </Link>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {t('pageTitle')}
          </h1>
          <p className="text-xl text-neutral-400">
            {t('pageSubtitle')}
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
                    {t('readFullArticle')}
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

