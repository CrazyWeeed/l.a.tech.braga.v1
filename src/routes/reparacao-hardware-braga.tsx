import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, servicePages } from "@/components/site/ServicePage";
import { createSeoHead, SITE_URL } from "@/lib/seo";

const page = servicePages.hardware;
const title = `${page.title} | L.A. Tech`;
const description = page.metaDescription;

export const Route = createFileRoute("/reparacao-hardware-braga")({
  head: () => ({
    ...createSeoHead({
      title,
      description,
      canonical: `${SITE_URL}/reparacao-hardware-braga`,
    }),
  }),
  component: () => <ServicePage data={page} />,
});
