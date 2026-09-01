import { Reveal } from "./Reveal";

const testimonials = [
  {
    name: "Maria Tereza Farias Ferreira",
    when: "há um mês",
    text: "Muito bom atendimento do Luís Albuquerque. Com a sua calma no tratamento dos dados e a sua competência informática ela deixa o cliente completamente satisfeito. O seu contato guardei no meu WhatsApp para uma próxima vez!",
    rating: 5,
  },
  {
    name: "Flávia",
    when: "há 2 semanas",
    text: "Serviço excelente, profissional, pessoa confiável, gentil e prestativa, muito solícito e disposto a atender às suas necessidades técnicas e logísticas. Apesar de ser fim de semana, ele consertou imediatamente o meu laptop que estava inoperante há 5 dias devido a danos causados por água, quando nem mesmo o LED funcionava. Só tenho gratidão pelo serviço e por como ele conseguiu reviver, restaurar e limpar o meu laptop (tanto por dentro como por fora) e pela paciência em consertá-lo, dando o seu melhor para que tudo desse certo. Obrigado!",
    rating: 5,
  },
  {
    name: "Larissa Pilz",
    when: "há 2 meses",
    text: "Luiz é um excelente profissional. Atendeu-me de forma rápida. Identificou o problema do meu laptop, pesquisou a peça, fez a troca e agora tudo funciona perfeitamente. Em 3 dias estava tudo resolvido. Recomendo muito os serviços dele.",
    rating: 5,
  },
  {
    name: "Cátia Ferreira",
    when: "há 5 meses",
    text: "Ótimo trabalho. Rápido e eficiente. O meu computador finalmente voltou ao seu funcionamento normal após passar pelas mãos de vários outros técnicos com tentativas falhadas. Muito obrigada Luiz Tech pelo excelente trabalho.",
    rating: 5,
  },
  {
    name: "Ruud van Bochoven",
    when: "há um mês",
    text: "Ajudou perfeitamente! A impressora não estava a funcionar e eu não conseguia consertá-la sozinho; após a intervenção do Luiz, todos os problemas foram resolvidos! Se tiver outra dúvida no futuro, entro em contacto com ele novamente imediatamente. Obrigado!",
    rating: 5,
  },
  {
    name: "Yan Torres",
    when: "há 5 meses",
    text: "Honesto e trabalha bem, arranjou a troca da bateria do computador e deu vida à impressora que estava parada em casa.",
    rating: 5,
  },
  {
    name: "Paulo Henrique Maurinho",
    when: "há 5 meses",
    text: "Muito bom! O meu PC estava maluco e agora está como novo 🙌🏾",
    rating: 5,
  },
];

export function ProvaSocial() {
  return (
    <section
      id="avaliacoes"
      className="carbon-weave depth-dark relative section-anchor bg-obsidian py-20 md:py-24"
    >
      <div className="section-seam" aria-hidden />
      <div className="relative z-[2] mx-auto max-w-[92rem] px-6 md:px-12">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow text-ignition">Avaliações</p>
              <h2 className="font-display mt-6 text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] font-bold tracking-[-0.015em] uppercase">
                Confiam no trabalho.
              </h2>
            </div>

            <div className="flex items-center gap-3 border border-border px-5 py-3">
              <span className="font-display text-2xl font-bold text-ignition">5.0</span>
              <div>
                <div className="flex gap-0.5" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="font-display text-sm text-ignition">
                      ★
                    </span>
                  ))}
                </div>
                <p className="mt-0.5 text-[0.72rem] uppercase tracking-[0.08em] text-muted-foreground">
                  {testimonials.length} avaliações no Google
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 columns-1 gap-6 md:mt-14 md:columns-2 lg:columns-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80} className="mb-6 break-inside-avoid">
              <article className="card-pad border border-border bg-steel/50 shadow-soft">
                <div className="mb-5 flex gap-1" aria-label={`${t.rating} de 5 estrelas`}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} aria-hidden className="font-display text-base text-ignition">
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="text-[0.94rem] leading-[1.85] text-foreground/85">
                  “{t.text}”
                </blockquote>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <p className="font-display text-[0.88rem] font-bold uppercase tracking-[0.04em] text-foreground">
                    {t.name}
                  </p>
                  <p className="text-[0.72rem] uppercase tracking-[0.08em] text-muted-foreground">
                    {t.when}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={testimonials.length * 80 + 100}>
          <div className="mt-4 border-t border-border pt-8 text-center">
            <p className="text-[0.9rem] leading-[1.8] text-foreground/70">
              Veja as avaliações reais diretamente no Google.
            </p>
            <a
              href="https://www.google.com/maps/search/L.A.+Tech+Braga"
              target="_blank"
              rel="noreferrer"
              className="link-quiet mt-3 inline-block text-ignition"
            >
              Ver no Google Maps →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
