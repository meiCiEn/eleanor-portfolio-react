import React from 'react';
import './SingleIconList.css';

const SingleIconList = ({ text }) => {
  return (
    
    <ul className="icon-list">
      <li className="icon-list-item">
        <span className="icon-list-icon">
          <svg
            aria-hidden="true"
            viewBox="0 0 512 512"
            className="icon-circle"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
          </svg>
        </span>
        <h2 className="icon-list-text">{text} </h2>
      </li>
    </ul>
  );
};

export default SingleIconList;

// Use like this:

// <SingleIconList text="About Me" />