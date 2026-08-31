import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, servicePages } from "@/components/site/ServicePage";
import { createSeoHead, SITE_URL } from "@/lib/seo";

const page = servicePages.empresas;
const title = `${page.title} | L.A. Tech`;
const description = page.metaDescription;

export const Route = createFileRoute("/apoio-empresas-braga")({
  head: () => ({
    ...createSeoHead({
      title,
      description,
      canonical: `${SITE_URL}/apoio-empresas-braga`,
    }),
  }),
  component: () => <ServicePage data={page} />,
});
