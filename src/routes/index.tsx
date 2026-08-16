import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
        <QuemSou />
        <Metodo />
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
