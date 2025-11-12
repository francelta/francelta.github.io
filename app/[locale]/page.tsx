import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PrinciplesSection from "@/components/PrinciplesSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import AgentsSection from "@/components/AgentsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { locales } from '@/i18n';

/**
 * Generate static params for all supported locales
 * Required for static export with dynamic routes
 * @returns {Array<Object>} Array of locale objects
 */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * Main page component - Single Page Application (SPA)
 * Renders all sections of the portfolio in order
 * @returns {JSX.Element} Main page with all portfolio sections
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PrinciplesSection />
      <SkillsSection />
      <ExperienceSection />
      <AgentsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

