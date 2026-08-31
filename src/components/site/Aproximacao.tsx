import { Reveal } from "./Reveal";

export function Aproximacao() {
  return (
    <section
      id="abordagem"
      className="relative section-anchor bg-carbon py-20 md:py-24"
    >
      <div className="relative z-[2] mx-auto max-w-[92rem] px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-24">
          <Reveal>
            <p className="eyebrow text-ignition">Abordagem</p>
            <h2 className="font-display mt-7 text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] font-bold tracking-[-0.015em] uppercase">
              Tecnologia
              <span className="block text-ignition">sem complicação.</span>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <p className="max-w-2xl text-[1rem] leading-[1.9] text-foreground/85">
                Explico o que encontrei, o que precisa de ser feito e porquê — sem
                jargão desnecessário. Não precisa perceber de informática para
                perceber o que está a pagar.
              </p>

              <div className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
                <div>
                  <p className="font-semibold text-foreground">Atendimento paciente</p>
                  <p className="mt-2 text-[0.86rem] leading-[1.75] text-muted-foreground">
                    Sem pressa e sem o deixar perdido.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Linguagem clara</p>
                  <p className="mt-2 text-[0.86rem] leading-[1.75] text-muted-foreground">
                    Termos técnicos só quando realmente ajudam.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Contacto direto</p>
                  <p className="mt-2 text-[0.86rem] leading-[1.75] text-muted-foreground">
                    Fale diretamente com quem está a tratar do problema.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
