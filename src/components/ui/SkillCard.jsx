import React from 'react';
import './SkillCard.css';
import { ArrowUpRight } from "lucide-react";

const SkillCard = ( { title, icon: Icon, items } ) =>
{
  return (
    <div className="skill-card-wrapper">
      <div className="skill-card">
        <div className="skill-icon">
          <Icon className="w-8 h-8" aria-hidden="true" focusable="false" />
        </div>
        <h3 className="skill-card-title">{ title }</h3>
        <ul className="skill-list">
          { items.map( ( skill ) => (
            <li key={ skill } className="skill-pill">
              { skill }
            </li>
          ) ) }
        </ul>
        <div className="projects-link-wrapper">
          <a href="#" className="projects-link inline-flex items-center gap-2" aria-label={ `See projects I have worked on` }>
            See my projects
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" focusable="false" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;

