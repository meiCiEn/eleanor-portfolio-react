import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ArrowDown } from "lucide-react";

// Styles come from global .c-button / modifiers in 05-components.css

const ActionButton = ({
  id,
  type = "button",
  children,
  variant = "primary", // "primary" | "secondary" | "inverted"
  icon: Icon,
  showArrow = false,
  onClick,
  ...props
}) => {
  const buttonClass = classNames(
    "c-button",
    {
      "c-button--secondary": variant === "secondary",
      "c-button--inverted": variant === "inverted",
    }
  );

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      className={buttonClass}
      {...props}
    >
      {children}
      {Icon && <Icon className="icon" size={18} aria-hidden="true" />}
      {!Icon && showArrow && <ArrowDown className="icon" size={18} aria-hidden="true" />}
    </button>
  );
};

ActionButton.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "inverted"]),
  icon: PropTypes.elementType,
  showArrow: PropTypes.bool,
  onClick: PropTypes.func,
};

ActionButton.defaultProps = {
  type: "button",
  variant: "primary",
  showArrow: false,
};

export default ActionButton;
