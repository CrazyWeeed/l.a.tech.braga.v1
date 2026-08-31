export const SITE_URL = "https://www.la-tech.pt";
export const SITE_NAME = "L.A. Tech Braga";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/la-tech-og.png`;

export function createSeoHead({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
}: {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index,follow,max-image-preview:large" },
      { property: "og:locale", content: "pt_PT" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
      { property: "og:image", content: ogImage },
      { property: "og:image:alt", content: `${SITE_NAME} — assistência informática em Braga` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
      { name: "twitter:image:alt", content: `${SITE_NAME} — assistência informática em Braga` },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}
