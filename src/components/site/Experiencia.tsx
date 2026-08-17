import { Reveal } from "./Reveal";

const facts = [
  ["20+", "anos de experiência"],
  ["Braga", "atendimento local"],
  ["Remoto", "suporte em Portugal"],
  ["Direto", "fale com o técnico"],
];

export function Experiencia() {
  return (
    <section
      id="experiencia"
      className="relative section-anchor overflow-hidden bg-obsidian py-16 md:py-20"
    >
      <div className="section-seam" aria-hidden />
      <div className="relative z-[2] mx-auto max-w-[92rem] px-6 md:px-12">
        <div className="grid border-y border-border sm:grid-cols-2 lg:grid-cols-4">
          {facts.map(([value, label], i) => (
            <Reveal key={value} delay={i * 90}>
              <div className="border-b border-border px-6 py-7 last:border-b-0 sm:border-r sm:px-8 sm:py-8 sm:[&:nth-child(2n)]:border-r-0 lg:border-b-0 lg:[&:nth-child(2n)]:border-r lg:[&:last-child]:border-r-0">
                <p className="font-display text-[2rem] font-bold leading-none tracking-[-0.02em] text-ignition md:text-[2.25rem]">
                  {value}
                </p>
                <p className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
