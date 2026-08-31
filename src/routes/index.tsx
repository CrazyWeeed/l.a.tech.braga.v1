import { createFileRoute } from "@tanstack/react-router";
import { createSeoHead, SITE_URL, SITE_NAME } from "@/lib/seo";
import heroSlide1 from "@/assets/hero-slide-1.webp";
import heroMobile1 from "@/assets/hero-mobile-1.webp";

import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Experiencia } from "@/components/site/Experiencia";
import { QuemSou } from "@/components/site/QuemSou";
import { Servicos } from "@/components/site/Servicos";
import { Aproximacao } from "@/components/site/Aproximacao";
import { ProvaSocial } from "@/components/site/ProvaSocial";
import { Processo } from "@/components/site/Processo";
import { Faq } from "@/components/site/Faq";
import { Contacto, Footer } from "@/components/site/Contacto";

const title = "Reparação de Computadores e Portáteis em Braga | L.A. Tech";
const description =
  "Reparação de computadores e portáteis em Braga. Diagnóstico de hardware e motherboards, redes, Microsoft 365 e suporte informático.";

const businessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${SITE_URL}/#business`,
      "name": SITE_NAME,
      "description": description,
      "url": `${SITE_URL}/`,
      "telephone": "+351934587555",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/images/la-logo.png`,
      },
      "image": `${SITE_URL}/images/la-tech-og.png`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Braga",
        "addressRegion": "Braga",
        "addressCountry": "PT",
      },
      "areaServed": {
        "@type": "City",
        "name": "Braga",
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "13:00",
        },
      ],
      "serviceType": [
        "Reparação de computadores",
        "Reparação de portáteis",
        "Reparação de hardware e motherboards",
        "Redes e Wi-Fi",
        "Assistência informática para pequenos negócios",
        "Microsoft 365",
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Serviços de assistência informática",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Reparação de computadores", "url": `${SITE_URL}/reparacao-computadores-braga` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Reparação de portáteis", "url": `${SITE_URL}/reparacao-portateis-braga` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Reparação de hardware e motherboards", "url": `${SITE_URL}/reparacao-hardware-braga` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Redes e Wi-Fi", "url": `${SITE_URL}/redes-wifi-braga` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Apoio informático a empresas", "url": `${SITE_URL}/apoio-empresas-braga` } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": `${SITE_URL}/`,
      "name": SITE_NAME,
      "inLanguage": "pt-PT",
      "publisher": { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Trabalha ao domicílio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. Em Braga e concelhos vizinhos, com hora marcada. Muitos problemas de software resolvem-se antes disso por acesso remoto, sem deslocação e sem espera.",
          },
        },
        {
          "@type": "Question",
          "name": "Quanto custa um diagnóstico?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A visita técnica tem custo. Antes de qualquer intervenção, é explicado o que está a acontecer e o valor do serviço, e nada avança sem a sua aprovação.",
          },
        },
        {
          "@type": "Question",
          "name": "Perco os meus ficheiros numa formatação?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não necessariamente. A cópia dos dados é tratada antes da formatação quando aplicável. Só se formata depois de confirmar que os ficheiros importantes estão salvaguardados.",
          },
        },
        {
          "@type": "Question",
          "name": "Também apoia empresas pequenas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. Há apoio a postos de trabalho, Microsoft 365, email profissional, impressoras em rede e cópias de segurança, com acompanhamento conforme a necessidade do negócio.",
          },
        },
        {
          "@type": "Question",
          "name": "Quanto tempo demora?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O prazo depende do problema e, quando necessário, da disponibilidade de peças. O prazo previsto é explicado antes de decidir.",
          },
        },
        {
          "@type": "Question",
          "name": "Vale a pena reparar ou compensa comprar novo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depende da máquina, do problema e do uso. A avaliação procura indicar a opção mais sensata, mesmo quando a resposta é não reparar.",
          },
        },
      ],
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => {
    const seo = createSeoHead({
      title,
      description,
      canonical: `${SITE_URL}/`,
    });

    return {
      ...seo,
      links: [
        ...seo.links,
        { rel: "preload", as: "image", href: heroSlide1, type: "image/webp", media: "(min-width: 769px)" },
        { rel: "preload", as: "image", href: heroMobile1, type: "image/webp", media: "(max-width: 768px)" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          textContent: JSON.stringify(businessSchema),
        },
      ],
    };
  },
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-carbon text-foreground">
      <Nav />
      <main>
        <Hero />
        <Experiencia />
        <Servicos />
        <QuemSou />
        <Aproximacao />
        <ProvaSocial />
        <Processo />
        <Faq />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
