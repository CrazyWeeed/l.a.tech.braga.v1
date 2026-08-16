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

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, []);

  const visible = [0, 1, 2].map((offset) => testimonials[(index + offset) % testimonials.length]);

  return (
    <section className="carbon-weave depth-dark relative scroll-mt-28 bg-obsidian py-24 md:py-32">
      <div className="section-seam" aria-hidden />
      <div className="relative z-[2] mx-auto max-w-[92rem] px-6 md:px-12">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow text-ignition">Quem já precisou</p>
            <h2 className="font-display mt-6 text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] font-bold tracking-[-0.015em] uppercase">
              Confiam no trabalho.
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-16 overflow-hidden md:mt-20">
          <div className="flex gap-6 transition-transform duration-700 ease-out">
            {visible.map((t, i) => (
              <article
                key={`${t.name}-${index}-${i}`}
                className="card-pad card-quiet min-w-full border border-border bg-steel/50 backdrop-blur-[2px] sm:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(33.333%-1rem)]"
              >
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-ignition font-display text-lg">★</span>
                  ))}
                </div>
                <p className="text-[0.95rem] leading-[1.85] text-foreground/85">"{t.text}"</p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-display text-[0.9rem] font-bold uppercase tracking-[0.05em] text-foreground">{t.name}</p>
                  <p className="mt-1 text-[0.8rem] uppercase tracking-[0.08em] text-muted-foreground">{t.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2" aria-label="Navegação das avaliações">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ver avaliação ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 transition-all duration-300 ${i === index ? "w-10 bg-ignition" : "w-5 bg-foreground/25 hover:bg-foreground/50"}`}
            />
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-16 border-t border-border pt-12 text-center md:mt-20">
            <p className="text-[0.95rem] leading-[1.8] text-foreground/70">Veja as avaliações reais no Google</p>
            <a
              href="https://www.google.com/maps/search/L.A.+Tech+Braga"
              target="_blank"
              rel="noreferrer"
              className="link-quiet mt-4 inline-block text-ignition"
            >
              Google Maps →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
