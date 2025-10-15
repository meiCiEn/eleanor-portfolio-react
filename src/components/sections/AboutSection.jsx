import React from "react";
import SingleIconList from "../ui/SingleIconList";
import LinkButton from "../ui/LinkButton";
import Spacer from "../ui/Spacer";
import "./AboutSection.css";
import portrait from "../../assets/images/photos/eleanor-mears_profile_bw.webp";

const AboutSection = ({ headerHeight }) => {
  const aboutSectionMinHeight = `calc(100vh - ${headerHeight}px)`;

  return (
    <section
      id="about"
      className="o-section about"
      style={{ minHeight: aboutSectionMinHeight }}
    >
      <div className="o-container about-content">
        {/* Text column */}
        <div className="about-col about-col--text">
          <h2 id="about-heading" className="sr-only">About me</h2>

          <div className="about-iconrow" aria-hidden="true">
            <SingleIconList text="About Me" />
          </div>

          <div className="about-copy">
            <p className="about-text">
              A trained journalist, I worked for The Guardian, BBC, Deutsche Welle and Politico. In 2021 I completed an intensive full-time web development course at Interface3 in Brussels. Since then I’ve focused on front-end development.
            </p>
            <p className="about-text">
              I am fascinated by high-quality web design that is both eye-catching and functional, and I love the process
              of developing visual ideas towards a harmonious whole.
            </p>
            <p className="about-text">
              With my background in journalism, I am also keen to explore the intersection of news, data and visual
              representation in the burgeoning field of data-journalism.
            </p>
          </div>
        </div>

        {/* Image column */}
        <div className="about-col about-col--media">
          <div className="about-media">
            <img
              src={portrait}
              alt="Portrait of Eleanor Mears"
              width="640"
              height="800"
              loading="lazy"
              decoding="async"
              className="about-portrait"
            />
          </div>
          {/* Decorative accent kept commented out */}
          {/* <div className="about-accent" aria-hidden="true" /> */}
        </div>
      </div>

      {/* Spacer + CTA only from small screens up */}
      <div className="about-spacer"><Spacer size="xl" /></div>
      <div className="o-container about-cta">
        <LinkButton
          href="#skills"
          variant="secondary"
          showArrow
          aria-label="Jump to skills section"
          target="_self"
        >
          Skills
        </LinkButton>
      </div>
    </section>
  );
};

export default AboutSection;
