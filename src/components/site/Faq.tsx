import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Trabalha ao domicílio?",
    a: "Sim. Em Braga e concelhos vizinhos, com hora marcada. Muitos problemas de software resolvem-se antes disso por acesso remoto, sem deslocação e sem espera.",
  },
  {
    q: "Quanto custa um diagnóstico?",
    a: "A visita técnica tem custo. Antes de qualquer reparo ou intervenção, é explicado o que está acontecendo e o valor do serviço, e nada avança sem a sua aprovação.",
  },
  {
    q: "Perco os meus ficheiros numa formatação?",
    a: "Não. A cópia dos dados é sempre o primeiro passo, mesmo quando o sistema já não arranca. Só se formata depois de confirmar que está tudo salvaguardado.",
  },
  {
    q: "Também apoia empresas pequenas?",
    a: "Sim, é uma parte grande do trabalho: postos de trabalho, Microsoft 365, email profissional, impressoras em rede e cópias de segurança automáticas, com apoio contínuo.",
  },
  {
    q: "Quanto tempo demora?",
    a: "A maioria das situações resolve-se no próprio dia ou no dia seguinte. Quando depende de peças, sabe o prazo antes de decidir.",
  },
  {
    q: "Vale a pena arranjar ou compensa comprar novo?",
    a: "Depende da máquina e do uso — e a resposta honesta é dada mesmo quando é 'não vale a pena'. Nesse caso, ajuda-se a escolher e a configurar o equipamento novo.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="depth-dark relative scroll-mt-28 bg-carbon py-28 md:py-40">
      <div className="section-seam" aria-hidden />
      <div className="relative z-[2] mx-auto grid max-w-[92rem] gap-16 px-6 md:px-12 lg:grid-cols-12 lg:gap-24">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow text-ignition">Dúvidas</p>
          <h2 className="font-display mt-8 text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[1.02] font-bold tracking-[-0.015em] uppercase">
            Perguntas
            <span className="block text-ignition">frequentes.</span>
          </h2>
        </Reveal>

        <div className="lg:col-span-7 lg:col-start-6">
          <dl className="border-t border-border" itemScope itemType="https://schema.org/FAQPage">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={80 + i * 70}>
                  <div className="border-b border-border" itemScope itemType="https://schema.org/Question">
                    <dt>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-8 py-7 text-left transition-colors duration-500 hover:text-ignition"
                      >
                        <span className="font-display text-[1.1rem] font-bold tracking-[0.03em] uppercase md:text-[1.25rem]" itemProp="name">
                          {f.q}
                        </span>
                        <span
                          className={cn(
                            "relative block h-[2px] w-5 shrink-0 bg-ignition transition-transform duration-500",
                            isOpen && "rotate-180",
                          )}
                        >
                          <span
                            className={cn(
                              "absolute inset-0 bg-ignition transition-transform duration-500",
                              isOpen ? "scale-y-0" : "rotate-90",
                            )}
                          />
                        </span>
                      </button>
                    </dt>
                    <dd
                      className={cn(
                        "overflow-hidden transition-[max-height,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
                      )}
                      itemScope
                      itemType="https://schema.org/Answer"
                    >
                      <p className="pb-8 text-[0.92rem] leading-[1.95] text-muted-foreground" itemProp="text">
                        {f.a}
                      </p>
                    </dd>
                  </div>
                </Reveal>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}