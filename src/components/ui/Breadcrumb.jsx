import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => (
  <nav aria-label="Breadcrumb">
    <ol className="flex flex-wrap text-sm">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <li key={index} className="flex items-center">
            {isLast ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <Link to={item.to} className="hover:underline">
                {item.label}
              </Link>
            )}
            {!isLast && <span className="mx-2" aria-hidden="true">›</span>}
          </li>
        );
      })}
    </ol>
  </nav>
);

export default Breadcrumb;
