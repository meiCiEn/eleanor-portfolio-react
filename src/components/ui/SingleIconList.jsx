import React from "react";
import "./SingleIconList.css";

const SingleIconList = ({ text, as: Tag = "h2" }) => {
  return (
    <ul className="c-iconlist" role="list">
      <li className="c-iconlist__item">
        <span className="c-iconlist__icon" aria-hidden="true">
          <svg
            viewBox="0 0 512 512"
            className="c-iconlist__bullet"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
          </svg>
        </span>
        <Tag className="c-iconlist__text">{text}</Tag>
      </li>
    </ul>
  );
};

export default SingleIconList;

// Usage: <SingleIconList text="About Me" />
// <SingleIconList text="About Me" as="h3" />
