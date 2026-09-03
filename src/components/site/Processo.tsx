import { Reveal, useParallax } from "./Reveal";
import bench from "@/assets/bench.webp";

const steps = [
  {
    n: "01",
    title: "Conta o que se passa",
    body: "Uma chamada, mensagem ou pedido pelo site. Interessa saber o que aconteceu e o que já tentou. Quando dá para resolver remotamente, não há deslocação; quando é preciso mexer no equipamento, marca-se a visita.",
  },
  {
    n: "02",
    title: "Diagnóstico e orçamento",
    body: "Primeiro percebe-se o problema, depois explica-se o que precisa de ser feito. O valor é apresentado antes da intervenção e nada avança sem a sua aprovação.",
  },
  {
    n: "03",
    title: "Resolvido e explicado",
    body: "O trabalho é feito, testado e explicado em linguagem normal. Os seus dados são tratados com cuidado e fica registado o que foi feito para não começar do zero na próxima vez.",
  },
];

export function Processo() {
  const imgRef = useParallax<HTMLImageElement>(36);

  return (
    <section
      id="como-funciona"
      className="depth-dark relative section-anchor bg-carbon py-20 md:py-24"
    >
      <div className="section-seam" aria-hidden />
      <div className="relative z-[2] mx-auto grid max-w-[92rem] gap-12 px-6 md:px-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="eyebrow text-ignition">Como funciona</p>
            <h2 className="font-display mt-7 text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[1.02] font-bold tracking-[-0.015em] uppercase">
              Simples de
              <span className="block text-ignition">propósito.</span>
            </h2>
            <p className="mt-7 max-w-sm text-[0.9rem] leading-[1.9] text-muted-foreground">
              Ninguém chama um técnico por gosto. O processo existe para tirar o
              problema do caminho com clareza, sem surpresas no fim.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <div className="img-breathe mt-10 hidden overflow-hidden border border-border shadow-lift lg:block">
              <img
                ref={imgRef}
                src={bench}
                alt="Ferramentas de precisão numa bancada de reparação"
                width={1600}
                height={1008}
                loading="lazy"
                className="h-[18rem] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <ol className="border-y border-border">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={100 + i * 100} as="li">
                <div className="group relative border-b border-border py-7 last:border-b-0 md:py-8">
                  <div className="flex items-start gap-5 md:gap-8">
                    <span className="numeral shrink-0 pt-1 text-[2.5rem] leading-none md:text-[3rem]">
                      {s.n}
                    </span>
                    <div>
                      <h3 className="font-display text-[1.35rem] font-bold leading-tight tracking-[0.02em] uppercase transition-colors duration-500 group-hover:text-ignition md:text-[1.5rem]">
                        {s.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-[0.9rem] leading-[1.85] text-muted-foreground">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={420}>
            <div className="mt-8 grid gap-5 border-t border-border pt-7 sm:grid-cols-3">
              <div>
                <p className="eyebrow text-ignition">Clareza</p>
                <p className="mt-2 text-[0.82rem] leading-[1.7] text-muted-foreground">
                  Sabe o que está a ser feito.
                </p>
              </div>
              <div>
                <p className="eyebrow text-ignition">Controlo</p>
                <p className="mt-2 text-[0.82rem] leading-[1.7] text-muted-foreground">
                  Aprova antes de avançar.
                </p>
              </div>
              <div>
                <p className="eyebrow text-ignition">Continuidade</p>
                <p className="mt-2 text-[0.82rem] leading-[1.7] text-muted-foreground">
                  O histórico fica registado.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
