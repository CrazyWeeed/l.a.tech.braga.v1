import { Reveal } from "./Reveal";
import quemSouPhoto from "@/assets/quem-sou.jpg";

export function QuemSou() {
  return (
    <section id="quem-sou" className="relative scroll-mt-28 bg-carbon py-24 md:py-32">
      <div className="relative z-[2] mx-auto max-w-[92rem] px-6 md:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 lg:items-center">
          {/* Foto */}
          <Reveal>
            <div className="relative overflow-hidden">
              <img
                src={quemSouPhoto}
                alt="O técnico de informática — reparação de desktop"
                width={800}
                height={1000}
                loading="lazy"
                className="h-auto w-full object-contain"
              />
            </div>
          </Reveal>

          {/* Conteúdo */}
          <Reveal delay={160}>
            <div>
              <p className="eyebrow text-ignition">Quem sou eu</p>
              <h2 className="font-display mt-8 text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] font-bold tracking-[-0.015em] uppercase">
                O técnico
              </h2>

              <p className="mt-8 text-[1rem] leading-[1.9] text-foreground/85">
                Há 20 anos que abro máquinas para entender como funcionam. Começou como curiosidade, virou profissão, agora é expertise.
              </p>

              <p className="mt-6 text-[0.95rem] leading-[1.85] text-muted-foreground">
                Quando o teu computador para, eu não faço um diagnóstico robótico e mando um email. Chamo, explico em português, resolvo — e fico disponível se tiver dúvidas.
              </p>

              <p className="mt-6 text-[0.95rem] leading-[1.85] text-muted-foreground">
                Atendo em Braga e região. Suporte remoto em todo o país.
              </p>

              {/* Destaques */}
              <div className="mt-12 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
                <div>
                  <p className="font-display text-[2rem] leading-none font-bold tracking-[-0.03em] text-ignition">
                    20+
                  </p>
                  <p className="mt-3 text-[0.78rem] leading-tight uppercase tracking-[0.1em] text-muted-foreground">
                    Anos de experiência
                  </p>
                </div>
                <div>
                  <p className="font-display text-[1.35rem] leading-none font-bold tracking-[-0.02em] uppercase">
                    Braga
                  </p>
                  <p className="mt-3 text-[0.78rem] leading-tight uppercase tracking-[0.1em] text-muted-foreground">
                    Atendimento local
                  </p>
                </div>
                <div>
                  <p className="font-display text-[1.35rem] leading-none font-bold tracking-[-0.02em] uppercase">
                    Remoto
                  </p>
                  <p className="mt-3 text-[0.78rem] leading-tight uppercase tracking-[0.1em] text-muted-foreground">
                    Suporte em Portugal
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
