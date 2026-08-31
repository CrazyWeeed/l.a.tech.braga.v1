# L.A. Tech — SEO audit and implementation

## Source of the diagnosis

Google Search Console data supplied for Portugal, 19–29 August 2026:
- ~1.23k impressions, 2 clicks, 0.2% average CTR and 5.2 average position.
- `computer repair`: 436 impressions, average position 4.1.
- `motherboard repair`: 354 impressions, average position 8.0.
- `laptop repair`: 252 impressions, average position 3.9.
- `informática braga`: 7 impressions, average position 4.1.

Interpretation: the site already has strong first-page visibility for several commercial English queries in Portugal. The main opportunity is to preserve that visibility while improving Portuguese/local relevance, click attractiveness and page-to-query alignment.

## Implemented

1. Centralised SEO metadata with canonical, Open Graph, Twitter Card, locale and large-image crawling directives.
2. Homepage title/H1/description aligned to computer + laptop repair in Braga without removing the existing brand message.
3. Corrected the LocalBusiness URL to `https://www.la-tech.pt/` and kept a stable `@id` for entity references.
4. Expanded homepage structured data with LocalBusiness/ProfessionalService, WebSite, opening hours, service catalog and FAQ data.
5. Added dedicated service landing pages with unique titles, descriptions, visible H1s, breadcrumbs, Service JSON-LD and internal links:
   - `/reparacao-computadores-braga`
   - `/reparacao-portateis-braga`
   - `/reparacao-hardware-braga`
   - `/redes-wifi-braga`
   - `/apoio-empresas-braga`
6. Added Portuguese local service links in the main Services section while preserving the one-page visual navigation.
7. Added `public/robots.txt` and `public/sitemap.xml` for all indexable routes.
8. Added a 1200×630 Open Graph image from existing brand assets.
9. Corrected intrinsic image dimensions in the hero/service cards to reduce layout instability risk.
10. Kept actively used visual assets in lightweight WebP where available and removed unused duplicate source images from the project.
11. Standardised visible wording that had drifted toward Brazilian Portuguese (`contacto`, `a acontecer`, etc.) while preserving the site's tone.
12. Added service-schema alternate names for the exact English queries already generating visibility (`Computer repair`, `Laptop repair`, `Motherboard repair`) without adding keyword-stuffed visible copy.

## Deliberate non-changes

- No fake street address, coordinates, Google Business URL or review counts were invented.
- No existing visual identity or layout was replaced just for SEO.
- No aggressive keyword repetition was added.
- No new low-value pages were created for every isolated long-tail query.

## Validation

Static checks were run against the source tree, route references, structured-data references, sitemap and asset usage. A full production build was attempted, but dependency installation did not finish within the available execution window in the working environment; therefore the archive should still be built once in the user's normal CI/Vercel environment before deployment.
