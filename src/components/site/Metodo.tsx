import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const items = [
  {
    n: "01",
    title: "Primeiro perceber, depois mexer",
    body: "Nenhuma peça é trocada por tentativa. Ouve-se o que aconteu, testa-se o que se suspeita e só depois se avança. Metade das avarias resolve-se com a pergunta certa.",
  },
  {
    n: "02",
    title: "Explicado sem termos técnicos",
    body: "Vai perceber o que estava mal e porquê. Sem jargão, sem mistério — quem entende o problema toma melhores decisões sobre o próprio equipamento.",
  },
  {
    n: "03",
    title: "Orçamento antes do trabalho",
    body: "Sabe o valor antes de qualquer intervenção. Se pelo caminho aparecer algo, o telefone toca primeiro. Nunca há surpresas no fim.",
  },
  {
    n: "04",
    title: "Os seus dados ficam seus",
    body: "Cópia de segurança antes de formatar, sempre. Ficheiros, fotografias e emails tratados com o cuidado de quem já viu o que custa perdê-los.",
  },
  {
    n: "05",
    title: "Remoto quando dá, presencial quando é preciso",
    body: "Muita coisa resolve-se em vinte minutos por acesso remoto. O que exige mãos, hardware ou cabos resolve-se em casa ou no escritório, em Braga e arredores.",
  },
  {
    n: "06",
    title: "Fica registado",
    body: "Cada intervenção deixa nota do que foi feito, o que foi instalado e o que deve ser vigiado. Da próxima vez não se começa do zero.",
  },
];

export function Metodo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let count = 0;
          const interval = setInterval(() => {
            count++;
            setVisibleItems(Math.min(count, items.length));
            if (count >= items.length) clearInterval(interval);
          }, 150);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="metodo" className="depth-dark relative scroll-mt-28 bg-carbon py-28 md:py-40">
      <div className="section-seam" aria-hidden />
      <div className="relative z-[2] mx-auto max-w-[92rem] px-6 md:px-12">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end mb-20 md:mb-28">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-ignition">Método</p>
            <h2 className="font-display mt-8 text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[1.02] font-bold tracking-[-0.015em] uppercase">
              A diferença não está
              <span className="block text-ignition">na ferramenta.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="max-w-xs text-[0.9rem] leading-[1.9] text-muted-foreground">
              Está no hábito de tratar cada máquina como se fosse a única que aquela
              pessoa tem — porque muitas vezes é mesmo.
            </p>
          </Reveal>
        </div>

        <div ref={containerRef} className="relative">
          {/* Linha vertical conectora */}
          <div className="absolute left-[1.35rem] md:left-[2.8rem] top-0 bottom-0 w-px bg-gradient-to-b from-ignition/0 via-ignition/40 to-ignition/0" />

          {/* Items em cascata vertical */}
          <div className="space-y-12 md:space-y-16">
            {items.map((item, i) => {
              const isVisible = i < visibleItems;
              const isActive = i === visibleItems - 1;

              return (
                <div
                  key={item.n}
                  className={`flex gap-6 md:gap-12 transition-all duration-500 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${i * 50}ms` : "0ms",
                  }}
                >
                  {/* Número com indicador */}
                  <div className="flex-shrink-0 pt-1">
                    <div
                      className={`relative transition-all duration-500 ${
                        isActive ? "scale-110" : "scale-100"
                      }`}
                    >
                      {/* Círculo de fundo */}
                      <div
                        className={`absolute -inset-1.5 rounded-full transition-all duration-500 ${
                          isActive
                            ? "bg-ignition/15 ring-1 ring-ignition"
                            : "bg-transparent"
                        }`}
                      />
                      <span className="numeral relative block text-[1.75rem] md:text-[2.2rem] leading-none font-bold text-foreground w-12 h-12 flex items-center justify-center">
                        {item.n}
                      </span>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="flex-1 pt-1">
                    <h3 className="font-display text-[1.1rem] md:text-[1.3rem] leading-tight font-bold tracking-[0.01em] uppercase">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[0.9rem] md:text-[0.95rem] leading-[1.8] text-muted-foreground">
                      {item.body}
                    </p>

                    {/* Linha de destaque */}
                    <div
                      className={`mt-4 h-px transition-all duration-500 ${
                        isActive ? "w-12 bg-ignition" : "w-6 bg-border"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
