import React from "react";
import Seo from "../components/utilities/Seo";
import { projects } from "../data/projectsData";
import ProjectCard from "../components/ui/ProjectCard";
import Spacer from "../components/ui/Spacer";
import "./ProjectsOverview.css";
import Breadcrumb from "../components/ui/Breadcrumb";

const ProjectsOverview = () => {
  const breadcrumbItems = [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/projects" },
  ];

  return (
    <>
      <Seo
        title="Projects — Eleanor Mears"
        description="Selected frontend projects — interfaces, accessibility, and React/Vite builds."
        path="/projects"
      />
    <main id="main" tabIndex="-1" className="o-section o-container-wide">
      <div className="o-container-wide po-crumbbar">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <Spacer size="xl" />
      <h1 className="u-text-center">Projects</h1>
      <Spacer size="xxl" />

      <section aria-labelledby="projects-list-heading">
        <h2 id="projects-list-heading" className="sr-only">Projects list</h2>

        <ul className="po-grid" role="list">
          {projects.map((p) => (
            <li key={p.slug} className="po-item">
              <ProjectCard project={p} />
            </li>
          ))}
        </ul>
      </section>
    </main>
    </>
  );
};

export default ProjectsOverview;
