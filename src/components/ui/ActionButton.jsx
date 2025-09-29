import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ArrowDown } from "lucide-react"; // default arrow if I just want a quick arrow

// NOTE: styles come from global .button in style.css (inline-flex centering, etc.)

const ActionButton = ( {
    id,
    type = "button", // "button" | "submit" | "reset"
    children, // the label/content inside
    variant = "primary", // "primary" = solid, "secondary" = outline
    icon: Icon, // optional icon component (e.g. Save, Loader, etc.)
    showArrow = false, // quick way to show the default down arrow if I don't pass icon
    onClick,
    ...props
} ) =>
{
    // build classes:
    // always "button"; add "button-secondary" when variant is secondary
    // add flex spacing only if I actually render an icon/arrow
    const buttonClass = classNames( "button", {
        "button-secondary": variant === "secondary",
  "button-inverted": variant === "inverted",
        "flex items-center gap-2": Icon || showArrow,
    } );

    return (
        <button
            id={ id }
            type={ type }
            onClick={ onClick }
            className={ buttonClass }
            { ...props }
        >
            { children } {/* always show the text */ }
            { Icon && <Icon className="icon" size={ 18 } /> } {/* custom icon wins */ }
            { !Icon && showArrow && <ArrowDown className="icon" size={ 18 } /> } {/* fallback arrow */ }
        </button>
    );
};

// what props this expects
ActionButton.propTypes = {
    id: PropTypes.string,
    type: PropTypes.oneOf( [ "button", "submit", "reset" ] ),
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf( [ "primary", "secondary", "inverted" ] ),
    icon: PropTypes.elementType, // pass a React component (e.g. from lucide-react)
    showArrow: PropTypes.bool, // legacy/quick arrow option
    onClick: PropTypes.func,
};

// defaults if I forget to pass them
ActionButton.defaultProps = {
    type: "button",
    variant: "primary",
    showArrow: false,
};

export default ActionButton;

/* ------------------------------
EXAMPLES

1) Plain action button
<ActionButton onClick={handleClick}>
  Save
</ActionButton>

2) With default ArrowDown
<ActionButton showArrow onClick={handleClick}>
  More
</ActionButton>

3) With a custom Lucide icon
import { Download } from "lucide-react";

<ActionButton icon={Download} onClick={handleDownload}>
  Download
</ActionButton>

4) Submit button for a form, outlined style
<ActionButton type="submit" variant="secondary">
  Send
</ActionButton>
-------------------------------- */
