// src/components/AnimatedSection.jsx
import React, { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

const AnimatedSection = ({ children, delay = 0, distance = "300px" }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(sectionRef.current, {
      origin: "bottom",
      distance: distance,
      duration: 1000,
      delay: delay,
      reset: false,
    });
  }, [delay, distance]);

  return (
    <div ref={sectionRef} style={{ margin: "100px 0" }}>
      {children}
    </div>
  );
};

export default AnimatedSection;
