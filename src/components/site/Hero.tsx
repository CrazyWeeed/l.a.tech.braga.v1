import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import slide1 from "@/assets/hero-slide-1.jpg";
import slide2 from "@/assets/hero-slide-2.jpg";
import slide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  {
    src: slide1,
    alt: "L.A. Tech Braga — Logo e identidade",
  },
  {
    src: slide2,
    alt: "Técnico mexendo em desktop — reparação e diagnóstico",
  },
  {
    src: slide3,
    alt: "Suporte humanizado — técnico com cliente idoso",
  },
];

const DURATION = 6200;

export function Hero() {
  const [index, setIndex] = useState(0);
  const layerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), DURATION);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      if (layerRef.current) {
        layerRef.current.style.transform = `translate3d(0, ${(y * 0.14).toFixed(2)}px, 0)`;
      }
      if (contentRef.current) {
        contentRef.current.style.transform = `translate3d(0, ${(y * -0.05).toFixed(2)}px, 0)`;
        contentRef.current.style.opacity = String(Math.max(0, 1 - y / 680));
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-[640px] w-full scroll-mt-28 overflow-hidden bg-obsidian pt-20 lg:h-[94svh] lg:max-h-[980px] lg:pt-0"
    >
      <div
        ref={layerRef}
        className="absolute inset-x-0 -top-[8%] -bottom-[8%] will-change-transform"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            aria-hidden={i !== index}
            className={cn(
              "absolute inset-0 transition-opacity duration-[1800ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
              i === index ? "opacity-100" : "opacity-0",
            )}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              width={1600}
              height={1008}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "low"}
              className={cn(
                "h-full w-full object-cover transition-transform ease-linear",
                i === index ? "scale-[1.08] duration-[8500ms]" : "scale-100 duration-0",
              )}
            />
          </div>
        ))}
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.09 0.002 264 / 0.88) 0%, oklch(0.09 0.002 264 / 0.55) 34%, oklch(0.09 0.002 264 / 0.66) 66%, oklch(0.09 0.002 264 / 0.95) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(110% 80% at 82% 14%, oklch(0.685 0.195 41 / 0.18) 0%, transparent 60%)",
        }}
      />
      <div className="machined absolute inset-0" />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex h-full max-w-[92rem] flex-col justify-end px-6 pt-36 pb-14 will-change-transform md:px-12 md:pb-16 lg:pt-32"
      >
        <div className="max-w-3xl">
          <p
            className="eyebrow mb-6 animate-[fade-in_1.3s_cubic-bezier(0.22,1,0.36,1)_both] text-ignition"
            style={{ animationDelay: "180ms" }}
          >
            Braga · Portugal
          </p>
          <h1
            className="font-display animate-[fade-in_1.4s_cubic-bezier(0.22,1,0.36,1)_both] text-[clamp(2.05rem,4.6vw,4.1rem)] leading-[0.98] font-bold tracking-[-0.015em] uppercase"
            style={{ animationDelay: "320ms" }}
          >
            Quem percebe do assunto
            <span className="block text-ignition">resolve mais depressa</span>
            <span className="block text-foreground/85">e explica em português.</span>
          </h1>
          <p
            className="mt-8 max-w-xl animate-[fade-in_1.4s_cubic-bezier(0.22,1,0.36,1)_both] text-[1rem] leading-[1.85] text-foreground/70"
            style={{ animationDelay: "540ms" }}
          >
            Suporte técnico remoto e ao domicílio, manutenção, redes, sistemas e
            Microsoft 365. Para pessoas e pequenos negócios que precisam de voltar
            ao trabalho — hoje, não para a semana.
          </p>
          <div
            className="mt-10 flex animate-[fade-in_1.4s_cubic-bezier(0.22,1,0.36,1)_both] flex-wrap items-center gap-5"
            style={{ animationDelay: "720ms" }}
          >
            <a
              href="#contacto"
              className="btn-ignite px-9 py-4 text-[0.72rem] tracking-[0.24em] uppercase"
            >
              Descrever o problema
            </a>
            <a
              href="tel:+351934587555"
              className="btn-wash border-2 border-foreground/30 px-9 py-4 text-[0.72rem] tracking-[0.24em] uppercase text-foreground hover:border-foreground hover:text-obsidian"
            >
              <span className="relative z-10">Ligar Agora</span>
              <span className="btn-wash-fill bg-foreground" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex items-end justify-between gap-8 border-t border-border pt-6">
          <div className="flex items-center gap-3">
            {slides.map((s, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ver imagem ${i + 1}`}
                onClick={() => setIndex(i)}
                className="group py-3"
              >
                <span
                  className={cn(
                    "block h-[2px] transition-all duration-500",
                    i === index
                      ? "w-14 bg-ignition"
                      : "w-7 bg-foreground/25 group-hover:bg-foreground/70",
                  )}
                />
              </button>
            ))}
          </div>
          <p
            key={index}
            className="hidden max-w-md animate-[fade-in_1.2s_cubic-bezier(0.22,1,0.36,1)_both] text-right text-[0.95rem] leading-[1.7] font-medium text-foreground/60 sm:block"
          >
            {slides[index]?.alt}
          </p>
        </div>
      </div>
    </section>
  );
}