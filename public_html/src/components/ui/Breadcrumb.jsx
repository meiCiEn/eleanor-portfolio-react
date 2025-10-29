import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = ({ items }) => (
  <nav className="breadcrumb" aria-label="Breadcrumb">
    <ol className="breadcrumb__list" role="list">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <li key={index} className="breadcrumb__item">
            {isLast ? (
              <span className="breadcrumb__current" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link to={item.to} className="breadcrumb__link">
                {item.label}
              </Link>
            )}
            {!isLast && (
              <span className="breadcrumb__sep" aria-hidden="true">›</span>
            )}
          </li>
        );
      })}
    </ol>
  </nav>
);

export default Breadcrumb;
