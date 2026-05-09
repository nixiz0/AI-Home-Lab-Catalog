import { useI18n } from "../i18n/I18nProvider";
import type { Locale } from "../i18n/types";
import { cn } from "../utils/classNames";

const languageOptions: Array<{ locale: Locale; label: string; flagClass: string; title: string }> = [
  { locale: "en", label: "EN", flagClass: "flag-en", title: "English" },
  { locale: "fr", label: "FR", flagClass: "flag-fr", title: "Francais" },
];

export function LanguageSwitch() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="inline-flex items-center gap-1 rounded-lg border border-ice-blue/15 bg-black/35 p-1" aria-label="Language">
      {languageOptions.map((option) => (
        <button
          key={option.locale}
          type="button"
          className={cn(
            "inline-flex min-h-8 min-w-[4.25rem] items-center justify-center gap-2 rounded-md px-2 text-xs font-black text-text-secondary transition duration-200 hover:bg-ice-blue/10 hover:text-ice-blue",
            locale === option.locale &&
              "bg-ice-blue text-background shadow-[0_0_20px_rgba(185,201,232,0.22)] hover:bg-ice-blue hover:text-background",
          )}
          title={option.title}
          aria-pressed={locale === option.locale}
          onClick={() => setLocale(option.locale)}
        >
          <span className={cn("flag-icon", option.flagClass)} aria-hidden="true" />
          {option.label}
        </button>
      ))}
    </div>
  );
}
