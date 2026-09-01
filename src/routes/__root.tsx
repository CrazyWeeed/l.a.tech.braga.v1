import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { WifiOff } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { CookieConsent } from "../components/site/CookieConsent";

function NotFoundComponent() {
  // Isolated to the 404 view only: keep it out of search results without
  // touching the shared root head() (used by every other page).
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Página não encontrada | L.A. Tech Braga";

    let meta = document.querySelector('meta[name="robots"]');
    const previousContent = meta?.getAttribute("content") ?? null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "robots");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", "noindex, nofollow");

    return () => {
      document.title = previousTitle;
      if (previousContent !== null) meta?.setAttribute("content", previousContent);
    };
  }, []);

  return (
    <div className="carbon-weave tech-grid depth-dark flex min-h-screen flex-col bg-obsidian text-foreground">
      <header className="border-b border-border bg-obsidian">
        <div className="mx-auto flex max-w-[92rem] items-center justify-between gap-6 px-6 py-5 md:px-12">
          <Link to="/" className="font-display text-lg font-bold tracking-[0.14em] uppercase">
            L.A. <span className="text-ignition">Tech</span> Braga
          </Link>
          <Link
            to="/"
            className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-muted-foreground transition-colors hover:text-foreground"
          >
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="relative isolate flex flex-1 items-center justify-center overflow-y-auto px-6 py-10 md:px-12 md:py-14">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_82%_12%,oklch(0.685_0.195_41_/_0.14)_0%,transparent_62%),radial-gradient(90%_70%_at_8%_96%,oklch(1_0_0_/_0.04)_0%,transparent_60%)]" />

        <div className="max-w-lg text-center">
          <div className="lat404-badge relative mx-auto mb-5 flex h-20 w-20 items-center justify-center">
            <span className="lat404-ring" />
            <span className="lat404-ring" />
            <span className="lat404-ring" />
            <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-ash bg-steel/70 shadow-[0_0_0_1px_oklch(0.685_0.195_41_/_0.15)]">
              <WifiOff className="lat404-flicker h-7 w-7 text-ignition" strokeWidth={1.6} aria-hidden="true" />
            </div>
          </div>

          <p className="eyebrow text-ignition">Erro 404 — Conexão perdida</p>

          <div className="lat404-scan relative mt-4 inline-block overflow-hidden">
            <h1 className="font-display text-[clamp(2.6rem,8vw,4.5rem)] font-bold leading-none tracking-[-0.02em] text-foreground">
              404
            </h1>
          </div>

          <p className="font-display mt-3 text-[clamp(1.05rem,2.2vw,1.35rem)] font-semibold uppercase tracking-[-0.01em] text-foreground">
            Parece que esta página saiu da rede.
          </p>

          <p className="mt-2 text-[0.9rem] leading-[1.7] text-muted-foreground">
            Já tentámos o clássico: desligar, contar até três e voltar a ligar.
            Não resultou — mas prometemos que o resto do site continua bem ligado.
          </p>

          <div className="mt-6 flex flex-col items-center gap-3">
            <Link
              to="/"
              className="btn-ignite inline-flex items-center justify-center px-8 py-3.5 text-[0.7rem] tracking-[0.24em] uppercase"
            >
              Voltar ao início
            </Link>
            <Link
              to="/"
              hash="servicos"
              className="link-quiet text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground"
            >
              Ou veja os nossos serviços
            </Link>
          </div>
        </div>
      </main>

      {/* Scoped to this 404 view only — no shared stylesheet touched. */}
      <style>{`
        .lat404-ring {
          position: absolute;
          inset: 0;
          margin: auto;
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 9999px;
          border: 1.5px solid oklch(0.775 0.155 48 / 0.9);
          box-shadow: 0 0 16px 0 oklch(0.685 0.195 41 / 0.35);
          opacity: 0;
          animation: lat404-radar 3.6s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }
        .lat404-ring:nth-child(2) { animation-delay: 1.2s; }
        .lat404-ring:nth-child(3) { animation-delay: 2.4s; }
        @keyframes lat404-radar {
          0% { transform: scale(0.65); opacity: 0.85; }
          100% { transform: scale(2.3); opacity: 0; }
        }
        .lat404-flicker {
          animation: lat404-flicker 4.5s ease-in-out infinite;
        }
        @keyframes lat404-flicker {
          0%, 42%, 100% { opacity: 1; }
          44% { opacity: 0.25; }
          46% { opacity: 1; }
          70% { opacity: 1; }
          72% { opacity: 0.2; }
          75% { opacity: 1; }
        }
        .lat404-scan::after {
          content: "";
          position: absolute;
          inset-inline: -10%;
          height: 40%;
          top: -40%;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            oklch(0.775 0.155 48 / 0.35) 50%,
            transparent 100%
          );
          animation: lat404-scan 4.5s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes lat404-scan {
          0%, 20% { top: -40%; }
          55%, 100% { top: 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .lat404-ring, .lat404-flicker, .lat404-scan::after {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "Z0-_s70uTvSTeuKBvDD_flm1jdXuA3LtnnwV9rImA80" },
      { title: "L.A. Tech Braga — Especialista em Informática" },
      { name: "description", content: "Assistência informática em Braga: reparação, redes, Microsoft 365 e recuperação de dados, remoto ou ao domicílio." },
      { name: "author", content: "L.A. Tech Braga" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "L.A. Tech Braga — Especialista em Informática" },
      { property: "og:description", content: "Assistência informática em Braga: reparação, redes, Microsoft 365 e recuperação de dados." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.la-tech.pt/" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "L.A. Tech Braga — Especialista em Informática" },
      { name: "twitter:description", content: "Assistência informática em Braga: reparação, redes, Microsoft 365 e recuperação de dados." },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "canonical", href: "https://www.la-tech.pt/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Barlow:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-PT">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <CookieConsent />
    </QueryClientProvider>
  );
}
