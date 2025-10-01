import React from 'react';
import SingleIconList from '../ui/SingleIconList';
import LinkButton from '../ui/LinkButton';
import Spacer from '../ui/Spacer';
import './AboutSection.css';
import portrait from "../../assets/images/photos/eleanor-mears_profile_bw.png";

const AboutSection = ( { headerHeight } ) =>
{
  const aboutSectionMinHeight = `calc(100vh - ${ headerHeight }px)`;

  return (
    <section id="about" className="section flex flex-col justify-between border-b-1" style={ { minHeight: aboutSectionMinHeight } } >
      <div className="container flex flex-col-reverse md:flex-row items-start justify-between gap-10">


        <div className="md:w-1/2 lg:w-2/3 flex flex-col">
        <h2 id="about-heading" className="sr-only">About me</h2>
          <div className="flex" aria-hidden="true">
            <SingleIconList text="About Me" />
            </div>
          <div className="flex flex-col">
            <p className="mb-4 about-text">
              A trained journalist, I worked for The Guardian, BBC, Deutsche Welle and Politico. In 2021 I completed an intensive full‑time web development course at Interface3 in Brussels. Since then I’ve focused on front‑end development.
            </p>
            <p className="mb-4 about-text">
              I am fascinated by high-quality web design that is both eye-catching and functional, and I love the process
              of developing visual ideas towards a harmonious whole.
            </p>
            <p className="about-text">
              With my background in journalism, I am also keen to explore the intersection of news, data and visual
              representation in the burgeoning field of data-journalism.
            </p>
          </div>
        </div>

        <div className="sm:w-1/2 md:w-1/3 flex justify-center md:justify-end relative">
          <div className="relative">
            <img
              src={ portrait }
              alt="Portrait of Eleanor Mears"
              width="640"
              height="800" 
              loading="lazy"
              decoding="async"
              className="h-auto rounded-md object-cover"
            />
          </div>
          {/* <div
            className="absolute top-6 left-6 w-64 h-full bg-[--color-accent] -z-10 rounded-md" aria-hidden="true"
            style={ { clipPath: 'polygon(0 10%, 100% 0, 100% 90%, 0% 100%)' } }
          /> */}

        </div>
      </div>
      <div className="hidden sm:block"><Spacer size="xl" /></div>
      <div className="container hidden sm:block">
        <LinkButton
          href="#skills"
          variant="secondary"
          showArrow
          aria-label="Jump to skills section"
          target="_self">Skills</LinkButton>
      </div>
    </section>

  );
};

export default AboutSection;
