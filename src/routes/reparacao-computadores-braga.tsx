import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, servicePages } from "@/components/site/ServicePage";
import { createSeoHead, SITE_URL } from "@/lib/seo";

const page = servicePages.computadores;
const title = `${page.title} | L.A. Tech`;
const description = page.metaDescription;

export const Route = createFileRoute("/reparacao-computadores-braga")({
  head: () => ({
    ...createSeoHead({
      title,
      description,
      canonical: `${SITE_URL}/reparacao-computadores-braga`,
    }),
  }),
  component: () => <ServicePage data={page} />,
});
