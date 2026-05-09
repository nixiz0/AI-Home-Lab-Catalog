import type { en } from "./locales/en";

export type Locale = "en" | "fr";

export type DictionaryKey = keyof typeof en;

export type Dictionary = Record<DictionaryKey, string>;

export const supportedLocales: Locale[] = ["en", "fr"];

export const defaultLocale: Locale = "en";
