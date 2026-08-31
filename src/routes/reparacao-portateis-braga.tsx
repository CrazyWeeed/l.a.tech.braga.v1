import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, servicePages } from "@/components/site/ServicePage";
import { createSeoHead, SITE_URL } from "@/lib/seo";

const page = servicePages.portateis;
const title = `${page.title} | L.A. Tech`;
const description = page.metaDescription;

export const Route = createFileRoute("/reparacao-portateis-braga")({
  head: () => ({
    ...createSeoHead({
      title,
      description,
      canonical: `${SITE_URL}/reparacao-portateis-braga`,
    }),
  }),
  component: () => <ServicePage data={page} />,
});
