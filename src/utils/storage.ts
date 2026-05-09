import { defaultLocale, supportedLocales, type Locale } from "../i18n/types";

const languageStorageKey = "ai-home-lab:language:v1";
const favoritesStorageKey = "ai-home-lab:favorites:v1";

export function readStoredLocale(): Locale {
  const storedLocale = safeLocalStorageGet(languageStorageKey);

  if (isSupportedLocale(storedLocale)) {
    return storedLocale;
  }

  const browserLocale = typeof navigator === "undefined" ? null : navigator.language.slice(0, 2);
  return isSupportedLocale(browserLocale) ? browserLocale : defaultLocale;
}

export function writeStoredLocale(locale: Locale) {
  safeLocalStorageSet(languageStorageKey, locale);
}

export function readStoredFavorites(validIds: Set<string>) {
  const rawValue = safeLocalStorageGet(favoritesStorageKey);

  if (!rawValue) {
    return new Set<string>();
  }

  try {
    const parsedValue: unknown = JSON.parse(rawValue);

    if (!Array.isArray(parsedValue)) {
      return new Set<string>();
    }

    return new Set(parsedValue.filter((value): value is string => typeof value === "string" && validIds.has(value)));
  } catch {
    return new Set<string>();
  }
}

export function writeStoredFavorites(favoriteIds: Set<string>, projectOrder: string[]) {
  const orderedIds = projectOrder.filter((projectId) => favoriteIds.has(projectId));
  safeLocalStorageSet(favoritesStorageKey, JSON.stringify(orderedIds));
}

function isSupportedLocale(value: string | null): value is Locale {
  return supportedLocales.includes(value as Locale);
}

function safeLocalStorageGet(key: string) {
  try {
    return typeof localStorage === "undefined" ? null : localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeLocalStorageSet(key: string, value: string) {
  try {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(key, value);
    }
  } catch {
    // Private browsing and locked-down browsers can reject storage writes.
  }
}
