import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import "./ProjectCard.css";

function Summary({ project }) {
  const text = project.summary?.text ?? project.tagline ?? "";
  const linkText = project.summary?.linkText;
  const linkTo = project.summary?.linkText && project.site;

  if (!linkText || !linkTo) {
    return <p className="project-summary">{text}</p>;
  }

  const i = text.toLowerCase().indexOf(linkText.toLowerCase());
  if (i === -1) return <p className="project-summary">{text}</p>;

  const before = text.slice(0, i);
  const match = text.slice(i, i + linkText.length);
  const after = text.slice(i + linkText.length);

  return (
    <p className="project-summary project-summary--spaced">
      {before}
      <a
        href={linkTo}
        target="_blank"
        rel="noopener noreferrer"
        className="project-summary__link"
      >
        {match}
      </a>
      {after}
    </p>
  );
}

const ProjectCard = ({ project }) => {
  const imgSrc = project.thumbnail || project.gallery?.[0]?.src || "";

  return (
    <article className="project-card">
      {/* Image */}
      <div className="project-image-wrap">
        <Link to={`/projects/${project.slug}`} className="project-image-link">
          <img
            src={imgSrc}
            alt={project.title}
            loading="lazy"
            className="project-image"
          />
        </Link>
      </div>

      <div className="project-type">
        {(project.type || "Website").toUpperCase()}
      </div>

      <h2 className="project-title">{project.title}</h2>

      <Summary project={project} />

      <div>
        <Link
          to={`/projects/${project.slug}`}
          className="project-button"
          aria-label={`View details for ${project.title}`}
        >
          View Details <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
