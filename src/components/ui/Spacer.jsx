import PropTypes from "prop-types";
import "./Spacer.css";

const SIZE_CLASS = {
  xs: "spacer--xs",
  sm: "spacer--sm",
  md: "spacer--md",
  lg: "spacer--lg",
  xl: "spacer--xl",
  xxl:"spacer--xxl",
};

export default function Spacer({ size = "md" }) {
  const mod = SIZE_CLASS[size] || SIZE_CLASS.md;
  return <div className={`spacer ${mod}`} aria-hidden="true" />;
}

Spacer.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
};
