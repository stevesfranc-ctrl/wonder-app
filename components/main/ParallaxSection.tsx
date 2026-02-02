"use client"; // ⚠️ Obligatoire pour utiliser useState/useEffect

import { useEffect, useState, ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number; // vitesse du mouvement au scroll
  zIndex?: number; // superposition
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.3,
  zIndex = 0,
}) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div
      className="absolute top-0 left-0 w-full h-screen flex justify-center items-center"
      style={{
        transform: `translateY(${offset}px)`,
        zIndex,
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;
