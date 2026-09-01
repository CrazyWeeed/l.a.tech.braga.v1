import { Link } from "@tanstack/react-router";
import { Footer } from "./Contacto";

export function LegalPage({
  eyebrow,
  title,
  updatedAt,
  children,
}: {
  eyebrow: string;
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-carbon text-foreground">
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

      <main className="mx-auto max-w-3xl px-6 py-16 md:px-12 md:py-20">
        <p className="eyebrow text-ignition">{eyebrow}</p>
        <h1 className="font-display mt-5 text-[clamp(1.9rem,4vw,2.9rem)] font-bold leading-[1.05] tracking-[-0.015em] uppercase">
          {title}
        </h1>
        <p className="mt-4 text-[0.78rem] uppercase tracking-[0.1em] text-muted-foreground">
          Última atualização: {updatedAt}
        </p>

        <div className="legal-copy mt-12 space-y-9 text-[0.95rem] leading-[1.85] text-foreground/80">
          {children}
        </div>
      </main>

      <Footer />

      <style>{`
        .legal-copy h2 {
          font-family: var(--font-display);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          font-size: 1.2rem;
          color: var(--color-foreground);
          padding-top: 0.5rem;
        }
        .legal-copy ul {
          list-style: disc;
          padding-left: 1.4rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .legal-copy strong {
          color: var(--color-foreground);
        }
        .legal-copy a {
          color: var(--color-ignition);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
      `}</style>
    </div>
  );
}
