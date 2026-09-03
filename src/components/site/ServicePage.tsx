import { Link } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/seo";
import { Contacto, Footer } from "./Contacto";

export type ServicePath =
  | "/reparacao-computadores-braga"
  | "/reparacao-portateis-braga"
  | "/reparacao-hardware-braga"
  | "/redes-wifi-braga"
  | "/apoio-empresas-braga"
  | "/design-e-presenca-digital-braga";

export type ServicePageData = {
  eyebrow: string;
  title: string;
  intro: string;
  metaDescription: string;
  slug: string;
  bullets: string[];
  sections: Array<{ heading: string; text: string; items?: string[] }>;
  related: Array<{ label: string; to: ServicePath }>;
  alternateNames?: string[];
};

const siteUrl = SITE_URL;

export function ServicePage({ data }: { data: ServicePageData }) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}/${data.slug}#service`,
        "name": data.title,
        "serviceType": data.title,
        "alternateName": data.alternateNames,
        "description": data.intro,
        "url": `${siteUrl}/${data.slug}`,
        "provider": { "@id": `${siteUrl}/#business` },
        "areaServed": { "@type": "City", "name": "Braga" },
        "mainEntityOfPage": `${siteUrl}/${data.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/${data.slug}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Início", "item": `${siteUrl}/` },
          { "@type": "ListItem", "position": 2, "name": data.title, "item": `${siteUrl}/${data.slug}` },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-carbon text-foreground">
      <header className="border-b border-border bg-obsidian">
        <div className="mx-auto flex max-w-[92rem] items-center justify-between gap-6 px-6 py-5 md:px-12">
          <Link to="/" className="font-display text-lg font-bold tracking-[0.14em] uppercase">
            L.A. <span className="text-ignition">Tech</span> Braga
          </Link>
          <Link
            to="/"
            className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-muted-foreground transition-colors hover:text-foreground"
          >
            Voltar ao site
          </Link>
        </div>
      </header>

      <div className="border-b border-border bg-carbon">
        <div className="mx-auto max-w-[92rem] px-6 py-3 md:px-12">
          <nav aria-label="Breadcrumb" className="text-[0.68rem] font-semibold tracking-[0.12em] uppercase text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-foreground">Início</Link>
            <span aria-hidden="true" className="px-2 text-ignition">/</span>
            <span className="text-foreground/80">{data.title}</span>
          </nav>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />

      <main>
        <section className="relative overflow-hidden bg-obsidian py-20 md:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_82%_12%,oklch(0.685_0.195_41_/_0.12)_0%,transparent_62%)]" />
          <div className="relative z-10 mx-auto max-w-[92rem] px-6 md:px-12">
            <div className="max-w-4xl">
              <p className="eyebrow text-ignition">{data.eyebrow}</p>
              <h1 className="font-display mt-6 text-[clamp(2.3rem,5.5vw,5rem)] leading-[0.98] font-bold tracking-[-0.02em] uppercase">
                {data.title}
              </h1>
              <p className="mt-7 max-w-3xl text-[1.05rem] leading-[1.85] text-foreground/75">
                {data.intro}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                {data.bullets.map((item) => (
                  <span key={item} className="border border-border bg-steel/70 px-4 py-2 text-[0.72rem] font-semibold tracking-[0.08em] uppercase text-foreground/85">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/351934587555?text=Ol%C3%A1%2C%20preciso%20de%20assist%C3%AAncia%20inform%C3%A1tica."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ignite px-8 py-4 text-[0.72rem] tracking-[0.24em] uppercase"
                >
                  Pedir assistência no WhatsApp
                </a>
                <a
                  href="tel:+351934587555"
                  className="btn-wash border-2 border-foreground/30 px-8 py-4 text-[0.72rem] tracking-[0.24em] uppercase text-foreground hover:border-foreground hover:text-obsidian"
                >
                  <span className="relative z-10">Ligar +351 934 587 555</span>
                  <span className="btn-wash-fill bg-foreground" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-carbon py-20 md:py-24">
          <div className="mx-auto max-w-[92rem] px-6 md:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
              <div>
                <p className="eyebrow text-ignition">O que pode tratar</p>
                <h2 className="font-display mt-6 text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] font-bold uppercase">
                  Diagnóstico antes de mexer.
                </h2>
                <p className="mt-6 max-w-md text-[0.92rem] leading-[1.9] text-muted-foreground">
                  A abordagem da L.A. Tech é simples: perceber o problema, explicar o que foi encontrado e só depois decidir o que faz sentido.
                </p>
              </div>

              <div className="space-y-10">
                {data.sections.map((section) => (
                  <article key={section.heading} className="border-t border-border pt-8">
                    <h2 className="font-display text-[1.55rem] font-bold uppercase tracking-[0.01em]">
                      {section.heading}
                    </h2>
                    <p className="mt-4 text-[0.92rem] leading-[1.9] text-foreground/80">{section.text}</p>
                    {section.items && (
                      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-[0.86rem] leading-[1.7] text-muted-foreground">
                            <span className="mt-[0.65em] block h-[2px] w-4 shrink-0 bg-ignition" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-obsidian py-16 md:py-20">
          <div className="mx-auto max-w-[92rem] px-6 md:px-12">
            <p className="eyebrow text-ignition">Também fazemos</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {data.related.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="border border-border bg-steel/50 px-4 py-3 text-[0.78rem] font-semibold tracking-[0.08em] uppercase transition-colors hover:border-ignition/50 hover:text-ignition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-carbon py-14 md:py-16">
          <div className="mx-auto max-w-[92rem] px-6 md:px-12">
            <div className="border border-border bg-steel/35 px-6 py-8 md:flex md:items-center md:justify-between md:gap-10 md:px-10">
              <div>
                <p className="eyebrow text-ignition">Assistência em Braga</p>
                <p className="mt-3 max-w-2xl text-[0.92rem] leading-[1.85] text-foreground/75">
                  Descreva o problema como ele acontece. A L.A. Tech explica o diagnóstico e o que faz sentido fazer antes de qualquer intervenção.
                </p>
              </div>
              <a
                href={`https://wa.me/351934587555?text=${encodeURIComponent(
                  `Olá, preciso de ajuda com: ${data.title}.`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-ignite mt-6 inline-flex shrink-0 items-center justify-center px-7 py-4 text-[0.7rem] tracking-[0.22em] uppercase md:mt-0"
              >
                Pedir assistência
              </a>
            </div>
          </div>
        </section>

        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export const servicePages: Record<string, ServicePageData> = {
  computadores: {
    metaDescription: "Reparação de computadores em Braga: diagnóstico, manutenção, upgrades, sistemas e hardware para casa e pequenos negócios.",
    eyebrow: "Reparação de computadores · Braga",
    title: "Reparação de Computadores em Braga",
    slug: "reparacao-computadores-braga",
    intro:
      "Assistência a computadores de casa e pequenos negócios em Braga. Diagnóstico, manutenção, configuração, upgrades e resolução de problemas de hardware ou sistema, com explicação clara antes de avançar.",
    bullets: ["Braga e concelhos vizinhos", "Diagnóstico", "Manutenção", "Upgrades"],
    sections: [
      {
        heading: "Computador lento, bloqueado ou que não arranca",
        text: "A primeira etapa é perceber o que está a falhar. A partir daí, a solução pode passar por configuração, manutenção, limpeza, sistema ou substituição de um componente, conforme o diagnóstico.",
        items: ["Problemas de arranque", "Lentidão e bloqueios", "Manutenção e limpeza", "Instalação e configuração de sistemas"],
      },
      {
        heading: "Hardware e upgrades",
        text: "Quando o problema é físico ou o equipamento precisa de mais desempenho, o trabalho pode incluir avaliação de componentes e upgrades adequados ao computador.",
        items: ["SSD", "Memória RAM", "Componentes internos", "Aconselhamento antes de comprar"],
      },
      {
        heading: "Dados e reinstalação",
        text: "Formatação e reinstalação devem ser tratadas com atenção aos ficheiros existentes. Quando aplicável, pode ser feita cópia de dados antes do trabalho.",
        items: ["Formatação com cópia de dados", "Recuperação de ficheiros e fotografias", "Otimização após instalação"],
      },
    ],
    alternateNames: ["Computer repair", "Reparação de PC"],
    related: [
      { label: "Reparação de portáteis", to: "/reparacao-portateis-braga" },
      { label: "Hardware e motherboards", to: "/reparacao-hardware-braga" },
      { label: "Redes e Wi-Fi", to: "/redes-wifi-braga" },
      { label: "Apoio a empresas", to: "/apoio-empresas-braga" },
    ],
  },
  portateis: {
    metaDescription: "Reparação de portáteis em Braga: diagnóstico, manutenção, upgrades e resolução de problemas de hardware e sistema.",
    eyebrow: "Reparação de portáteis · Braga",
    title: "Reparação de Portáteis em Braga",
    slug: "reparacao-portateis-braga",
    intro:
      "Reparação e manutenção de portáteis em Braga para problemas de desempenho, arranque, software e componentes. O objetivo é perceber a origem da falha antes de trocar peças ou tomar decisões.",
    bullets: ["Portáteis", "Diagnóstico", "Manutenção", "Upgrades"],
    sections: [
      {
        heading: "Falhas de arranque e desempenho",
        text: "Um portátil que liga, fica lento, bloqueia ou reinicia pode ter causas diferentes. O diagnóstico ajuda a separar problemas de sistema, armazenamento, memória e outros componentes.",
        items: ["Ecrã preto ou falhas de arranque", "Lentidão", "Bloqueios e reinícios", "Configuração de sistemas"],
      },
      {
        heading: "Manutenção e upgrades",
        text: "Quando faz sentido prolongar a vida útil do equipamento, a manutenção e o upgrade de componentes podem ser uma alternativa à compra de um computador novo.",
        items: ["SSD", "Memória RAM", "Limpeza", "Otimização"],
      },
      {
        heading: "Peças e orçamento",
        text: "Antes de avançar com uma peça ou intervenção, é explicado o que foi encontrado e o que vale a pena fazer no equipamento.",
        items: ["Avaliação do problema", "Explicação sem jargão", "Orçamento antes do trabalho"],
      },
    ],
    alternateNames: ["Laptop repair", "Reparação de laptops"],
    related: [
      { label: "Reparação de computadores", to: "/reparacao-computadores-braga" },
      { label: "Hardware e motherboards", to: "/reparacao-hardware-braga" },
      { label: "Redes e Wi-Fi", to: "/redes-wifi-braga" },
    ],
  },
  hardware: {
    metaDescription: "Reparação de motherboards e hardware em Braga: diagnóstico, componentes, upgrades e avaliação antes de trocar peças.",
    eyebrow: "Hardware · Braga",
    title: "Reparação de Motherboards e Hardware em Braga",
    slug: "reparacao-hardware-braga",
    intro:
      "Avaliação de problemas de hardware em computadores e portáteis em Braga, incluindo componentes internos e situações em que é necessário perceber se uma reparação ou substituição faz sentido.",
    bullets: ["Hardware", "Componentes", "Diagnóstico", "Braga"],
    sections: [
      {
        heading: "Quando o problema parece ser físico",
        text: "Falhas de arranque, comportamento instável ou componentes que deixaram de funcionar podem exigir diagnóstico físico. O objetivo é identificar a origem antes de trocar peças sem necessidade.",
        items: ["Componentes internos", "Falhas de arranque", "Comportamento instável", "Testes de hardware"],
      },
      {
        heading: "Motherboard e diagnóstico",
        text: "Quando a falha aponta para a motherboard, é feita a avaliação do equipamento para perceber a origem do problema e as opções tecnicamente viáveis antes de avançar. Este é também o tipo de serviço procurado como motherboard repair.",
        items: ["Avaliação de motherboard", "Diagnóstico de componentes", "Análise de viabilidade", "Explicação do diagnóstico"],
      },
      {
        heading: "Trocar, reparar ou manter",
        text: "Nem sempre trocar a peça é a melhor solução. O diagnóstico serve precisamente para comparar as opções e evitar gastos desnecessários.",
        items: ["Upgrade de SSD", "Upgrade de memória", "Aconselhamento", "Orçamento antes do trabalho"],
      },
    ],
    alternateNames: ["Motherboard repair", "Hardware repair"],
    related: [
      { label: "Reparação de computadores", to: "/reparacao-computadores-braga" },
      { label: "Reparação de portáteis", to: "/reparacao-portateis-braga" },
      { label: "Apoio a empresas", to: "/apoio-empresas-braga" },
    ],
  },
  redes: {
    metaDescription: "Redes e Wi-Fi em Braga: configuração de router, cobertura, cablagem, switches e segurança da rede.",
    eyebrow: "Redes e Wi-Fi · Braga",
    title: "Redes e Wi-Fi em Braga",
    slug: "redes-wifi-braga",
    intro:
      "Configuração e melhoria de redes domésticas e pequenos escritórios em Braga: Wi-Fi fraco, internet instável, cobertura insuficiente e organização de equipamentos de rede.",
    bullets: ["Wi-Fi", "Router", "Switch", "Cablagem"],
    sections: [
      {
        heading: "Wi-Fi fraco ou internet a cair",
        text: "A rede é analisada em função do espaço e da utilização real. A solução pode passar por configuração, posicionamento, repetidores ou outros ajustes compatíveis com a rede existente.",
        items: ["Cobertura Wi-Fi", "Configuração de router", "Repetidores", "Estabilidade"],
      },
      {
        heading: "Cablagem e equipamentos",
        text: "Quando a rede precisa de ligações físicas, podem ser tratados pontos de rede, cablagem e organização de equipamentos como routers e switches.",
        items: ["Cablagem", "Pontos de rede", "Switch", "Organização da rede"],
      },
      {
        heading: "Segurança e rede de convidados",
        text: "A configuração pode incluir medidas de segurança e separação da rede de convidados, de acordo com o equipamento e o contexto.",
        items: ["Segurança da rede", "Rede de convidados", "Configuração", "Explicação ao cliente"],
      },
    ],
    related: [
      { label: "Reparação de computadores", to: "/reparacao-computadores-braga" },
      { label: "Reparação de portáteis", to: "/reparacao-portateis-braga" },
      { label: "Apoio a empresas", to: "/apoio-empresas-braga" },
    ],
  },
  empresas: {
    metaDescription: "Assistência informática para pequenos negócios em Braga: Microsoft 365, email, postos de trabalho, impressoras e backups.",
    eyebrow: "Apoio a empresas · Braga",
    title: "Assistência Informática para Empresas em Braga",
    slug: "apoio-empresas-braga",
    intro:
      "Apoio informático para pequenos negócios em Braga sem departamento de TI: contas, email, Microsoft 365, impressoras, postos de trabalho e backups num único ponto de contacto.",
    bullets: ["Microsoft 365", "Email", "Impressoras", "Backups"],
    sections: [
      {
        heading: "Microsoft 365 e email profissional",
        text: "Apoio na configuração e resolução de problemas relacionados com contas, email e utilização do Microsoft 365 no dia a dia do negócio.",
        items: ["Contas", "Email profissional", "Microsoft 365", "Configuração de postos"],
      },
      {
        heading: "Postos de trabalho e impressoras",
        text: "Quando um posto de trabalho ou uma impressora deixa de funcionar, o objetivo é perceber o problema e deixar o equipamento preparado para voltar ao trabalho.",
        items: ["Preparação de computadores", "Impressoras", "Periféricos", "Configuração"],
      },
      {
        heading: "Backups e recuperação",
        text: "A rotina de backups pode ser organizada para reduzir o risco de perda de informação e facilitar a recuperação quando é necessário.",
        items: ["Backups automáticos", "Recuperação", "Cópia de dados", "Acompanhamento"],
      },
    ],
    related: [
      { label: "Reparação de computadores", to: "/reparacao-computadores-braga" },
      { label: "Redes e Wi-Fi", to: "/redes-wifi-braga" },
      { label: "Reparação de portáteis", to: "/reparacao-portateis-braga" },
    ],
  },
  design: {
    metaDescription: "Criação de sites, logótipo, cartões de visita, flyers e presença digital para pequenos negócios em Braga.",
    eyebrow: "Design · Braga",
    title: "Design e Presença Digital em Braga",
    slug: "design-e-presenca-digital-braga",
    intro:
      "Site, identidade visual e materiais impressos tratados num único ponto de contacto, para pequenos negócios em Braga que querem uma imagem consistente online e no papel.",
    bullets: ["Sites", "Identidade visual", "Materiais impressos", "Braga"],
    sections: [
      {
        heading: "Site e loja online",
        text: "Criação de sites institucionais ou lojas online, prontos para publicar, com domínio próprio e email profissional associado ao negócio.",
        items: ["Site institucional", "Loja online", "Domínio e email profissional", "Manutenção e SEO"],
      },
      {
        heading: "Identidade visual",
        text: "Logótipo, cores e tipografia consistentes, para que o negócio se pareça sempre com o mesmo negócio, em qualquer material.",
        items: ["Logótipo", "Paleta de cores e tipografia", "Aplicação em materiais", "Consistência de marca"],
      },
      {
        heading: "Materiais impressos e mapas",
        text: "Cartões de visita, papel timbrado, flyers, banners e autocolantes de viatura, além da ficha do negócio nos mapas do Google.",
        items: ["Cartões de visita", "Flyers e banners", "Autocolantes de viatura", "Google Business Profile"],
      },
    ],
    related: [
      { label: "Apoio a empresas", to: "/apoio-empresas-braga" },
      { label: "Redes e Wi-Fi", to: "/redes-wifi-braga" },
      { label: "Reparação de computadores", to: "/reparacao-computadores-braga" },
    ],
  },
};
