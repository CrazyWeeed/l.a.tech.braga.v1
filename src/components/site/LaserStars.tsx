import { useEffect, useRef, useState } from "react";

/**
 * LaserStars
 * ----------
 * 5 estrelas que se "desenham" em sequência, como um traço de laser
 * laranja a formar cada contorno e depois a acender o preenchimento.
 * Usada junto ao selo "5 estrelas no Google" em ProvaSocial.tsx.
 */

const STAR_PATH =
  "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z";

function useRevealOnScroll(ref: React.RefObject<HTMLDivElement | null>) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return revealed;
}

export function LaserStars() {
  const containerRef = useRef<HTMLDivElement>(null);
  const revealed = useRevealOnScroll(containerRef);

  return (
    <div ref={containerRef} className="flex gap-2.5" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => {
        const traceDelay = i * 0.18;
        const fillDelay = traceDelay + 0.45;
        return (
          <svg
            key={i}
            viewBox="0 0 24 24"
            className="h-9 w-9 sm:h-10 sm:w-10"
            fill="none"
            aria-hidden="true"
          >
            <path
              d={STAR_PATH}
              stroke="var(--color-ignition)"
              strokeWidth="1.4"
              strokeLinejoin="round"
              strokeLinecap="round"
              pathLength={1}
              style={{
                strokeDasharray: 1,
                strokeDashoffset: revealed ? 0 : 1,
                fill: revealed ? "var(--color-ignition)" : "transparent",
                filter: revealed
                  ? "drop-shadow(0 0 7px oklch(0.685 0.195 41 / 0.75))"
                  : "none",
                transition: `stroke-dashoffset 0.55s ease-out ${traceDelay}s, fill 0.35s ease-out ${fillDelay}s, filter 0.35s ease-out ${fillDelay}s`,
              }}
            />
          </svg>
        );
      })}
    </div>
  );
}
