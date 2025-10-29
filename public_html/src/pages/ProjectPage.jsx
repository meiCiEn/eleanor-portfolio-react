import React from "react";
import Seo from "../components/utilities/Seo";
import "./ProjectPage.css";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projectsData";
import LinkButton from "../components/ui/LinkButton";
import { ArrowDownLeft, ArrowUpRight, ArrowUpLeft } from "lucide-react";
import Breadcrumb from "../components/ui/Breadcrumb";

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  // Small helper: clamp description length ~160 chars, without cutting mid-word
  const clamp = (str = "", max = 160) => {
    const s = String(str).replace(/\s+/g, " ").trim();
    if (s.length <= max) return s;
    const cut = s.slice(0, max);
    const lastSpace = cut.lastIndexOf(" ");
    return `${cut.slice(0, lastSpace > 60 ? lastSpace : max)}…`;
  };

  // Build SEO fields with sensible fallbacks
  const getSeo = (p) => {
    if (!p) {
      return {
        title: "Project not found — Eleanor Mears",
        description: "The project you’re looking for could not be found.",
        path: `/projects/${slug || ""}`,
        image: undefined,
      };
    }

    const overviewText = String(p.overview || "").replace(/\s+/g, " ").trim();
    const firstSentence = overviewText.split(/[.!?]\s/)[0] || "";

    const title = p.seoTitle || `${p.title} — Eleanor Mears`;
    const description = clamp(
      p.seoDescription || p.tagline || firstSentence || `Details for ${p.title} by Eleanor Mears.`
    );

    // Prefer explicit ogImage, else thumbnail, else first gallery image
    const image =
      p.ogImage ||
      p.thumbnail ||
      (Array.isArray(p.gallery) && p.gallery.length ? p.gallery[0].src : undefined);

    return {
      title,
      description,
      path: `/projects/${p.slug}`,
      image,
    };
  };

  const seo = getSeo(project);

  if (!project) {
    return (
      <main id="main" tabIndex="-1">
        <Seo
          title={seo.title}
          description={seo.description}
          path={seo.path}
          image={seo.image}
        />
        <div className="o-container o-section">
          <h1>Project not found.</h1>
          <p>
            Return to <Link to="/">home page</Link>.
          </p>
        </div>
      </main>
    );
  }

  const breadcrumbItems = [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: project.title },
  ];

  const galleryItems = (project.gallery || []).filter((g) => g?.src);
  const isTwoCols = galleryItems.length > 1;

  function getImageClass(items, item) {
    if (items.length === 1) return "project-img project-img--single";
    if (item.mobile) return "project-img project-img--half";
    return "project-img";
  }

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        path={seo.path}
        image={seo.image}
      />
      <main id="main" tabIndex="-1">
        <section className="o-section">
          {/* Top bar: back (mobile) + breadcrumb (sm+) */}
          <div className="o-container-wide project-topbar">
            {/* Mobile: back button */}
            <div className="project-only-mobile">
              <Link
                to="/#projects"
                onClick={(e) => {
                  if (
                    document.referrer?.startsWith(window.location.origin + "/projects")
                  ) {
                    e.preventDefault();
                    window.history.back();
                  }
                }}
                className="project-backlink"
              >
                <ArrowUpLeft size={16} aria-hidden="true" focusable="false" />
                Back to Projects
              </Link>
            </div>

            {/* Tablet/desktop: full breadcrumb */}
            <div className="project-only-desktop project-crumbwrap">
              <Breadcrumb items={breadcrumbItems} />
            </div>
          </div>

          {/* Main container */}
          <div className="o-container-wide project-topgap">
            {/* Row 1: Title (left) + Roles (right) */}
            <div className="project-head">
              <div>
                <h1 className="project-title">{project.title}</h1>
              </div>

              {project.roles?.length > 0 && (
                <ul className="project-roles">
                  {project.roles.map((r) => (
                    <li key={r} className="color-text">
                      {r}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Row 2: Tagline */}
            {project.tagline && (
              <p className="project-tagline project-tagline--rule">
                {project.tagline}
              </p>
            )}

            {/* Row 2.1: Type label */}
            <div>
              <p className="project-type-label">
                {project.type ? project.type.toUpperCase() : " "}
              </p>
            </div>

            {/* Row 3: Overview / Team / Tech / Year */}
            <div className="project-meta">
              <div className="project-meta-grid">
                {/* Overview */}
                <div>
                  <h2 className="project-subheading">Overview</h2>
                  <div className="project-overview">
                    {String(project.overview)
                      .split("\n\n")
                      .map((para, i) => (
                        <p
                          key={i}
                          className={i > 0 ? "project-overview--spaced" : ""}
                        >
                          {para}
                        </p>
                      ))}
                  </div>
                </div>

                {/* Blank spacer cell */}
                <div />

                {/* Team */}
                <div>
                  {project.team?.length > 0 && (
                    <>
                      <h3 className="project-subheading">Team</h3>
                      <p className="project-overview">
                        {project.team.join(", ")}
                      </p>
                    </>
                  )}
                </div>

                {/* Tech */}
                <div>
                  <h3 className="project-subheading">Tech</h3>
                  <p>{project.tech?.length ? project.tech.join(", ") : "—"}</p>
                </div>

                {/* Year */}
                <div className="project-yearcol">
                  <h3 className="project-subheading">Year</h3>
                  <time className="text-lg-custom" dateTime={String(project.year)}>
                    {project.year || "—"}
                  </time>
                </div>
              </div>
            </div>

            {/* Row 4: Buttons */}
            <div className="project-actions">
              <LinkButton href="#see-more" variant="secondary" id="see-more-button">
                See more
              </LinkButton>

              {project.site && (
                <LinkButton
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to site
                </LinkButton>
              )}
            </div>
          </div>

          {/* ===== Gallery ===== */}
          <section id="see-more" className="o-section">
            <div className="o-container-wide">
              {galleryItems.length ? (
                <div
                  className={`project-gallery ${
                    isTwoCols ? "project-gallery--two" : ""
                  }`}
                >
                  {galleryItems.map((item, i) => (
                    <article key={`${project.slug}-gallery-${i}`}>
                      <figure className="project-figure">
                        {item.caption && (
                          <figcaption className="project-gallery-label">
                            {item.caption}
                          </figcaption>
                        )}

                        <img
                          src={item.src}
                          alt={item.alt || item.caption || project.title}
                          loading="lazy"
                          className={getImageClass(galleryItems, item)}
                        />
                      </figure>
                    </article>
                  ))}
                </div>
              ) : (
                <p className="text-lg-custom">Gallery coming soon.</p>
              )}
            </div>
          </section>

          {/* Prev / Next pager */}
          <section className="o-container-wide project-pager">
            {project.previousProjectSlug && (
              <div className="project-pager__cell">
                <Link
                  to={`/projects/${project.previousProjectSlug}`}
                  className="project-pager__link"
                >
                  <ArrowDownLeft size={16} aria-hidden="true" focusable="false" />
                  Previous project:{" "}
                  <span className="project-pager__strong">
                    {project.previousProjectTitle}
                  </span>
                </Link>
              </div>
            )}

            {project.nextProjectSlug && (
              <div className="project-pager__cell">
                <Link
                  to={`/projects/${project.nextProjectSlug}`}
                  className="project-pager__link project-pager__link--next"
                >
                  Next project:{" "}
                  <span className="project-pager__strong">
                    {project.nextProjectTitle}
                  </span>
                  <ArrowUpRight size={16} aria-hidden="true" focusable="false" />
                </Link>
              </div>
            )}
          </section>
        </section>
      </main>
    </>
  );
};

export default ProjectPage;
