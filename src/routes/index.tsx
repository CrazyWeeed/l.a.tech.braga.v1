import { createFileRoute } from "@tanstack/react-router";

import { createSeoHead, SITE_URL } from "@/lib/seo";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Experiencia } from "@/components/site/Experiencia";
import { QuemSou } from "@/components/site/QuemSou";
import { Servicos } from "@/components/site/Servicos";
import { DesignDigital } from "@/components/site/DesignDigital";
import { Aproximacao } from "@/components/site/Aproximacao";
import { ProvaSocial } from "@/components/site/ProvaSocial";
import { Processo } from "@/components/site/Processo";
import { Faq } from "@/components/site/Faq";
import { Contacto, Footer } from "@/components/site/Contacto";

const title = "L.A. Tech Braga | Informática e Suporte Técnico";
const description =
  "Assistência informática em Braga para pessoas e pequenos negócios: reparação, redes, Microsoft 365 e suporte remoto ou ao domicílio.";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "L.A. Tech Braga",
  "description": description,
  "url": "https://www.la-tech.pt/",
  "telephone": "+351934587555",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Braga",
    "addressRegion": "Braga",
    "addressCountry": "PT"
  },
  "areaServed": ["Braga", "Guimarães", "Vila Verde", "Famalicão"],
  "priceRange": "€",
  "serviceType": ["Suporte Técnico Informático", "Reparação de Computadores", "Instalação de Redes", "Microsoft 365"]
};

export const Route = createFileRoute("/")({
  head: () => {
    const base = createSeoHead({
      title,
      description,
      canonical: `${SITE_URL}/`,
    });
    return {
      ...base,
      meta: [
        ...base.meta,
        { name: "keywords", content: "técnico informática Braga, suporte técnico, reparação PC, redes Wi-Fi, Microsoft 365, assistência informática, diagnóstico computador" },
        { name: "author", content: "L.A. Tech Braga" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          textContent: JSON.stringify(schemaOrg),
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
        <DesignDigital />
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
