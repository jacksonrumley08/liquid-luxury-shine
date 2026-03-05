import { useEffect, useRef } from "react";

const WaterParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = "water-particle";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${6 + Math.random() * 8}s`;
      particle.style.animationDelay = `${Math.random() * 4}s`;
      particle.style.width = `${3 + Math.random() * 6}px`;
      particle.style.height = particle.style.width;
      container.appendChild(particle);

      setTimeout(() => particle.remove(), 14000);
    };

    const interval = setInterval(createParticle, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    />
  );
};

export default WaterParticles;
