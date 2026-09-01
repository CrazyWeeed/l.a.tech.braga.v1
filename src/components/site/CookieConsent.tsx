import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  getStoredConsent,
  storeConsent,
  OPEN_PREFERENCES_EVENT,
  type ConsentState,
} from "@/lib/consent";
import {
  initConsentModeDefaults,
  loadGoogleAnalytics,
  updateAnalyticsConsent,
} from "@/lib/analytics";
import { loadMetaPixel } from "@/lib/meta-pixel";

function applyConsent(state: Pick<ConsentState, "analytics" | "marketing">) {
  updateAnalyticsConsent(state.analytics === "granted");
  if (state.analytics === "granted") loadGoogleAnalytics();
  if (state.marketing === "granted") loadMetaPixel();
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Regista o estado "negado" por defeito no Consent Mode assim que a app arranca.
    initConsentModeDefaults();

    const stored = getStoredConsent();
    if (stored) {
      applyConsent(stored);
    } else {
      setVisible(true);
    }

    const handleOpenPreferences = () => setVisible(true);
    window.addEventListener(OPEN_PREFERENCES_EVENT, handleOpenPreferences);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, handleOpenPreferences);
  }, []);

  function respond(granted: boolean) {
    const state = {
      analytics: (granted ? "granted" : "denied") as ConsentState["analytics"],
      marketing: (granted ? "granted" : "denied") as ConsentState["marketing"],
    };
    storeConsent(state);
    applyConsent(state);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Preferências de cookies"
      aria-live="polite"
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto flex max-w-sm flex-col gap-4 rounded-xl border border-border bg-steel/95 p-5 shadow-lift backdrop-blur-sm sm:inset-x-auto sm:right-6 sm:bottom-6 sm:left-auto"
    >
      <p className="text-[0.82rem] leading-[1.6] text-foreground/85">
        Usamos cookies para melhorar o site e analisar o tráfego.{" "}
        <Link
          to="/politica-de-privacidade"
          className="link-quiet whitespace-nowrap text-ignition"
        >
          Política de Privacidade
        </Link>
      </p>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => respond(false)}
          className="flex-1 border border-border px-4 py-2.5 text-[0.66rem] font-semibold tracking-[0.14em] uppercase text-muted-foreground transition-colors duration-300 hover:border-foreground hover:text-foreground"
        >
          Recusar
        </button>
        <button
          type="button"
          onClick={() => respond(true)}
          className="btn-ignite flex-1 px-4 py-2.5 text-center text-[0.66rem] tracking-[0.14em]"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
