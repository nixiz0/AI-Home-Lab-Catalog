import { SearchX } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";

type EmptyStateProps = {
  onReset: () => void;
};

export function EmptyState({ onReset }: EmptyStateProps) {
  const { t } = useI18n();

  return (
    <div className="grid min-h-[270px] place-items-center rounded-lg border border-ice-blue/15 bg-surface/70 p-8 text-center shadow-[0_22px_70px_rgba(0,0,0,0.28)]">
      <div>
        <SearchX className="mx-auto text-bright-gold" size={36} />
        <h3 className="mt-4 text-2xl font-black text-text-primary">{t("empty.title")}</h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-text-secondary">{t("empty.description")}</p>
      </div>
      <button
        className="mt-5 inline-flex min-h-11 items-center justify-center rounded-lg border border-bright-gold/35 bg-gold px-5 text-sm font-black text-[#151109] transition duration-300 hover:bg-bright-gold"
        type="button"
        onClick={onReset}
      >
        {t("empty.action")}
      </button>
    </div>
  );
}
