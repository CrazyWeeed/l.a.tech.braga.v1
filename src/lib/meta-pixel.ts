/**
 * Meta Pixel — carregamento condicional, compatível com RGPD.
 *
 * O Pixel ID vem de uma variável de ambiente. Se não estiver definido,
 * o Pixel simplesmente não é ativado (nenhum ID é inventado aqui).
 *
 * Para configurar: crie/edite um ficheiro `.env` na raiz do projeto com:
 *   VITE_META_PIXEL_ID=000000000000000
 */

declare global {
  interface Window {
    fbq?: {
      (...args: unknown[]): void;
      callMethod?: (...args: unknown[]) => void;
      queue?: unknown[];
      loaded?: boolean;
      version?: string;
      push?: Window["fbq"];
    };
    _fbq?: Window["fbq"];
  }
}

const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID as string | undefined;

let initialized = false;

/** Só deve ser chamado depois do consentimento de marketing ter sido concedido. */
export function loadMetaPixel() {
  if (typeof window === "undefined" || !META_PIXEL_ID || initialized) return;
  initialized = true;

  if (!window.fbq) {
    const fbq: NonNullable<Window["fbq"]> = function (...args: unknown[]) {
      if (fbq.callMethod) {
        fbq.callMethod(...args);
      } else {
        fbq.queue?.push(args);
      }
    };
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];
    window.fbq = fbq;
    window._fbq = fbq;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }

  window.fbq?.("init", META_PIXEL_ID);
  window.fbq?.("track", "PageView");
}

export const isMetaPixelConfigured = Boolean(META_PIXEL_ID);
