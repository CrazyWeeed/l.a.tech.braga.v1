import { Reveal, useParallax } from "./Reveal";
import bench from "@/assets/bench.jpg";

const steps = [
  {
    n: "01",
    title: "Conta o que se passa",
    body: "Uma chamada, uma mensagem ou o formulário aqui do site. Interessa saber o que aconteceu, quando começou e o que já tentou — isso poupa tempo aos dois.",
  },
  {
    n: "02",
    title: "Diagnóstico e estimativa",
    body: "Análise remota ou visita marcada. Sabe o que está mal, o que se faz para corrigir e quanto custa, antes de dar luz verde.",
  },
  {
    n: "03",
    title: "Resolvido e explicado",
    body: "O trabalho é feito, testado à sua frente e explicado em linguagem normal. Fica com um registo do que foi feito e com o contacto aberto para dúvidas.",
  },
];

export function Processo() {
  const imgRef = useParallax<HTMLImageElement>(56);

  return (
    <section id="processo" className="depth-dark relative scroll-mt-28 bg-carbon py-28 md:py-40">
      <div className="section-seam" aria-hidden />
      <div className="relative z-[2] mx-auto grid max-w-[92rem] gap-20 px-6 md:px-12 lg:grid-cols-12 lg:gap-24">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow text-ignition">Processo</p>
            <h2 className="font-display mt-8 text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[1.02] font-bold tracking-[-0.015em] uppercase">
              Simples de propósito.
            </h2>
            <p className="mt-9 max-w-sm text-[0.9rem] leading-[1.95] text-muted-foreground">
              Ninguém liga a um técnico por gosto. Liga porque tem trabalho parado.
              O processo existe para tirar isso do caminho depressa.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="img-breathe mt-14 hidden overflow-hidden border border-border shadow-lift lg:block">
              <img
                ref={imgRef}
                src={bench}
                alt="Ferramentas de precisão numa bancada de reparação"
                width={1600}
                height={1008}
                loading="lazy"
                className="h-[26rem] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <ol className="space-y-px border border-border bg-border">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={140 + i * 150} as="li">
                <div className="card-pad card-quiet group bg-carbon hover:bg-steel">
                  <div className="flex items-baseline gap-6">
                    <span className="numeral text-[3.5rem] transition-colors duration-700 group-hover:text-ignition/20">
                      {s.n}
                    </span>
                    <h3 className="font-display text-[1.5rem] leading-tight font-bold tracking-[0.02em] uppercase">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-6 text-[0.9rem] leading-[1.95] text-muted-foreground">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}