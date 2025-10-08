import React from "react";
import Spacer from "../ui/Spacer";
import LinkButton from "../ui/LinkButton";
import { skills } from "../../data/skillsData";
import SkillCard from "../ui/SkillCard";
import "./SkillsSection.css";

const SkillsSection = ({ headerHeight }) => {
  const skillsSectionMinHeight = `calc(100vh - ${headerHeight}px)`;

  return (
    <section
      id="skills"
      className="o-section skills"
      style={{ minHeight: skillsSectionMinHeight }}
    >
      <div className="o-container">
        <Spacer size="lg" />
        <h2 className="u-text-center">Skills</h2>

        <ul className="skills-list" role="list">
          {skills.map((category) => (
            <li key={category.title} className="skills-item">
              <SkillCard {...category} />
            </li>
          ))}
        </ul>

        <div className="skills-cta">
          <LinkButton
            href="#projects"
            variant="secondary"
            showArrow
            aria-label="Jump to projects section"
            target="_self"
          >
            Projects
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
