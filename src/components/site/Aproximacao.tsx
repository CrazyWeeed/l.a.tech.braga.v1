import { Reveal } from "./Reveal";
import aproximacaoImg from "@/assets/aproximacao.jpg";

export function Aproximacao() {
  return (
    <section className="relative bg-carbon py-24 md:py-32">
      <div className="relative z-[2] mx-auto max-w-[92rem] px-6 md:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 lg:items-center">
          {/* Conteúdo */}
          <Reveal>
            <div>
              <p className="eyebrow text-ignition">Abordagem</p>
              <h2 className="font-display mt-8 text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] font-bold tracking-[-0.015em] uppercase">
                Técnico, mas
                <span className="block text-ignition">acessível a todos.</span>
              </h2>

              <p className="mt-8 text-[1rem] leading-[1.9] text-foreground/85">
                Não sou um caixa automático que vomita jargão técnico. Explico o que descobri, o que fiz, e porquê — em português simples.
              </p>

              <p className="mt-6 text-[0.95rem] leading-[1.85] text-muted-foreground">
                Para o teu avó, para a tua avó, para o cliente sem conhecimentos de TI — a mensagem é clara: "Isto está resolvido. Assim é que funciona. Qualquer dúvida, liga-me."
              </p>

              <p className="mt-6 text-[0.95rem] leading-[1.85] text-muted-foreground">
                Confiança não vem de parecer inteligente. Vem de explicar de forma que se perceba.
              </p>

              <div className="mt-12 space-y-6 border-t border-border pt-8">
                <div className="flex gap-4">
                  <span className="text-ignition font-display text-2xl leading-none">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">Atendimento paciente</p>
                    <p className="mt-1 text-[0.9rem] text-muted-foreground">Sem pressas, sem impaciência.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-ignition font-display text-2xl leading-none">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">Linguagem clara</p>
                    <p className="mt-1 text-[0.9rem] text-muted-foreground">Nada de siglas desnecessárias.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-ignition font-display text-2xl leading-none">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">Suporte contínuo</p>
                    <p className="mt-1 text-[0.9rem] text-muted-foreground">Dúvidas depois? Estou aqui.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Foto */}
          <Reveal delay={160}>
            <div className="img-breathe relative aspect-[4/5] overflow-hidden shadow-feature">
              <img
                src={aproximacaoImg}
                alt="Suporte técnico humanizado — explicação clara ao cliente"
                width={800}
                height={1000}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
