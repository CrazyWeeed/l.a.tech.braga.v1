import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, servicePages } from "@/components/site/ServicePage";
import { createSeoHead, SITE_URL } from "@/lib/seo";

const page = servicePages.redes;
const title = `${page.title} | L.A. Tech`;
const description = page.metaDescription;

export const Route = createFileRoute("/redes-wifi-braga")({
  head: () => ({
    ...createSeoHead({
      title,
      description,
      canonical: `${SITE_URL}/redes-wifi-braga`,
    }),
  }),
  component: () => <ServicePage data={page} />,
});
