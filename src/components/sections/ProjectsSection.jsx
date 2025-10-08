import React from "react";
import { Link } from "react-router-dom";
import Spacer from "../ui/Spacer";
import LinkButton from "../ui/LinkButton";
import { ArrowUpRight, Mail, Download } from "lucide-react";
import { projects } from "../../data/projectsData";
import "./ProjectsSection.css";

const ProjectsSection = ({ headerHeight }) => {
  const projectsSectionMinHeight = `calc(100vh - ${headerHeight}px)`;

  return (
    <section
      className="o-section projects-section"
      id="projects"
      style={{ minHeight: projectsSectionMinHeight }}
    >
      <div className="o-container projects-grid">
        {/* LEFT COLUMN: Projects List */}
        <div className="projects-col projects-col--list">
          {/* md and below */}
          <div className="only-mobile" aria-hidden="true">
            <Spacer size="lg" />
          </div>

          {/* md and up */}
          <div className="only-desktop" aria-hidden="true">
            <Spacer size="xxl" />
          </div>

          <h2 id="projects-heading" className="projects-title only-mobile u-text-center">
            Projects
          </h2>

          <ul className="project-list" aria-labelledby="projects-heading">
            {projects.map((project) => (
              <li key={project.slug} className="project-row">
                {/* Internal page link + optional external site icon */}
                <div className="project-left">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="project-link"
                    aria-label={`Open project page for ${project.title}`}
                  >
                    {project.title}
                    <ArrowUpRight className="icon-link" />
                  </Link>
                </div>

                <time className="project-year" dateTime={String(project.year)}>
                  {project.year}
                </time>
              </li>
            ))}
          </ul>

          <div className="projects-cv">
            <Spacer size="md" />
            <LinkButton
              href={`${import.meta.env.BASE_URL}cv/MEARS-Eleanor-CV-FR-EN-June-2025.pdf`}
              variant="primary"
              icon={Download}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </LinkButton>
          </div>
        </div>

        {/* RIGHT COLUMN: Title + Buttons */}
        <div className="projects-col projects-col--right only-desktop">
          <div className="projects-sticky" style={{ top: `${headerHeight}px` }}>
            <Spacer size="xxl" />
            <h2 className="projects-title" aria-hidden="true">
              Projects
            </h2>
            <Spacer size="xxl" />
            <div className="projects-buttons">
              <LinkButton
                href="#contact"
                variant="secondary"
                icon={Mail}
                iconLgOnly
                aria-label="Email Eleanor Mears"
              >
                Contact Me
              </LinkButton>
              <LinkButton
                href={`${import.meta.env.BASE_URL}cv/MEARS-Eleanor-CV-FR-EN-June-2025.pdf`}
                variant="primary"
                icon={Download}
                iconLgOnly
                target="_blank"
              >
                Download CV
              </LinkButton>
            </div>
          </div>
        </div>
      </div>

      <div className="o-container projects-bottom only-desktop">
        <LinkButton href="/projects" variant="secondary" icon={ArrowUpRight}>
          See all projects
        </LinkButton>
      </div>
    </section>
  );
};

export default ProjectsSection;
