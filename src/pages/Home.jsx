import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";


export default function Home({ headerHeight }) {
  return (
    <main>
      <HeroSection headerHeight={headerHeight} />
      <AboutSection headerHeight={headerHeight} />
      <SkillsSection headerHeight={headerHeight} />
      <ProjectsSection headerHeight={headerHeight} />
      <ContactSection />
    </main>
  );
}
