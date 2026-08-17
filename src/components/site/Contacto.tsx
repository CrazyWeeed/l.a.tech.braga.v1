import { useState } from "react";
import { Reveal } from "./Reveal";

const WHATSAPP = "351934587555";

const fieldClass =
  "w-full border-b border-border bg-transparent pt-3 pb-3 text-[0.95rem] text-foreground transition-all duration-400 placeholder:text-muted-foreground/55 focus:border-ignition focus:outline-none";
const labelClass = "eyebrow text-muted-foreground";

export function Contacto() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [local, setLocal] = useState("");
  const [descricao, setDescricao] = useState("");
  const [sent, setSent] = useState(false);

  const descricaoOk = descricao.trim().length >= 20;
  const valido = nome.trim().length >= 2 && telefone.trim().length >= 9 && descricaoOk;

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    if (!valido) return;

    const linhas = [
      "*Pedido de assistência — L.A. Tech Braga*",
      "",
      `*Nome:* ${nome.trim()}`,
      `*Telefone:* ${telefone.trim()}`,
      local.trim() ? `*Localidade:* ${local.trim()}` : null,
      "",
      `*Problema:* ${descricao.trim()}`,
    ].filter(Boolean);

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(linhas.join("\n"))}`,
      "_blank",
      "noopener",
    );
    setSent(true);
  }

  return (
    <section
      id="contacto"
      className="carbon-weave depth-ignite relative section-anchor bg-obsidian py-20 md:py-24"
    >
      <div className="section-seam" aria-hidden />
      <div className="relative z-[2] mx-auto max-w-[92rem] px-6 md:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow text-ignition">Contacto</p>
              <h2 className="font-display mt-7 text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[1.02] font-bold tracking-[-0.015em] uppercase">
                Diga o que
                <span className="block text-ignition">está a acontecer.</span>
              </h2>
              <p className="mt-7 max-w-sm text-[0.9rem] leading-[1.9] text-muted-foreground">
                Não precisa de saber o nome técnico do problema. Descreva-o como o
                viveu — o resto é comigo.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <div className="card-pad mt-10 border border-border bg-steel/60 shadow-soft">
                <p className="font-display text-[1.35rem] leading-none font-bold tracking-[0.04em] uppercase">
                  Falar já
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                    "Olá, preciso de ajuda com um problema informático.",
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ignite mt-7 flex items-center justify-center px-8 py-4 text-[0.7rem] tracking-[0.24em] uppercase"
                >
                  Falar no WhatsApp
                </a>
                <a
                  href="tel:+351934587555"
                  className="btn-wash mt-4 flex items-center justify-center border-2 border-foreground/30 px-8 py-4 text-[0.7rem] tracking-[0.24em] uppercase text-foreground hover:border-foreground hover:text-obsidian"
                >
                  <span className="relative z-10">Ligar +351 934 587 555</span>
                  <span className="btn-wash-fill bg-foreground" />
                </a>

                <dl className="mt-8 space-y-5 border-t border-border pt-7 text-[0.88rem]">
                  {[
                    ["Área", "Braga e concelhos vizinhos"],
                    ["Remoto", "Todo o país, com marcação"],
                    ["Horário", "Seg – Sex · 09h00 – 20h00"],
                    ["Sábado", "09h00 – 13h00"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-6">
                      <dt className="shrink-0 text-[0.66rem] tracking-[0.2em] uppercase text-muted-foreground">
                        {k}
                      </dt>
                      <dd className="text-right text-foreground/90">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={100}>
              <form
                onSubmit={enviar}
                className="card-pad border border-border bg-steel/50 shadow-lift"
              >
                <p className="font-display text-[1.45rem] leading-none font-bold tracking-[0.04em] uppercase">
                  Pedido de assistência
                </p>
                <p className="mt-4 text-[0.86rem] leading-[1.8] text-muted-foreground">
                  Basta dizer quem é, como podemos contactá-lo, onde está e o que aconteceu. A
                  mensagem segue preparada no WhatsApp para continuar a conversa diretamente
                  com o técnico.
                </p>

                <div className="mt-9 grid gap-8 sm:grid-cols-2">
                  <label className="block">
                    <span className={labelClass}>Nome *</span>
                    <input
                      required
                      autoComplete="name"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="O seu nome"
                      className={fieldClass}
                    />
                  </label>
                  <label className="block">
                    <span className={labelClass}>Telefone *</span>
                    <input
                      required
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                      placeholder="+351"
                      className={fieldClass}
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className={labelClass}>Localidade</span>
                    <input
                      autoComplete="address-level2"
                      value={local}
                      onChange={(e) => setLocal(e.target.value)}
                      placeholder="Ex.: São Vítor, Braga"
                      className={fieldClass}
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className={labelClass}>O que está a acontecer? *</span>
                    <textarea
                      required
                      rows={5}
                      value={descricao}
                      onChange={(e) => setDescricao(e.target.value)}
                      maxLength={1000}
                      placeholder="Ex.: o portátil liga, mas fica com o ecrã preto e reinicia sozinho."
                      className={`${fieldClass} resize-none`}
                    />
                    <span
                      className={`mt-3 block text-[0.72rem] tracking-[0.08em] ${
                        descricao.length > 0 && !descricaoOk
                          ? "text-destructive"
                          : "text-muted-foreground"
                      }`}
                    >
                      {descricaoOk
                        ? `${descricao.length} de 1000 caracteres`
                        : `Mínimo 20 caracteres — ${descricao.trim().length} escritos`}
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!valido}
                  className={`mt-9 w-full px-8 py-5 text-[0.72rem] tracking-[0.24em] uppercase ${
                    valido
                      ? "btn-ignite"
                      : "cursor-not-allowed border border-border bg-ash/40 font-semibold text-muted-foreground"
                  }`}
                >
                  Continuar no WhatsApp
                </button>

                {sent && (
                  <p className="mt-5 border-l-2 border-ignition pl-4 text-[0.86rem] leading-[1.8] text-foreground/80">
                    Pedido preparado no WhatsApp. Se a janela não abriu, ligue para
                    +351 934 587 555.
                  </p>
                )}

                <p className="mt-5 text-[0.74rem] leading-[1.7] text-muted-foreground">
                  Os dados servem apenas para responder ao seu pedido.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-carbon">
      <div className="mx-auto max-w-[92rem] px-6 py-14 md:px-12 md:py-16">
        <div className="grid gap-10 border-b border-border pb-12 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow text-ignition">Precisa de ajuda?</p>
            <h2 className="font-display mt-4 text-[clamp(1.8rem,3vw,2.8rem)] font-bold leading-none uppercase">
              Diga o que está a acontecer.
            </h2>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
              "Olá, preciso de ajuda com um problema informático.",
            )}`}
            target="_blank"
            rel="noreferrer"
            className="btn-ignite inline-flex items-center justify-center px-8 py-4 text-[0.7rem] tracking-[0.24em] uppercase"
          >
            Falar no WhatsApp
          </a>
        </div>

        <div className="flex flex-col gap-8 pt-10 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="block h-8 w-[3px] bg-ignition" />
              <span className="font-display text-lg font-bold tracking-[0.14em] uppercase">
                L.A. <span className="text-ignition">Tech</span> Braga
              </span>
            </div>
            <p className="mt-5 max-w-sm text-[0.85rem] leading-[1.9] text-muted-foreground">
              Assistência informática a pessoas e pequenos negócios em Braga.
              Suporte remoto e ao domicílio.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-[0.85rem] text-muted-foreground md:items-end">
            <a href="tel:+351934587555" className="link-quiet text-foreground">
              +351 934 587 555
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
              className="link-quiet"
            >
              WhatsApp
            </a>
            <span>Braga · Portugal</span>
            <span className="mt-4 text-[0.72rem] tracking-[0.14em] uppercase">
              © {new Date().getFullYear()} L.A. Tech Braga
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
