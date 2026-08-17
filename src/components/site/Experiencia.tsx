import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

export function Experiencia() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animateNumbers, setAnimateNumbers] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => setAnimateNumbers(true), 300);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section
      id="experiencia"
      className="relative scroll-mt-28 bg-obsidian py-24 md:py-32 overflow-hidden"
    >
      <div className="section-seam" aria-hidden />
      <div
        ref={containerRef}
        className="relative z-[2] mx-auto max-w-[92rem] px-6 md:px-12"
      >
        <div className="grid gap-12 md:gap-16 lg:grid-cols-3 lg:items-center">
          {/* 20+ ANOS — CENTER */}
          <Reveal className="lg:col-span-1 lg:col-start-2">
            <div className="text-center">
              <p className="eyebrow text-ignition/60 tracking-widest">Desde</p>
              <div
                className={`mt-6 transition-all duration-1000 ease-out ${
                  animateNumbers
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-90"
                }`}
              >
                <span className="font-display text-[5.5rem] md:text-[7rem] leading-[0.9] font-bold text-ignition">
                  20+
                </span>
                <p className="mt-3 font-display text-[1.3rem] md:text-[1.6rem] leading-tight font-bold tracking-[0.02em] uppercase text-foreground">
                  Anos
                </p>
              </div>
              <p className="mt-6 text-[0.9rem] leading-[1.8] text-foreground/60 max-w-xs mx-auto">
                A confiar em Braga
              </p>
            </div>
          </Reveal>

          {/* LEFT INFO */}
          <Reveal delay={160} className="lg:col-span-1 lg:col-start-1">
            <div className="space-y-8">
              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.15em] text-ignition/70 font-bold">
                  Localidade
                </p>
                <p className="mt-3 font-display text-[1.4rem] leading-tight font-bold text-foreground">
                  Braga
                </p>
              </div>
              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.15em] text-ignition/70 font-bold">
                  Atendimento
                </p>
                <p className="mt-3 font-display text-[1.4rem] leading-tight font-bold text-foreground">
                  Local
                </p>
              </div>
            </div>
          </Reveal>

          {/* RIGHT INFO */}
          <Reveal delay={320} className="lg:col-span-1 lg:col-start-3">
            <div className="space-y-8">
              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.15em] text-ignition/70 font-bold">
                  Modalidade
                </p>
                <p className="mt-3 font-display text-[1.4rem] leading-tight font-bold text-foreground">
                  Remoto e Presencial
                </p>
              </div>
              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.15em] text-ignition/70 font-bold">
                  Cobertura
                </p>
                <p className="mt-3 font-display text-[1.4rem] leading-tight font-bold text-foreground">
                  Portugal
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
