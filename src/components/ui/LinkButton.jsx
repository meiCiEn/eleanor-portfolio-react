// LinkButton.jsx
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ArrowDown } from "lucide-react";

const LinkButton = ({
  href,
  id,
  children,
  variant = "primary",
  icon: Icon,
  showArrow = false,
  iconLgOnly = false,           // 👈 NEW: only show icon at lg (≥1024px)
  ...props
}) => {
  const buttonClass = classNames("button", {
    "button-secondary": variant === "secondary",
    "flex items-center gap-2": Icon || showArrow,
  });

  const iconWrapperClass = iconLgOnly ? "hidden lg:inline-flex" : "inline-flex";

  return (
    <a href={href} id={id} className={buttonClass} {...props}>
      {children}
      {Icon && (
        <span className={iconWrapperClass}>
          <Icon className="icon" size={18} />
        </span>
      )}
      {!Icon && showArrow && (
        <span className={iconWrapperClass}>
          <ArrowDown className="icon" size={18} />
        </span>
      )}
    </a>
  );
};

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  icon: PropTypes.elementType,
  showArrow: PropTypes.bool,
  iconLgOnly: PropTypes.bool,    // 👈 NEW
};

LinkButton.defaultProps = {
  variant: "primary",
  showArrow: false,
  iconLgOnly: false,
};

export default LinkButton;
