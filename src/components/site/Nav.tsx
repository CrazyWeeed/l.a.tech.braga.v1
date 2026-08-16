import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Método", href: "#metodo" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Clientes", href: "#clientes" },
  { label: "Dúvidas", href: "#faq" },
];

const sectionIds = ["top", ...links.map((l) => l.href.slice(1)), "contacto"];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.32;
      let current = "top";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= line) current = id;
      }
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = sectionIds[sectionIds.length - 1] ?? "top";
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,padding,border-color] duration-700",
        open || scrolled
          ? "border-b border-border bg-obsidian/85 py-3.5 backdrop-blur-xl supports-[backdrop-filter]:bg-obsidian/70"
          : "border-b border-transparent bg-transparent py-6",
      )}
    >
      <div className="mx-auto flex max-w-[92rem] items-center justify-between gap-8 px-6 md:px-12">
        <a href="#top" className="group flex shrink-0 items-center gap-3 leading-none">
          <span className="block h-8 w-[3px] bg-ignition transition-all duration-500 group-hover:h-10" />
          <span>
            <span className="font-display block text-lg font-bold tracking-[0.14em] whitespace-nowrap uppercase md:text-xl">
              L.A. <span className="text-ignition">Tech</span> Braga
            </span>
            <span className="eyebrow mt-1 block text-[0.52rem] text-muted-foreground">
              Suporte Informático · Braga
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 xl:flex">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "relative text-[0.74rem] font-semibold tracking-[0.16em] uppercase transition-colors duration-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ignition",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l.label}
                <span
                  className={cn(
                    "absolute -bottom-2 left-0 h-[2px] w-full origin-left bg-ignition transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isActive ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href="tel:+351934587555"
            className="hidden text-[0.78rem] font-semibold tracking-[0.1em] whitespace-nowrap text-foreground transition-colors duration-400 hover:text-ignition lg:inline-block"
          >
            +351 934 587 555
          </a>
          <a
            href="#contacto"
            className="btn-ignite hidden px-6 py-3 text-[0.68rem] tracking-[0.22em] whitespace-nowrap uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ignition sm:inline-block"
          >
            Pedir Ajuda
          </a>
          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] text-foreground xl:hidden"
          >
            <span
              className={cn(
                "block h-[2px] w-6 bg-current transition-transform duration-500",
                open && "translate-y-[4px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-[2px] w-6 bg-current transition-transform duration-500",
                open && "-translate-y-[4px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-700 xl:hidden bg-obsidian border-t border-border",
          open ? "max-h-[36rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="mx-auto flex max-w-[92rem] flex-col gap-2 px-6 pt-6 pb-6 md:px-12">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={cn(
                "font-display text-2xl font-medium tracking-[0.06em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ignition",
                active === l.href.slice(1)
                  ? "text-ignition"
                  : "text-foreground/85 hover:text-ignition",
              )}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="btn-ignite mt-4 px-6 py-4 text-center text-[0.7rem] tracking-[0.22em] uppercase"
          >
            Pedir Ajuda
          </a>
        </nav>
      </div>
    </header>
  );
}