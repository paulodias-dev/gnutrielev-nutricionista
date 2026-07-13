/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, Cookie, Settings2, ShieldCheck, X } from 'lucide-react';

const CONSENT_STORAGE_KEY = 'gnutrielev.cookieConsent.v2';
const GOOGLE_ANALYTICS_ID = 'G-4CHR3SD8C5';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type ConsentPreferences = {
  necessary: true;
  functional: boolean;
  analytics: boolean;
  updatedAt: string;
  version: 2;
};

const createPreferences = (
  preferences: Pick<ConsentPreferences, 'functional' | 'analytics'>,
): ConsentPreferences => ({
  necessary: true,
  functional: preferences.functional,
  analytics: preferences.analytics,
  updatedAt: new Date().toISOString(),
  version: 2,
});

const parseStoredConsent = (value: string | null): ConsentPreferences | null => {
  if (!value) {
    return null;
  }

  try {
    const parsed = JSON.parse(value) as Partial<ConsentPreferences>;

    if (parsed.version === 2 && parsed.necessary === true) {
      return {
        necessary: true,
        functional: Boolean(parsed.functional),
        analytics: Boolean(parsed.analytics),
        updatedAt: typeof parsed.updatedAt === 'string' ? parsed.updatedAt : new Date().toISOString(),
        version: 2,
      };
    }
  } catch {
    return null;
  }

  return null;
};

const loadGoogleAnalytics = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || ((...args: unknown[]) => window.dataLayer?.push(args));

  if (!document.getElementById('google-analytics-gtag')) {
    const script = document.createElement('script');
    script.id = 'google-analytics-gtag';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`;
    document.head.appendChild(script);
  }

  window.gtag('js', new Date());
  window.gtag('config', GOOGLE_ANALYTICS_ID, { anonymize_ip: true });
};

export const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [functional, setFunctional] = useState(true);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    try {
      const storedConsent = parseStoredConsent(window.localStorage.getItem(CONSENT_STORAGE_KEY));

      if (storedConsent) {
        setFunctional(storedConsent.functional);
        setAnalytics(storedConsent.analytics);
        setIsVisible(false);

        if (storedConsent.analytics) {
          loadGoogleAnalytics();
        }

        return;
      }

      setIsVisible(true);
    } catch {
      setIsVisible(true);
    }
  }, []);

  const saveConsent = (preferences: Pick<ConsentPreferences, 'functional' | 'analytics'>) => {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(createPreferences(preferences)));
    } catch {
      // The banner can still be dismissed if browser storage is unavailable.
    }

    if (preferences.analytics) {
      loadGoogleAnalytics();
    }

    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          role="dialog"
          aria-live="polite"
          aria-label="Aviso de cookies da GNutriElev"
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.98 }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="liquid-glass fixed inset-x-4 bottom-4 z-[120] mx-auto max-w-5xl overflow-hidden rounded-[1.75rem] text-slate-900 sm:bottom-5 md:bottom-7"
        >
          <div className="relative z-10 grid gap-5 p-4 sm:p-5 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-5 md:p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-white/45 text-emerald-800 shadow-inner shadow-white/50">
              <Cookie aria-hidden="true" className="h-6 w-6" />
            </div>

            <div className="min-w-0">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-bold tracking-tight text-slate-950 sm:text-base">
                    Privacidade e cookies
                  </p>
                  <p className="mt-1 max-w-2xl text-xs leading-relaxed text-slate-700 sm:text-sm">
                    Usamos recursos essenciais para manter o site funcionando e podemos guardar sua preferência de
                    consentimento neste navegador. Você pode aceitar, recusar ou ajustar suas escolhas.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => saveConsent({ functional: false, analytics: false })}
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/60 bg-white/35 text-slate-600 shadow-sm transition-colors hover:bg-white/65 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
                  aria-label="Fechar aviso de cookies recusando cookies opcionais"
                >
                  <X aria-hidden="true" className="h-4 w-4" />
                </button>
              </div>

              <AnimatePresence initial={false}>
                {showPreferences && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-4 overflow-hidden"
                  >
                    <div className="grid gap-2 sm:grid-cols-3">
                      <PreferenceItem
                        checked
                        locked
                        title="Necessários"
                        description="Segurança, navegação e preferências legais."
                      />
                      <PreferenceItem
                        checked={functional}
                        title="Funcionais"
                        description="Lembram escolhas para melhorar a experiência."
                        onChange={setFunctional}
                      />
                      <PreferenceItem
                        checked={analytics}
                        title="Medição"
                        description="Ajuda a medir acessos e melhorar a página."
                        onChange={setAnalytics}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <a
                href="/politica-de-cookies"
                className="mt-3 inline-flex text-xs font-semibold text-emerald-800 underline decoration-emerald-800/30 underline-offset-4 transition-colors hover:text-emerald-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
              >
                Ler Política de Cookies
              </a>
            </div>

            <div className="grid gap-2 sm:grid-cols-3 md:w-64 md:grid-cols-1">
              <button
                type="button"
                onClick={() => setShowPreferences((current) => !current)}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl border border-white/60 bg-white/35 px-4 py-2.5 text-xs font-semibold text-slate-800 shadow-sm transition-all hover:bg-white/70 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
                aria-expanded={showPreferences}
              >
                <Settings2 aria-hidden="true" className="h-4 w-4 shrink-0" />
                Preferências
              </button>
              <button
                type="button"
                onClick={() => saveConsent({ functional: false, analytics: false })}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl border border-white/60 bg-white/35 px-4 py-2.5 text-xs font-semibold text-slate-800 shadow-sm transition-all hover:bg-white/70 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
              >
                <ShieldCheck aria-hidden="true" className="h-4 w-4 shrink-0" />
                Recusar
              </button>
              <button
                type="button"
                onClick={() => saveConsent({ functional: true, analytics: true })}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl border border-emerald-700/20 bg-emerald-700 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-emerald-950/20 transition-all hover:bg-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
              >
                <Check aria-hidden="true" className="h-4 w-4 shrink-0" />
                Aceitar
              </button>
              {showPreferences && (
                <button
                  type="button"
                  onClick={() => saveConsent({ functional, analytics })}
                  className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-emerald-200/80 bg-emerald-50/80 px-4 py-2.5 text-xs font-bold text-emerald-900 shadow-sm transition-all hover:bg-emerald-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2 sm:col-span-3 md:col-span-1"
                >
                  Salvar escolhas
                </button>
              )}
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

interface PreferenceItemProps {
  checked: boolean;
  description: string;
  locked?: boolean;
  onChange?: (checked: boolean) => void;
  title: string;
}

const PreferenceItem: React.FC<PreferenceItemProps> = ({ checked, description, locked = false, onChange, title }) => (
  <div className="rounded-2xl border border-white/55 bg-white/30 p-3 shadow-inner shadow-white/35">
    <div className="flex items-center justify-between gap-3">
      <div className="min-w-0">
        <p className="text-xs font-bold text-slate-900">{title}</p>
        <p className="mt-1 text-[11px] leading-snug text-slate-600">{description}</p>
      </div>
      <button
        type="button"
        onClick={() => onChange?.(!checked)}
        disabled={locked}
        className={`relative h-6 w-11 shrink-0 rounded-full border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2 ${
          checked ? 'border-emerald-500 bg-emerald-600' : 'border-slate-300 bg-white/60'
        } ${locked ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'}`}
        aria-label={`${title}: ${checked ? 'ativado' : 'desativado'}`}
        aria-pressed={checked}
      >
        <span
          className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white shadow-sm transition-transform ${
            checked ? 'translate-x-5' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  </div>
);
