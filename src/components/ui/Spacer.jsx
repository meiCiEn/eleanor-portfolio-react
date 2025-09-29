import { useDebugValue } from 'react';

const Spacer = ({ size = "md" }) => {
  const sizes = {
    xs: "h-2",
    sm: "h-4",
    md: "h-8",
    lg: "h-12",
    xl: "h-16",
    xxl:"h-24",
  };

  return <div className={sizes[size] || sizes["md"]} />;
};

export default Spacer;

// Example usage

{/* <Spacer size="lg" /> */}
