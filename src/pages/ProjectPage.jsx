import React from "react";
import "./ProjectPage.css";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projectsData";
import LinkButton from "../components/ui/LinkButton";
import { ArrowDownLeft, ArrowUpRight, ArrowUpLeft } from "lucide-react";
import Breadcrumb from '../components/ui/Breadcrumb';


const ProjectPage = () =>
{
    const { slug } = useParams();
    const project = projects.find( ( p ) => p.slug === slug );

    if ( !project )
    {
        return (
            <div className="container section">
                <h1>Project not found.</h1>
                <p>
                    Return to <Link to="/">home page</Link>.
                </p>
            </div>
        );
    }

    // define breadcrumbs
    const breadcrumbItems = [
        { label: 'Home', to: '/' },
        { label: 'Projects', to: '/projects' },
        { label: project.title } // last one has no "to"
    ];

    const galleryItems = ( project.gallery || [] ).filter( g => g?.src ); // skip empty/missing
    const gridCols = galleryItems.length > 1 ? "md:grid-cols-2" : "grid-cols-1";

    function getImageClass ( items, item )
    {
        if ( items.length === 1 ) return "md:w-4/5 m-auto";   // single image = full width
        if ( item.mobile ) return "w-full sm:w-1/2";          // mobile screenshots half width
        return "w-full";                            // desktop screenshots full width
    }


    return (

        <section className="section">
            <div className="container-wide flex justify-between items-center">
                {/* Mobile: back button */ }
                <div className="sm:hidden">
                    {/* Prefer history back only if referrer is your Projects page */ }
                    <Link
                        to="/#projects"
                        onClick={ ( e ) =>
                        {
                            if ( document.referrer?.startsWith( window.location.origin + "/projects" ) )
                            {
                                e.preventDefault();
                                window.history.back();
                            }
                        } }
                        className="inline-flex items-center gap-2 underline"
                        aria-label="Back to Projects"
                    >
                        <ArrowUpLeft className="w-4 h-4" /> Back to Projects
                    </Link>
                </div>

                {/* Tablet/desktop: full breadcrumb */ }
                <div className="hidden sm:flex container-wide justify-end">
                    <Breadcrumb items={ breadcrumbItems } />
                </div>
            </div>
            <div className="container-wide mt-24">


                {/* Row 1: Title (left) + Roles (right) */ }
                <div className="grid gap-4 md:grid-cols-[2fr_1fr] items-end mb-2 md:mb-4 lg:mb-6">


                    <div>
                        <h1 className="mb-1">{ project.title }</h1>
                    </div>

                    {/* Roles list – stacked vertically, right-aligned on desktop, left on mobile */ }
                    { project.roles?.length > 0 && (
                        <ul className="flex flex-col md:items-end project-roles">
                            { project.roles.map( ( r ) => (
                                <li key={ r } className="color-text">
                                    { r }
                                </li>
                            ) ) }
                        </ul>
                    ) }

                </div>


                {/* Row 2: Tagline (full width) */ }
                { project.tagline && (
                    <p className="mt-6 mb-8 pb-10 border-b-1 project-tagline">{ project.tagline }</p>
                ) }

                {/* Row 2.1: Website */ }

                <div>
                    <p className="mb-2 text-sm font-bold tracking-wide color-primary">
                        { project.type ? project.type.toUpperCase() : " " }
                    </p>
                </div>

                {/* Row 3: Overview (left), Tech (middle), Year (right) */ }
                <div className="pt-12 border-t-1">

                    <div className="grid gap-8 md:grid-cols-[4fr_2fr_2fr_2fr_1fr] items-start">

                        {/* Overview block with small category label like “WEBSITE” and “Overview” title */ }
                        <div>

                            <h2 className="project-subheading">Overview</h2>
                            <div className="project-overview">
                                {/* If you ever store multiple paragraphs, split on \n\n */ }
                                { String( project.overview ).split( "\n\n" ).map( ( para, i ) => (
                                    <p key={ i } className={ i > 0 ? "mt-4" : "" }>
                                        { para }
                                    </p>
                                ) ) }
                            </div>
                        </div>

                        {/*Blank*/ }
                        <div></div>

                        {/* Team */ }
                        <div>
                            { project.team?.length > 0 && (
                                <>
                                    <h3 className="project-subheading">Team</h3>
                                    <p className="project-overview">{ project.team.join( ", " ) }</p>
                                </>

                            ) }
                        </div>

                        {/* Tech */ }
                        <div>
                            <h3 className="project-subheading">Tech</h3>
                            <p>
                                { project.tech?.length ? project.tech.join( ", " ) : "—" }
                            </p>
                        </div>

                        {/* Year */ }
                        <div className="md:text-right">
                            <h3 className="project-subheading">Year</h3>
                            <p className="text-lg-custom">{ project.year || "—" }</p>
                        </div>
                    </div>
                </div>

                {/* Row 4: Buttons (See more → gallery anchor, Go to site) */ }
                <div className="mt-10 flex flex-wrap gap-4 justify-center sm:justify-end ">
                    {/* “See more” scrolls to your gallery section id */ }
                    <LinkButton href="#see-more" variant="secondary" id="see-more-button">
                        See more
                    </LinkButton>

                    {/* External site */ }
                    { project.site && (
                        <LinkButton href={ project.site } target="_blank" rel="noopener">
                            Go to site
                        </LinkButton>
                    ) }
                </div>
            </div>


            {/* ===== Gallery ===== */ }
            <section id="see-more" className="section">
                <div className="container-wide">
                    { galleryItems.length ? (
                        <div className={ `grid gap-10 ${ gridCols }` }>
                            { galleryItems.map( ( item, i ) => (
                                <article key={ `${ project.slug }-gallery-${ i }` }>
                                    { item.caption && (
                                        <h6 className="project-gallery-label">{ item.caption }</h6>
                                    ) }
                                    <figure className="project-figure">
                                        <img
                                            src={ item.src }
                                            alt={ item.alt || item.caption || project.title }
                                            loading="lazy"
                                            className={ `object-cover ${ getImageClass( galleryItems, item ) }` }
                                        />
                                    </figure>
                                </article>
                            ) ) }
                        </div>
                    ) : (
                        <p className="text-lg-custom">Gallery coming soon.</p>
                    ) }
                </div>
            </section>
            <section className="flex container-wide justify-between">
                { project.previousProjectSlug && (
                    <div className="mt-12">
                        <Link to=
                            { `/projects/${ project.previousProjectSlug }` }
                            className="underline flex items-center gap-2"
                        >
                            <ArrowDownLeft className="w-4 h-4" />
                            Previous project: <span className="underline font-semibold">{ project.previousProjectTitle }</span>
                        </Link>
                    </div>
                ) }

                { project.nextProjectSlug && (
                    <div className="mt-12">
                        <Link
                            to={ `/projects/${ project.nextProjectSlug }` }
                            className="underline flex items-center gap-2"
                        >
                            Next project: <span className="underline font-semibold">{ project.nextProjectTitle }</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>
                ) }
            </section>



        </section>

    );
};

export default ProjectPage;
