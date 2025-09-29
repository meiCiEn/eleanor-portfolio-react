import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import LinkButton from '../ui/LinkButton';
import './HeroSection.css';
import WavyBackground from '../ui/WavyBackground';



const HeroSection = ({ headerHeight }) => { // Receive headerHeight as a prop
  const heroSectionMinHeight = `calc(100vh - ${headerHeight}px)`;

  return (
    <section id="hero"
      className="flex flex-col justify-between text-left border-b-1"
      style={{ minHeight: heroSectionMinHeight }} // Apply the calculated minHeight
    >
           

      <div className="container flex flex-col justify-center flex-1">
        <h1 className="hero-heading" aria-label="Eleanor Mears, front-end developer">Eleanor Mears</h1>
        <h2 className="hero-subheading">Front-End Developer</h2>
        <p className="hero-description mt-6 max-w-4xl pl-0 sm:pl-6 md:pl-12">
          As a <strong>front-end web developer</strong> from the world of journalism, my goal is to create <strong>visually–appealing websites</strong> with accessibility and user experience at the forefront of each design.
        </p>
      </div>

      <div className="hero-bottom container flex flex-col sm:flex-row justify-between items-center gap-4 mt-16 ">


        <LinkButton
        href="#about"
        variant="secondary"
        showArrow
        aria-label="Jump to about section"
        target="_self">About Me</LinkButton>

        <div className="items-center gap-6 hidden sm:flex">
          <a
            href="https://github.com/meiCiEn"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link"
            aria-label="Visit Eleanor Mears’s GitHub profile"
          >
            <FaGithub className="text-lg" aria-hidden="true"/> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/elliemears/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link"
            aria-label="Visit Eleanor Mears’s LinkedIn profile"
          >
            <FaLinkedin className="text-lg" aria-hidden="true"/> LinkedIn
          </a>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;