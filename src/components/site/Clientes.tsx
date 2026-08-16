import { Reveal } from "./Reveal";

const reviews = [
  {
    nome: "Marta Ferreira",
    contexto: "Casa · São Vítor, Braga",
    texto:
      "O portátil já demorava cinco minutos a abrir. Levou a manhã, explicou o que ia fazer e devolveu com tudo no sítio — incluindo as fotografias que eu já dava por perdidas.",
  },
  {
    nome: "Rui Machado",
    contexto: "Loja com 4 postos · Braga",
    texto:
      "Tínhamos o Wi-Fi a cair a meio dos pagamentos. Refez a rede num dia, deixou tudo etiquetado e nunca mais tivemos de reiniciar o router à pressa.",
  },
  {
    nome: "Cláudia Neves",
    contexto: "Escritório de contabilidade",
    texto:
      "Passámos os emails para o Microsoft 365 sem parar o trabalho. O que eu mais valorizo é responder ao telefone quando alguma coisa foge do normal.",
  },
];

export function Clientes() {
  return (
    <section id="clientes" className="tech-grid depth-dark relative scroll-mt-28 bg-carbon py-28 md:py-40">
      <div className="section-seam" aria-hidden />
      <div className="relative z-[2] mx-auto max-w-[92rem] px-6 md:px-12">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-ignition">Clientes</p>
          <h2 className="font-display mt-8 text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[1.02] font-bold tracking-[-0.015em] uppercase">
            Quem já esteve
            <span className="block text-ignition">deste lado.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-8 md:mt-28 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.nome} delay={140 + i * 150}>
              <figure className="card-pad card-quiet flex h-full flex-col border border-border bg-steel/50 hover:border-ignition/40 hover:bg-steel">
                <span className="font-display text-[3rem] leading-none text-ignition/40">“</span>
                <blockquote className="mt-4 flex-1 text-[0.95rem] leading-[1.95] text-foreground/80">
                  {r.texto}
                </blockquote>
                <figcaption className="mt-9 border-t border-border pt-7">
                  <p className="font-display text-[1.05rem] font-bold tracking-[0.06em] uppercase">
                    {r.nome}
                  </p>
                  <p className="mt-2 text-[0.78rem] tracking-[0.08em] text-muted-foreground">
                    {r.contexto}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}