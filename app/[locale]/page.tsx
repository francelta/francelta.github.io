import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import StudioSection from '@/components/StudioSection';
import ProjectsSection from '@/components/ProjectsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { setRequestLocale } from 'next-intl/server';

// Necesario para static export con rutas dinámicas
export function generateStaticParams() {
  return [{ locale: 'es' }, { locale: 'en' }];
}

/**
 * HomePage - Main portfolio page with all sections
 */
export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }> | { locale: string };
}) {
  const { locale } = await Promise.resolve(params);
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <StudioSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

