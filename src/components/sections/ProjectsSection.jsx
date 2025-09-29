import React from "react";
import { Link } from "react-router-dom";
import Spacer from "../ui/Spacer";
import LinkButton from "../ui/LinkButton";
import { ArrowUpRight, Mail, Download } from "lucide-react";
import { projects } from "../../data/projectsData";
import "./ProjectsSection.css";

const ProjectsSection = ( { headerHeight } ) =>
{
  // Let the section grow with content, but never be shorter than the viewport minus header
  const projectsSectionMinHeight = `calc(100vh - ${ headerHeight }px)`;

  return (
    <section
      className="section projects-section border-b"
      id="projects"
      style={ { minHeight: projectsSectionMinHeight } }
    >
      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* LEFT COLUMN: Projects List */ }
        <div className="pr-2">
          {/* md and below */ }
          <div className="block md:hidden" aria-hidden="true">
            <Spacer size="lg" />
          </div>

          {/* md and up */ }
          <div className="hidden md:block" aria-hidden="true">
            <Spacer size="xxl" />
          </div>
          <h2 className="block md:hidden text-center projects-title">Projects</h2>
          <ul className="project-list mt-10 md:mt-0">

            { projects.map( ( project ) => (
              <li
                key={ project.slug }
                className="project-row flex justify-between items-center"
              >
                {/* Internal page link + optional external site icon */ }
                <div className="flex items-center gap-2">
                  <Link
                    to={ `/projects/${ project.slug }` }
                    className="project-link focus-visible:outline-2 focus-visible:outline-[var(--color-highlight)]"
                    aria-label={ `Open project page for ${ project.title }` }
                  >
                    { project.title }
                    <ArrowUpRight className="icon-link w-4 h-4" />
                  </Link>

                </div>

                <span className="project-year">{ project.year }</span>
              </li>
            ) ) }
          </ul>
          <div className="flex justify-center md:hidden">
            <Spacer size="md" />
                        <LinkButton
                href={`${import.meta.env.BASE_URL}cv/MEARS-Eleanor-CV-FR-EN-June-2025.pdf`}
                variant="primary"
                icon={ Download }
                aria-label="Download Eleanor Mears's resume"
                target="_blank"
              >
                Download CV
              </LinkButton>
              </div>
        </div>

        {/* RIGHT COLUMN: Title + Buttons */ }
        <div className="hidden md:flex flex-col items-start justify-start">
          <div className="md:sticky self-start" style={ { top: `${ headerHeight }px` } }>
            <Spacer size="xxl" />
            <h2 className="projects-title">Projects</h2>
            <Spacer size="xxl" />
            <div className="flex flex-col md:flex-row items-end gap-4">
              <LinkButton
                href="#contact"
                variant="secondary"
                icon={ Mail }
                iconLgOnly
                aria-label="Email Eleanor Mears"
              >
                Contact Me
              </LinkButton>
              <LinkButton
                href={`${import.meta.env.BASE_URL}cv/MEARS-Eleanor-CV-FR-EN-June-2025.pdf`}
                variant="primary"
                icon={ Download }
                iconLgOnly
                aria-label="Download Eleanor Mears's resume"
                target="_blank"
              >
                Download CV
              </LinkButton>
            </div>
          </div>
        </div>
      </div>

      <div className="container hidden md:block max-w-6xl mx-auto mt-8">
        <Link to="/projects">
          <LinkButton
            variant="secondary"
            icon={ ArrowUpRight }
            aria-label="Go to projects overview"
          >
            See all projects
          </LinkButton>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
