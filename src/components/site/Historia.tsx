import { Reveal, useParallax } from "./Reveal";
import rede from "@/assets/rede.jpg";

const marcos = [
  ["Início", "Um computador de família desmontado à socapa — e montado outra vez antes de alguém dar conta."],
  ["Prática", "Anos a arranjar máquinas de vizinhos, amigos e colegas. Aprendeu-se a errar em casa e a acertar em casa dos outros."],
  ["Ofício", "Suporte a utilizadores, manutenção, sistemas e redes. Todos os dias, com gente real do outro lado."],
  ["Hoje", "Assistência a particulares e pequenos negócios em Braga, com a mesma curiosidade do primeiro dia."],
];

export function Historia() {
  const imgRef = useParallax<HTMLImageElement>(50);

  return (
    <section
      id="historia"
      className="carbon-weave depth-ignite relative bg-obsidian py-28 md:py-40"
    >
      <div className="section-seam" aria-hidden />
      <div className="relative z-[2] mx-auto grid max-w-[92rem] items-start gap-20 px-6 md:px-12 lg:grid-cols-12 lg:gap-24">
        <Reveal className="lg:col-span-6">
          <div className="img-breathe overflow-hidden border border-border shadow-feature">
            <img
              ref={imgRef}
              src={rede}
              alt="Instalação de rede profissional — cabos e switch de datacenter"
              width={1600}
              height={1008}
              loading="lazy"
              className="h-[30rem] w-full object-cover md:h-[38rem]"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow text-ignition">História</p>
            <h2 className="font-display mt-8 text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[1.02] font-bold tracking-[-0.015em] uppercase">
              Começou por
              <span className="block text-ignition">curiosidade.</span>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-10 space-y-7 text-[0.95rem] leading-[2] text-foreground/75">
              <p>
                Antes de existir uma profissão, existia uma máquina em cima da mesa e
                a vontade de perceber porque é que aquilo tinha deixado de funcionar.
                Primeiro os computadores de casa. Depois os dos vizinhos, os dos
                amigos, os do trabalho de alguém que precisava daquilo pronto na
                manhã seguinte.
              </p>
              <p>
                Nada disto se aprendeu de uma vez. Aprendeu-se aos poucos, a abrir,
                a testar, a estragar e a corrigir — e sobretudo a ouvir quem estava
                do outro lado a explicar o problema com as palavras que tinha. Com
                os anos vieram os sistemas, as redes, os servidores pequenos, o
                suporte a utilizadores que não têm de saber nada disto para fazerem
                o seu trabalho.
              </p>
              <p>
                É por isso que aqui o equipamento nunca é o ponto de partida. O
                ponto de partida é sempre alguém com trabalho à espera: uma empresa
                parada, um orçamento por entregar, fotografias de dez anos dentro de
                um disco que deixou de arrancar. A tecnologia é só o meio para que
                essa vida continue.
              </p>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <dl className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2">
              {marcos.map(([k, v]) => (
                <div key={k} className="bg-obsidian p-7">
                  <dt className="eyebrow text-ignition">{k}</dt>
                  <dd className="mt-4 text-[0.86rem] leading-[1.85] text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}