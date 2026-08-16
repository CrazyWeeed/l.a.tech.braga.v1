import { useState } from "react";
import { Reveal } from "./Reveal";

const WHATSAPP = "351934587555";

const fieldClass =
  "w-full border-b border-border bg-transparent pt-3 pb-3 text-[0.95rem] text-foreground transition-all duration-400 placeholder:text-muted-foreground/55 focus:border-ignition focus:outline-none";
const labelClass = "eyebrow text-muted-foreground";

const tipos = [
  "Computador lento ou a bloquear",
  "Não arranca / avaria",
  "Vírus ou comportamento estranho",
  "Internet e Wi-Fi",
  "Email / Microsoft 365",
  "Impressora ou periféricos",
  "Recuperação de dados",
  "Instalação de equipamento novo",
  "Outro",
];

const equipamentos = ["Portátil", "Computador fixo", "Mac", "Servidor / NAS", "Rede", "Outro"];
const urgencias = ["Sem pressa", "Esta semana", "Urgente — estou parado"];

function Chip({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border px-5 py-2.5 text-[0.76rem] font-semibold tracking-[0.06em] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ignition ${
        active
          ? "border-ignition bg-ignition/15 text-foreground shadow-ignition"
          : "border-border text-muted-foreground hover:-translate-y-0.5 hover:border-ignition/60 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

export function Contacto() {
  const [tipo, setTipo] = useState(tipos[0]!);
  const [equipamento, setEquipamento] = useState(equipamentos[0]!);
  const [urgencia, setUrgencia] = useState(urgencias[1]!);
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
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
      `*Nome:* ${nome}`,
      empresa.trim() ? `*Empresa:* ${empresa}` : null,
      `*Telefone:* ${telefone}`,
      email.trim() ? `*Email:* ${email}` : null,
      local.trim() ? `*Local:* ${local}` : null,
      `*Equipamento:* ${equipamento}`,
      `*Tipo de problema:* ${tipo}`,
      `*Urgência:* ${urgencia}`,
      "",
      `*Descrição:* ${descricao.trim()}`,
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
      className="carbon-weave depth-ignite relative bg-obsidian py-28 md:py-40"
    >
      <div className="section-seam" aria-hidden />
      <div className="relative z-[2] mx-auto max-w-[92rem] px-6 md:px-12">
        <div className="grid gap-20 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow text-ignition">Contacto</p>
              <h2 className="font-display mt-8 text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[1.02] font-bold tracking-[-0.015em] uppercase">
                Diga o que
                <span className="block text-ignition">está a acontecer.</span>
              </h2>
              <p className="mt-9 max-w-sm text-[0.9rem] leading-[1.95] text-muted-foreground">
                Não precisa de saber o nome técnico do problema. Descreva-o como o
                viveu — o resto é comigo. Resposta no próprio dia útil.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <div className="card-pad card-quiet mt-14 border border-border bg-steel/60 shadow-soft hover:border-ignition/40 hover:bg-steel">
                <p className="font-display text-[1.35rem] leading-none font-bold tracking-[0.04em] uppercase">
                  Falar já
                </p>
                <a
                  href="tel:+351934587555"
                  className="btn-ignite mt-8 flex items-center justify-center px-8 py-4 text-[0.7rem] tracking-[0.24em] uppercase"
                >
                  Ligar +351 934 587 555
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                    "Olá, preciso de ajuda com um problema informático.",
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-wash mt-4 flex items-center justify-center border-2 border-foreground/30 px-8 py-4 text-[0.7rem] tracking-[0.24em] uppercase text-foreground hover:border-foreground hover:text-obsidian"
                >
                  <span className="relative z-10">Enviar WhatsApp</span>
                  <span className="btn-wash-fill bg-foreground" />
                </a>

                <dl className="mt-10 space-y-6 border-t border-border pt-8 text-[0.9rem]">
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
            <Reveal delay={120}>
              <form
                onSubmit={enviar}
                className="card-pad border border-border bg-steel/50 shadow-lift lg:ml-auto lg:w-[94%]"
              >
                <p className="font-display text-[1.45rem] leading-none font-bold tracking-[0.04em] uppercase">
                  Ficha de pedido
                </p>
                <p className="mt-4 text-[0.86rem] leading-[1.8] text-muted-foreground">
                  Quanto mais detalhe der, mais rigorosa é a estimativa — e mais
                  depressa se resolve.
                </p>

                <div className="mt-10 grid gap-9 sm:grid-cols-2">
                  <label className="block">
                    <span className={labelClass}>Nome *</span>
                    <input
                      required
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="O seu nome"
                      className={fieldClass}
                    />
                  </label>
                  <label className="block">
                    <span className={labelClass}>Empresa</span>
                    <input
                      value={empresa}
                      onChange={(e) => setEmpresa(e.target.value)}
                      placeholder="Opcional"
                      className={fieldClass}
                    />
                  </label>
                  <label className="block">
                    <span className={labelClass}>Telefone *</span>
                    <input
                      required
                      inputMode="tel"
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                      placeholder="+351"
                      className={fieldClass}
                    />
                  </label>
                  <label className="block">
                    <span className={labelClass}>Email</span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nome@exemplo.pt"
                      className={fieldClass}
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className={labelClass}>Localidade</span>
                    <input
                      value={local}
                      onChange={(e) => setLocal(e.target.value)}
                      placeholder="Ex.: São Vítor, Braga"
                      className={fieldClass}
                    />
                  </label>
                </div>

                <fieldset className="mt-11">
                  <legend className={labelClass}>Equipamento</legend>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {equipamentos.map((t) => (
                      <Chip key={t} active={equipamento === t} onClick={() => setEquipamento(t)}>
                        {t}
                      </Chip>
                    ))}
                  </div>
                </fieldset>

                <fieldset className="mt-11">
                  <legend className={labelClass}>Tipo de problema</legend>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {tipos.map((t) => (
                      <Chip key={t} active={tipo === t} onClick={() => setTipo(t)}>
                        {t}
                      </Chip>
                    ))}
                  </div>
                </fieldset>

                <fieldset className="mt-11">
                  <legend className={labelClass}>Urgência</legend>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {urgencias.map((t) => (
                      <Chip key={t} active={urgencia === t} onClick={() => setUrgencia(t)}>
                        {t}
                      </Chip>
                    ))}
                  </div>
                </fieldset>

                <label className="mt-11 block">
                  <span className={labelClass}>Descrição do problema *</span>
                  <textarea
                    required
                    rows={4}
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    maxLength={1000}
                    placeholder="Ex.: desde segunda-feira o portátil desliga sozinho ao fim de 10 minutos e aquece muito do lado esquerdo."
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

                <button
                  type="submit"
                  disabled={!valido}
                  className={`mt-12 w-full px-8 py-5 text-[0.72rem] tracking-[0.24em] uppercase ${
                    valido
                      ? "btn-ignite"
                      : "cursor-not-allowed border border-border bg-ash/40 font-semibold text-muted-foreground"
                  }`}
                >
                  Enviar pedido por WhatsApp
                </button>

                {sent && (
                  <p className="mt-6 border-l-2 border-ignition pl-4 text-[0.86rem] leading-[1.8] text-foreground/80">
                    Pedido preparado no WhatsApp. Se a janela não abriu, ligue para
                    +351 934 587 555.
                  </p>
                )}

                <p className="mt-6 text-[0.74rem] leading-[1.7] text-muted-foreground">
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
    <footer className="relative border-t border-border bg-carbon py-16">
      <div className="mx-auto flex max-w-[92rem] flex-col gap-10 px-6 md:flex-row md:items-end md:justify-between md:px-12">
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
    </footer>
  );
}