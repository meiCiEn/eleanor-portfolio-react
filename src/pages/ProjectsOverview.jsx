import React from "react";
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
    <main id="main" tabIndex="-1" className="o-section o-container-wide">
      <div className="o-container-wide flex justify-end">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <Spacer size="xl" />
      <h1 className="text-center">Projects</h1>
      <Spacer size="xxl" />

      <section aria-labelledby="projects-list-heading">
        <h2 id="projects-list-heading" className="sr-only">Projects list</h2>

        <ul className="grid md:grid-cols-2 gap-x-16 gap-y-0" role="list">
          {projects.map((p, i) => (
            <li
              key={p.slug}
              className={i % 2 === 0 ? "md:mt-[120px] mb-8" : "mb-8"}
            >
              <ProjectCard project={p} />
            </li>
          ))}
        </ul>

      </section>
    </main>
  );
};

export default ProjectsOverview;
