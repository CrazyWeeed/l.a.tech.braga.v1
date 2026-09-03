import { useEffect, useRef, useState } from "react";
import logoMark from "@/assets/logo-mark.png";

/**
 * LogoRevealAnimation
 * --------------------
 * Animação de revelação do símbolo "LA", pensada para o espaço vazio
 * à esquerda da secção "O Técnico".
 *
 * Como funciona:
 * 1. A imagem (logo-mark.png, fundo já transparente) fica por trás de
 *    uma máscara (clip-path) que começa fechada.
 * 2. Quando a secção entra no viewport, o clip-path "abre" da
 *    esquerda para a direita, revelando o símbolo.
 * 3. Um brilho laranja subtil acompanha a borda da revelação e
 *    desvanece no fim.
 * 4. Só corre uma vez (a animação de "desenhar" não faz sentido
 *    repetir sempre que se faz scroll para cima e para baixo).
 * 5. Respeita prefers-reduced-motion e só é montado em desktop.
 *
 * Ficheiro de imagem: coloca logo-mark.png em src/assets/ (ou ajusta
 * o import acima consoante a estrutura do teu projeto).
 */

function useRevealOnScroll(ref: React.RefObject<HTMLDivElement | null>) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return revealed;
}

export function LogoRevealAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const revealed = useRevealOnScroll(containerRef);

  return (
    <div
      ref={containerRef}
      className="hidden lg:flex items-center justify-center w-full relative"
      aria-hidden="true" // decorativo — o logo real já existe na navbar com alt text
    >
      <div className="relative w-full max-w-xs">
        {/* Glow de fundo, aparece devagar por trás do símbolo */}
        <div
          className="absolute inset-0 blur-3xl rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,92,20,0.25) 0%, transparent 70%)",
            opacity: revealed ? 1 : 0,
            transition: "opacity 2.4s ease-out 0.6s",
          }}
        />

        {/* Símbolo com máscara de revelação */}
        <img
          src={logoMark}
          alt=""
          width={878}
          height={461}
          className="relative w-full h-auto"
          style={{
            clipPath: revealed ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
            transition: "clip-path 1.6s cubic-bezier(.65,0,.35,1)",
          }}
        />

        {/* Linha de brilho que acompanha a borda da revelação */}
        <div
          className="absolute top-0 h-full w-[3px]"
          style={{
            left: revealed ? "100%" : "0%",
            background:
              "linear-gradient(to bottom, transparent, var(--color-ignition), transparent)",
            boxShadow: "var(--shadow-ignition)",
            opacity: revealed ? 0 : 1,
            transition:
              "left 1.6s cubic-bezier(.65,0,.35,1), opacity 0.4s ease-out 1.6s",
          }}
        />
      </div>
    </div>
  );
}
