import React, { useEffect, useRef } from "react";
import "../styles/mouseglow.css";

const MouseGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      glowRef.current.style.left = `${clientX}px`;
      glowRef.current.style.top = `${clientY}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="mouse-glow" ref={glowRef}></div>;
};

export default MouseGlow;
