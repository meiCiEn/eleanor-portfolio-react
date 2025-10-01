import React from 'react';
import Spacer from '../ui/Spacer';
import LinkButton from '../ui/LinkButton';
import { skills } from '../../data/skillsData';
import SkillCard from '../ui/SkillCard';
import './SkillsSection.css';

const SkillsSection = ( { headerHeight } ) =>
{
    const skillsSectionMinHeight = `calc(100vh - ${ headerHeight }px)`;

    return (
        <section id="skills" className="section flex flex-col justify-center border-b" style={ { minHeight: skillsSectionMinHeight } }>
            <div className="container">
                <Spacer size="lg" />
                <h2 className="text-center">Skills</h2>
                <ul className="flex flex-col md:flex-row justify-center gap-8 mt-10">
                    { skills.map( ( category ) => (
                        <li key={category.title} className="basis-full grow">
                            <SkillCard key={ category.title } { ...category } />
                            </li>
                    ) ) }
                </ul>
                <div className="hidden sm:flex justify-center mt-10">
                    <LinkButton
                        href="#projects"
                        variant="secondary"
                        showArrow
                        aria-label="Jump to projects section"
                        target="_self">Projects</LinkButton>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
