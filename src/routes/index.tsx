import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Experiencia } from "@/components/site/Experiencia";
import { QuemSou } from "@/components/site/QuemSou";
import { Metodo } from "@/components/site/Metodo";
import { Servicos } from "@/components/site/Servicos";
import { Aproximacao } from "@/components/site/Aproximacao";
import { ProvaSocial } from "@/components/site/ProvaSocial";
import { Processo } from "@/components/site/Processo";
import { Clientes } from "@/components/site/Clientes";
import { Faq } from "@/components/site/Faq";
import { Contacto, Footer } from "@/components/site/Contacto";

const title = "L.A. Tech Braga — Especialista em Informática e Suporte Técnico";
const description =
  "Assistência informática em Braga para pessoas e pequenos negócios: reparação, redes, Microsoft 365 e recuperação de dados. diagnóstico e suporte remoto ou ao domicílio.";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "L.A. Tech Braga",
  "description": description,
  "url": "https://latechbraga.pt",
  "telephone": "+351934587555",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Braga",
    "addressRegion": "Braga",
    "addressCountry": "PT"
  },
  "areaServed": "Braga",
  "priceRange": "€",
  "serviceType": ["Suporte Técnico Informático", "Reparação de Computadores", "Instalação de Redes", "Microsoft 365"]
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "keywords", content: "técnico informática Braga, suporte técnico, reparação PC, redes Wi-Fi, Microsoft 365, assistência informática, diagnóstico computador" },
      { name: "author", content: "L.A. Tech Braga" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        textContent: JSON.stringify(schemaOrg),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-carbon text-foreground">
      <Nav />
      <main>
        <Hero />
        <Experiencia />
        <QuemSou />
        <Metodo />
        <Aproximacao />
        <Servicos />
        <ProvaSocial />
        <Processo />
        <Clientes />
        <Faq />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
