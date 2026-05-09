import { useI18n } from "../i18n/I18nProvider";
import type { Locale } from "../i18n/types";
import { cn } from "../utils/classNames";

const languageOptions: Array<{ locale: Locale; label: string; title: string }> = [
  { locale: "en", label: "EN", title: "English" },
  { locale: "fr", label: "FR", title: "Français" },
];

export function LanguageSwitch() {
  const { locale, setLocale, t } = useI18n();

  return (
    <div className="inline-flex items-center gap-1 rounded-lg border border-ice-blue/15 bg-black/35 p-1" aria-label={t("language.label")}>
      {languageOptions.map((option) => (
        <button
          key={option.locale}
          type="button"
          className={cn(
            "inline-flex min-h-8 min-w-[4.25rem] items-center justify-center gap-2 rounded-md px-2 text-xs font-black text-text-secondary transition duration-200 hover:bg-ice-blue/10 hover:text-ice-blue",
            locale === option.locale &&
              "bg-white/[0.04] text-white shadow-[0_0_18px_rgba(244,211,107,0.16)] ring-1 ring-bright-gold/45 hover:bg-gold/10 hover:text-white focus-visible:text-white",
          )}
          title={option.title}
          aria-pressed={locale === option.locale}
          onClick={() => setLocale(option.locale)}
        >
          <FlagIcon locale={option.locale} />
          {option.label}
        </button>
      ))}
    </div>
  );
}

function FlagIcon({ locale }: { locale: Locale }) {
  const baseClass = "h-3.5 w-5 shrink-0 overflow-hidden rounded-[3px] shadow-[0_0_12px_rgba(198,216,245,0.22)] ring-1 ring-white/35";

  if (locale === "fr") {
    return (
      <svg className={baseClass} viewBox="0 0 30 20" aria-hidden="true">
        <rect width="10" height="20" fill="#002395" />
        <rect x="10" width="10" height="20" fill="#ffffff" />
        <rect x="20" width="10" height="20" fill="#ed2939" />
      </svg>
    );
  }

  return (
    <svg className={baseClass} viewBox="0 0 60 40" aria-hidden="true">
      <clipPath id="uk-flag-clip">
        <rect width="60" height="40" rx="3" />
      </clipPath>
      <g clipPath="url(#uk-flag-clip)">
        <rect width="60" height="40" fill="#012169" />
        <path d="M0 0 60 40M60 0 0 40" stroke="#ffffff" strokeWidth="8" />
        <path d="M0 0 60 40M60 0 0 40" stroke="#c8102e" strokeWidth="4.8" />
        <path d="M30 0v40M0 20h60" stroke="#ffffff" strokeWidth="13" />
        <path d="M30 0v40M0 20h60" stroke="#c8102e" strokeWidth="8" />
      </g>
    </svg>
  );
}
