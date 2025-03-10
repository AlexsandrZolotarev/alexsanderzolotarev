import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const FadeInAnimation = ({
  children,
  wrapperElement = "div",
  direction = null,
  delay = 2.1,
  ...props
}) => {
  const Component = wrapperElement;
  let compRef = useRef(null);
  const distance = 0;
  let fadeDirection;
  switch (direction) {
    case "left":
      fadeDirection = { x: -distance };
      break;
    case "right":
      fadeDirection = { x: distance };
      break;
    case "up":
      fadeDirection = { y: distance };
      break;
    case "down":
      fadeDirection = { y: -distance };
      break;
    default:
      fadeDirection = { x: 0 };
  }
  useEffect(() => {
    if(document.readyState === "interactive")
    {
      gsap.to(compRef.current, 1, {
        ...fadeDirection,
        opacity: 1,
        delay,
      });
    }
  }, [compRef, fadeDirection, delay]);
  return (
    <Component ref={compRef} {...props}>
      {children}
    </Component>
  );
};

export default FadeInAnimation;
