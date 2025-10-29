import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";
import Seo from "../components/utilities/Seo";

export default function Home({ headerHeight }) {
  return (
    <>
      <Seo
        title="Eleanor Mears — Frontend Developer"
        description="Portfolio of Eleanor Mears — frontend developer. Selected projects, accessibility-first UI, and React/Vite builds."
        path="/"
      />
    <main id="main" tabIndex="-1">
      <div id="top"></div>
      <HeroSection headerHeight={headerHeight} />
      <AboutSection headerHeight={headerHeight} />
      <SkillsSection headerHeight={headerHeight} />
      <ProjectsSection headerHeight={headerHeight} />
      <ContactSection />
    </main>
    </>
  );
}
