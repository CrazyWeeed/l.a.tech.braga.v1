/**
 * Gestão do consentimento de cookies (RGPD).
 * Guarda a escolha do utilizador em localStorage e avisa o resto da app
 * (banner, integrações de Analytics/Pixel) através de um CustomEvent,
 * para que tudo fique sincronizado sem precisar de um estado global/contexto.
 */

export type ConsentValue = "granted" | "denied";

export type ConsentState = {
  analytics: ConsentValue;
  marketing: ConsentValue;
  /** Data ISO em que a escolha foi guardada, útil para auditoria futura. */
  decidedAt: string;
};

const STORAGE_KEY = "lat-cookie-consent";
const CONSENT_EVENT = "lat-consent-change";
export const OPEN_PREFERENCES_EVENT = "lat-open-cookie-preferences";

export function getStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    if (parsed.analytics && parsed.marketing) {
      return {
        analytics: parsed.analytics,
        marketing: parsed.marketing,
        decidedAt: parsed.decidedAt ?? new Date().toISOString(),
      };
    }
    return null;
  } catch {
    return null;
  }
}

export function storeConsent(partial: Pick<ConsentState, "analytics" | "marketing">) {
  if (typeof window === "undefined") return;
  const state: ConsentState = { ...partial, decidedAt: new Date().toISOString() };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent<ConsentState>(CONSENT_EVENT, { detail: state }));
}

export function clearStoredConsent() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
}

/** Reabre o banner/preferências — usado pelo link "Preferências de cookies" no rodapé. */
export function openCookiePreferences() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
}
