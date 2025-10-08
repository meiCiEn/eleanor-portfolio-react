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
  iconLgOnly = false, // show icon only at ≥1024px
  ...props
}) => {
  const buttonClass = classNames("c-button", {
    "c-button--secondary": variant === "secondary",
  });

  // hide icon on mobile; show inline-flex at lg+
  const iconWrapperClass = iconLgOnly ? "u-hidden lg:u-inline-flex" : undefined;

  return (
    <a href={href} id={id} className={buttonClass} {...props}>
      {children}
      {Icon && (
        <span className={iconWrapperClass}>
          <Icon className="icon" size={18} aria-hidden="true" />
        </span>
      )}
      {!Icon && showArrow && (
        <span className={iconWrapperClass}>
          <ArrowDown className="icon" size={18} aria-hidden="true" />
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
  iconLgOnly: PropTypes.bool,
};

LinkButton.defaultProps = {
  variant: "primary",
  showArrow: false,
  iconLgOnly: false,
};

export default LinkButton;
