import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { en } from "./locales/en";
import { fr } from "./locales/fr";
import { defaultLocale, supportedLocales, type Dictionary, type DictionaryKey, type Locale } from "./types";
import { readStoredLocale, writeStoredLocale } from "../utils/storage";

const dictionaries: Record<Locale, Dictionary> = { en, fr };

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: DictionaryKey) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => readStoredLocale() ?? defaultLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<I18nContextValue>(() => {
    const setLocale = (nextLocale: Locale) => {
      if (!supportedLocales.includes(nextLocale)) {
        return;
      }

      setLocaleState(nextLocale);
      writeStoredLocale(nextLocale);
    };

    const t = (key: DictionaryKey) => {
      return dictionaries[locale][key] ?? dictionaries[defaultLocale][key] ?? key;
    };

    return { locale, setLocale, t };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }

  return context;
}
