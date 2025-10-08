import PropTypes from "prop-types";
import "./Spacer.css";

const SIZE_CLASS = {
  xs: "spacer--xs",   // 0.5rem (was h-2)
  sm: "spacer--sm",   // 1rem   (was h-4)
  md: "spacer--md",   // 2rem   (was h-8)
  lg: "spacer--lg",   // 3rem   (was h-12)
  xl: "spacer--xl",   // 4rem   (was h-16)
  xxl:"spacer--xxl",  // 6rem   (was h-24)
};

export default function Spacer({ size = "md" }) {
  const mod = SIZE_CLASS[size] || SIZE_CLASS.md;
  return <div className={`spacer ${mod}`} aria-hidden="true" />;
}

Spacer.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
};
