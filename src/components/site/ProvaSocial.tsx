import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    name: "Maria Tereza Farias Ferreira",
    role: "Braga",
    text: "Muito bom atendimento do Luís Albuquerque. Com a sua calma no tratamento dos dados e a sua competência informática resolveu o meu problema rapidamente.",
    rating: 5,
  },
  {
    name: "Larissa Pilz",
    role: "Cliente remoto",
    text: "Luiz é um excelente profissional. Me atendeu de forma rápida. Identificou o problema do meu laptop e pesquisou a peça para deixar funcionando perfeitamente.",
    rating: 5,
  },
  {
    name: "Cátia Ferreira",
    role: "Braga",
    text: "Ótimo trabalho. Rápido e eficiente. O meu computador finalmente voltou ao seu funcionamento normal após passar pelas mãos competentes do Luiz.",
    rating: 5,
  },
  {
    name: "Yan Torres",
    role: "Braga",
    text: "Honesto e trabalha bem. Arranjou a troca da bateria do computador e deu vida a impressora que estava parada em casa há meses.",
    rating: 5,
  },
  {
    name: "Paulo Henrique Maurinho",
    role: "Braga",
    text: "Muito bom! O meu PC estava maluco e agora está como novo. Recomendo a todos.",
    rating: 5,
  },
];

export function ProvaSocial() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, [paused]);

  const current = testimonials[index]!;
  const previous = () => setIndex((value) => (value - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((value) => (value + 1) % testimonials.length);

  return (
    <section
      id="avaliacoes"
      className="carbon-weave depth-dark relative section-anchor bg-obsidian py-20 md:py-24"
    >
      <div className="section-seam" aria-hidden />
      <div className="relative z-[2] mx-auto max-w-[92rem] px-6 md:px-12">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow text-ignition">Avaliações</p>
            <h2 className="font-display mt-6 text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] font-bold tracking-[-0.015em] uppercase">
              Confiam no trabalho.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div
            className="mt-12 md:mt-14"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            <article
              key={current.name}
              aria-live="polite"
              className="card-pad mx-auto max-w-3xl border border-border bg-steel/50 shadow-soft"
            >
              <div className="mb-6 flex gap-1" aria-label={`${current.rating} de 5 estrelas`}>
                {Array.from({ length: current.rating }).map((_, j) => (
                  <span key={j} aria-hidden className="font-display text-lg text-ignition">
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="text-[0.98rem] leading-[1.9] text-foreground/85">
                “{current.text}”
              </blockquote>
              <div className="mt-7 border-t border-border pt-5">
                <p className="font-display text-[0.95rem] font-bold uppercase tracking-[0.05em] text-foreground">
                  {current.name}
                </p>
                <p className="mt-1 text-[0.78rem] uppercase tracking-[0.08em] text-muted-foreground">
                  {current.role}
                </p>
              </div>
            </article>

            <div className="mt-7 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={previous}
                aria-label="Avaliação anterior"
                className="flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:border-ignition hover:text-ignition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ignition"
              >
                ←
              </button>
              <div className="flex items-center gap-2" aria-label="Selecionar avaliação">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Ver avaliação ${i + 1}`}
                    aria-current={i === index ? "true" : undefined}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ignition ${
                      i === index ? "w-10 bg-ignition" : "w-5 bg-foreground/25 hover:bg-foreground/50"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={next}
                aria-label="Próxima avaliação"
                className="flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:border-ignition hover:text-ignition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ignition"
              >
                →
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-10 border-t border-border pt-8 text-center">
            <p className="text-[0.9rem] leading-[1.8] text-foreground/70">
              Veja as avaliações reais diretamente no Google.
            </p>
            <a
              href="https://www.google.com/maps/search/L.A.+Tech+Braga"
              target="_blank"
              rel="noreferrer"
              className="link-quiet mt-3 inline-block text-ignition"
            >
              Ver no Google Maps →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
