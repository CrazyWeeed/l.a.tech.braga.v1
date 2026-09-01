/**
 * Google Analytics 4 — carregamento condicional, compatível com RGPD.
 *
 * O Measurement ID vem de uma variável de ambiente. Se não estiver definida,
 * o Analytics simplesmente não é ativado (nenhum ID é inventado aqui).
 *
 * Para configurar: crie/edite um ficheiro `.env` na raiz do projeto com:
 *   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

let scriptLoaded = false;

function gtag(...args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

/**
 * Define o estado por defeito do Google Consent Mode v2 como "negado".
 * Deve ser chamado assim que a app arranca — mesmo antes de o utilizador
 * decidir — para que nenhum dado de análise siga sem autorização.
 */
export function initConsentModeDefaults() {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) return;
  window.dataLayer = window.dataLayer || [];
  gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

/** Atualiza o Consent Mode quando o utilizador aceita ou recusa. */
export function updateAnalyticsConsent(granted: boolean) {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) return;
  gtag("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
  });
}

/** Só deve ser chamado depois do consentimento de análise ter sido concedido. */
export function loadGoogleAnalytics() {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID || scriptLoaded) return;
  scriptLoaded = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
}

export const isGoogleAnalyticsConfigured = Boolean(GA_MEASUREMENT_ID);
