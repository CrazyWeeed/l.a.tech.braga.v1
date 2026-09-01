import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

const itens = [
  { t: "Criação de sites e lojas online", d: "Site institucional ou loja online, pronto para publicar." },
  { t: "Logótipo e identidade visual", d: "Cores, tipografia e logótipo consistentes em tudo." },
  { t: "Cartões de visita e papel timbrado", d: "Prontos para impressão, na mesma identidade do site." },
  { t: "Flyers, banners e roll-ups", d: "Material para feiras, montras e divulgação local." },
  { t: "Autocolantes para viaturas", d: "Identificação de viatura de trabalho ou frota." },
  { t: "Google Business Profile", d: "Ficha do negócio configurada e otimizada nos mapas." },
  { t: "Domínio e email profissional", d: "Email @onegocio.pt em vez de uma conta genérica." },
  { t: "Manutenção e SEO de sites", d: "Atualizações, backups e visibilidade nas pesquisas." },
];

export function DesignDigital() {
  return (
    <section
      id="design-digital"
      className="relative section-anchor bg-obsidian py-20 md:py-24"
    >
      <div className="section-seam" aria-hidden />
      <div className="relative z-[2] mx-auto max-w-[92rem] px-6 md:px-12">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-ignition">Design &amp; presença digital</p>
            <h2 className="font-display mt-8 text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[1.02] font-bold tracking-[-0.015em] uppercase">
              Da identidade visual
              <span className="block text-ignition">à presença online.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="max-w-xs text-[0.9rem] leading-[1.9] text-muted-foreground">
              Site, logótipo, cartões, flyers e presença nos mapas — tudo com a
              mesma imagem, tratado num único ponto de contacto.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {itens.map((it, i) => (
            <Reveal key={it.t} delay={200 + i * 70}>
              <div className="card-pad h-full border border-border bg-steel/40 backdrop-blur-[2px] transition-colors hover:border-ignition/40 hover:bg-steel">
                <p className="font-display text-[1.02rem] font-bold leading-tight tracking-[0.01em] uppercase">
                  {it.t}
                </p>
                <p className="mt-3 text-[0.83rem] leading-[1.7] text-muted-foreground">
                  {it.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-14 flex flex-col items-start gap-6 border-t border-border pt-10 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl text-[0.92rem] leading-[1.85] text-foreground/75">
              Este é um serviço complementar à assistência técnica — pensado para
              quem quer o negócio com boa imagem, online e impresso.
            </p>
            <Link
              to="/design-e-presenca-digital-braga"
              className="btn-ignite inline-flex shrink-0 items-center justify-center px-8 py-4 text-[0.72rem] tracking-[0.24em] uppercase"
            >
              Ver serviço completo
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
