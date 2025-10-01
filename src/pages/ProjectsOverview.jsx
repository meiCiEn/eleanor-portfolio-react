import React from "react";
import { projects } from "../data/projectsData";
import ProjectCard from "../components/ui/ProjectCard";
import Spacer from '../components/ui/Spacer';
import "./ProjectsOverview.css";
import Breadcrumb from '../components/ui/Breadcrumb';

const ProjectsOverview = () => {
  // define breadcrumbs
  const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
  ];

  return (
    <main id="main" tabindex="-1" className="section container-wide">
      <div className="container-wide flex justify-end">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      {/* Page Title */}
      <Spacer size="xl" />
      <div>
        <h1 className="text-center">Projects</h1>
      </div>
      <Spacer size="xxl" />

      <section>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
          {projects.map((p, i) => (
            <div
              key={p.slug}
              className={i % 2 === 0 ? "mt-[120px]" : ""} // apply margin-top to first col
            >
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectsOverview;
