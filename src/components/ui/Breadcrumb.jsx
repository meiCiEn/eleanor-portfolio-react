import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              {isLast ? (
                <span>{item.label}</span>
              ) : (
                <Link to={item.to} className="hover:underline">
                  {item.label}
                </Link>
              )}

              {/* Add a separator unless it's the last item */}
              {!isLast && <span className="mx-2">›</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
