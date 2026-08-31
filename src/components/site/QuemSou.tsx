import { Reveal } from "./Reveal";

export function QuemSou() {
  return (
    <section
      id="quem-sou"
      className="relative section-anchor bg-carbon py-20 md:py-24"
    >
      <div className="relative z-[2] mx-auto max-w-[92rem] px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-20">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-ignition">O técnico</p>
            <div className="mt-7 flex items-end gap-5 border-b border-border pb-8">
              <span className="font-display text-[5rem] font-bold leading-[0.82] tracking-[-0.04em] text-ignition md:text-[6.5rem]">
                20+
              </span>
              <span className="max-w-[8rem] pb-1 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                anos de experiência
              </span>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] font-bold tracking-[-0.015em] uppercase">
              Experiência para
              <span className="block text-ignition">resolver o que importa.</span>
            </h2>
            <p className="mt-7 max-w-2xl text-[1rem] leading-[1.9] text-foreground/85">
              Há mais de 20 anos que trabalho com informática. A experiência veio de
              abrir máquinas, testar, resolver problemas e aprender a lidar com o que
              realmente importa: fazer a tecnologia voltar a funcionar.
            </p>
            <p className="mt-5 max-w-2xl text-[0.92rem] leading-[1.85] text-muted-foreground">
              Atendo em Braga e concelhos vizinhos. Quando o problema permite, o
              suporte pode ser feito remotamente em todo o país.
            </p>
          </Reveal>
        </div>

        <Reveal delay={220}>
          <div className="mt-12 grid border-y border-border sm:grid-cols-3">
            <div className="border-b border-border px-6 py-6 sm:border-b-0 sm:border-r sm:px-8">
              <p className="font-semibold text-foreground">Competência técnica</p>
              <p className="mt-2 text-[0.84rem] leading-[1.7] text-muted-foreground">
                Diagnóstico antes de trocar peças ou tomar decisões.
              </p>
            </div>
            <div className="border-b border-border px-6 py-6 sm:border-b-0 sm:border-r sm:px-8">
              <p className="font-semibold text-foreground">Atendimento local</p>
              <p className="mt-2 text-[0.84rem] leading-[1.7] text-muted-foreground">
                Casa ou escritório em Braga e concelhos vizinhos.
              </p>
            </div>
            <div className="px-6 py-6 sm:px-8">
              <p className="font-semibold text-foreground">Contacto direto</p>
              <p className="mt-2 text-[0.84rem] leading-[1.7] text-muted-foreground">
                Fale diretamente com quem está a tratar do problema.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
