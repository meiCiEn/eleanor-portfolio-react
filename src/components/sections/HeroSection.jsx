import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import LinkButton from "../ui/LinkButton";
import "./HeroSection.css";

const HeroSection = ({ headerHeight }) => {
  const heroSectionMinHeight = `calc(100vh - ${headerHeight}px)`;

  return (
    <section
      id="hero"
      className="hero"
      style={{ minHeight: heroSectionMinHeight }}
    >
      <div className="o-container hero-top">
        <h1 className="hero-heading">Eleanor Mears</h1>
        <h2 className="hero-subheading">Front-End Developer</h2>
        <p className="hero-description">
          As a <strong>front-end web developer</strong> from the world of journalism, my goal is to create <strong>visually–appealing websites</strong> with accessibility and user experience at the forefront of each design.
        </p>
      </div>

      <div className="hero-bottom o-container">
        <LinkButton
          href="#about"
          variant="secondary"
          showArrow
          aria-label="Jump to about section"
          target="_self"
        >
          About Me
        </LinkButton>

        <div className="hero-socials">
          <a
            href="https://github.com/meiCiEn"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link"
            aria-label="Visit Eleanor Mears’s GitHub profile"
          >
            <FaGithub size={18} aria-hidden="true" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/elliemears/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link"
            aria-label="Visit Eleanor Mears’s LinkedIn profile"
          >
            <FaLinkedin size={18} aria-hidden="true" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
