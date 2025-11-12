import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PrinciplesSection from "@/components/PrinciplesSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import AgentsSection from "@/components/AgentsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

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

