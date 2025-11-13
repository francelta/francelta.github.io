'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Clock } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

/**
 * BlogSection Component - Blog posts showcase
 */
export default function BlogSection() {
  const t = useTranslations('blog');
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'es';
  
  const blog_posts = [
    {
      title: t('posts.vibeCoding.title'),
      excerpt: t('posts.vibeCoding.excerpt'),
      image: '/blog/blog-1.png',
      date: '15 Oct 2024',
      read_time: '8 min',
      category: t('categories.philosophy'),
      link: '/blog/vibe-coding',
    },
    {
      title: t('posts.tddOwasp.title'),
      excerpt: t('posts.tddOwasp.excerpt'),
      image: '/blog/blog-2.png',
      date: '3 Oct 2024',
      read_time: '12 min',
      category: t('categories.methodology'),
      link: '/blog/tdd-owasp',
    },
    {
      title: t('posts.caseStudy.title'),
      excerpt: t('posts.caseStudy.excerpt'),
      image: '/blog/blog-3.png',
      date: '21 Sep 2024',
      read_time: '10 min',
      category: t('categories.caseStudy'),
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
            {t('title')}
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            {t('subtitle')}
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
                  {t('readMore')}
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
            {t('viewAll')}
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

