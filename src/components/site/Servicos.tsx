import { Reveal } from "./Reveal";
import servico1 from "@/assets/servico-1.jpg";
import servico2 from "@/assets/servico-2.jpg";
import servico3 from "@/assets/bench.jpg";

const services = [
  {
    n: "I",
    title: "Suporte Técnico",
    sub: "Remoto · Presencial · Braga",
    image: servico1,
    alt: "Manutenção de portátil — abertura e diagnóstico de componentes internos",
    body: "O computador não arranca, arrasta-se ou dá erro a meio do trabalho. Diagnóstico feito à distância quando é possível e no local quando é preciso ter as mãos na máquina.",
    points: [
      "Acesso remoto no próprio dia",
      "Deslocação a casa ou escritório",
      "Diagnóstico com relatório do que falhou",
    ],
  },
  {
    n: "II",
    title: "Redes e Wi-Fi",
    sub: "Router · Switch · Cobertura",
    image: servico2,
    alt: "Instalação de cabos ethernet em switch de rede profissional",
    body: "Internet que cai, zonas da casa sem sinal, cabos improvisados. Rede desenhada para o espaço real, com equipamento adequado e configuração que se aguenta sozinha.",
    points: [
      "Configuração de router e repetidores",
      "Cablagem e pontos de rede",
      "Segurança e separação de rede convidados",
    ],
  },
  {
    n: "III",
    title: "Apoio a Empresas",
    sub: "Microsoft 365 · Postos de trabalho",
    image: servico3,
    alt: "Manutenção e reparação de servidor — montagem de componentes de hardware",
    body: "Para negócios pequenos que não têm departamento de informática — e não precisam de ter. Contas, emails, partilha de ficheiros, impressoras e cópias de segurança a funcionar sem drama.",
    points: [
      "Microsoft 365 e email profissional",
      "Preparação de novos postos de trabalho",
      "Backups automáticos e recuperação",
    ],
  },
];

const outros = [
  "Manutenção e limpeza de computadores",
  "Instalação e configuração de sistemas",
  "Formatação com cópia de dados",
  "Remoção de vírus e otimização",
  "Upgrade de SSD e memória",
  "Configuração de impressoras e periféricos",
  "Recuperação de ficheiros e fotografias",
  "Aconselhamento antes de comprar equipamento",
];

export function Servicos() {
  return (
    <section
      id="servicos"
      className="carbon-weave depth-ignite relative scroll-mt-28 bg-obsidian py-28 md:py-40"
    >
      <div className="section-seam" aria-hidden />
      <div className="relative z-[2] mx-auto max-w-[92rem] px-6 md:px-12">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-ignition">Serviços</p>
            <h2 className="font-display mt-8 text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[1.02] font-bold tracking-[-0.015em] uppercase">
              Do computador de casa
              <span className="block text-ignition">à rede do escritório.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="max-w-xs text-[0.9rem] leading-[1.9] text-muted-foreground">
              Windows, macOS, portáteis, torres, redes e impressoras. Se está ligado
              à corrente e devia funcionar, provavelmente resolve-se.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-10 md:mt-28 lg:grid-cols-3 lg:gap-8">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={260 + i * 160}
              className={i === 1 ? "lg:mt-14" : i === 2 ? "lg:mt-7" : undefined}
            >
              <article className="card-pad card-quiet group flex h-full flex-col border border-border bg-steel/50 backdrop-blur-[2px] hover:border-ignition/40 hover:bg-steel">
                <div className="img-breathe relative aspect-[5/4] overflow-hidden shadow-soft">
                  <img
                    src={s.image}
                    alt={s.alt}
                    width={1600}
                    height={1008}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute top-0 left-0 bg-ignition px-3 py-1.5 font-display text-xs font-bold tracking-[0.2em] text-primary-foreground">
                    {s.n}
                  </span>
                </div>
                <h3 className="font-display mt-8 text-[1.65rem] leading-tight font-bold tracking-[0.01em] uppercase">
                  {s.title}
                </h3>
                <p className="eyebrow mt-3 text-ignition">{s.sub}</p>
                <p className="mt-6 text-[0.88rem] leading-[1.95] text-muted-foreground">{s.body}</p>
                <ul className="mt-9 space-y-4 border-t border-border pt-7">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 text-[0.83rem] leading-[1.6] text-foreground/80"
                    >
                      <span className="icon-slot text-ignition">—</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-20 border-t border-border pt-12">
            <p className="eyebrow text-muted-foreground">Também se resolve</p>
            <ul className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
              {outros.map((o) => (
                <li
                  key={o}
                  className="flex items-start gap-3 text-[0.88rem] leading-[1.7] text-foreground/75"
                >
                  <span className="mt-[0.7em] block h-[2px] w-4 shrink-0 bg-ignition" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}