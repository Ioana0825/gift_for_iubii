import { useMemo } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import "./StarField.css";

type Star = {
  id: number;
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
};

type Drifter = {
  id: number;
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
};

function seedStars(count: number): Star[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 1.6 + 0.6,
    delay: Math.random() * 6,
    duration: Math.random() * 3 + 2.5,
  }));
}

function seedDrifters(count: number): Drifter[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 3 + 2,
    delay: Math.random() * 10,
    duration: Math.random() * 14 + 18,
  }));
}

/**
 * A fixed, decorative night-sky backdrop: tiny twinkling stars plus a
 * few soft glowing particles that drift slowly. Purely visual — it
 * never intercepts clicks, and calms down under reduced-motion.
 */
export function StarField() {
  const reducedMotion = usePrefersReducedMotion();
  const stars = useMemo(() => seedStars(90), []);
  const drifters = useMemo(() => seedDrifters(10), []);

  return (
    <div className="starfield" aria-hidden="true">
      <div className="starfield__nebula starfield__nebula--one" />
      <div className="starfield__nebula starfield__nebula--two" />
      {stars.map((star) => (
        <span
          key={star.id}
          className="starfield__star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: star.size,
            height: star.size,
            animationDelay: reducedMotion ? "0s" : `${star.delay}s`,
            animationDuration: reducedMotion ? "0s" : `${star.duration}s`,
            opacity: reducedMotion ? 0.5 : undefined,
          }}
        />
      ))}
      {!reducedMotion &&
        drifters.map((drifter) => (
          <span
            key={drifter.id}
            className="starfield__drifter"
            style={{
              top: `${drifter.top}%`,
              left: `${drifter.left}%`,
              width: drifter.size,
              height: drifter.size,
              animationDelay: `${drifter.delay}s`,
              animationDuration: `${drifter.duration}s`,
            }}
          />
        ))}
    </div>
  );
}
