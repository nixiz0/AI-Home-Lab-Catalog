import { Instagram, Linkedin, Youtube, type LucideIcon } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";
import type { DictionaryKey } from "../i18n/types";

type SocialLink = {
  labelKey: DictionaryKey;
  href: string;
  icon: LucideIcon;
};

const socialLinks: SocialLink[] = [
  {
    labelKey: "footer.social.youtube",
    href: "https://www.youtube.com/@Initium0_0",
    icon: Youtube,
  },
  {
    labelKey: "footer.social.instagram",
    href: "https://www.instagram.com/real_initium/",
    icon: Instagram,
  },
  {
    labelKey: "footer.social.linkedin",
    href: "https://www.linkedin.com/in/julian-initium-a543a0250/",
    icon: Linkedin,
  },
];

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto flex w-[min(1180px,calc(100%-1.5rem))] flex-col gap-5 py-8 sm:w-[min(1180px,calc(100%-2rem))] md:flex-row md:items-center md:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <img className="brand-logo brand-logo-sm" src="/logo.svg" alt="" aria-hidden="true" />
          <div className="min-w-0">
            <strong className="block truncate text-sm font-black text-text-primary">AI Home Lab Catalog</strong>
            <p className="mt-1 text-sm leading-6 text-text-secondary">{t("footer.tagline")}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <span className="text-xs font-black uppercase text-bright-gold">{t("footer.social.label")}</span>
          <div className="flex flex-wrap gap-2">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              const label = t(link.labelKey);

              return (
                <a
                  className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 text-sm font-black text-text-primary transition duration-200 hover:-translate-y-0.5 hover:border-ice-blue/35 hover:bg-ice-blue/10 hover:text-ice-blue"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  key={link.href}
                >
                  <Icon size={18} aria-hidden="true" />
                  <span>{label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
