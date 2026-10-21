import { useState } from "react";
import { useAccordionToggle } from "react-bootstrap";

const CustomAccordionToggle = ({
  children,
  eventKey,
  color,
}: {
  children: React.ReactNode;
  eventKey: string;
  color: string;
}) => {
  const decoratedOnClick = useAccordionToggle(eventKey, () => {});
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={decoratedOnClick}
      style={{
        color,
        cursor: "pointer",
        textDecoration: hovered ? "underline" : "none",
      }}
    >
      {children}
    </span>
  );
};

export default CustomAccordionToggle;
