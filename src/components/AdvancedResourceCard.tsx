import { BookOpen, ExternalLink, Github, Heart } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";
import type { DictionaryKey } from "../i18n/types";
import type { AdvancedResource, AdvancedResourceCategoryId } from "../types/advanced";

type AdvancedResourceCardProps = {
  resource: AdvancedResource;
  isFavorite: boolean;
  onToggleFavorite: () => void;
};

const categoryLabelKeys: Record<Exclude<AdvancedResourceCategoryId, "all">, DictionaryKey> = {
  notebooks: "advanced.category.notebooks",
  data: "advanced.category.data",
  modeling: "advanced.category.modeling",
  llm: "advanced.category.llm",
  "ops-eval": "advanced.category.opsEval",
  visualization: "advanced.category.visualization",
};

export function AdvancedResourceCard({ resource, isFavorite, onToggleFavorite }: AdvancedResourceCardProps) {
  const { t } = useI18n();

  return (
    <article className="flex min-h-[390px] flex-col rounded-lg border border-white/10 bg-surface/80 p-4 shadow-[0_18px_56px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-ice-blue/30 hover:bg-[#242424]/90 sm:p-5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-lg font-black leading-tight text-text-primary">{resource.name}</h3>
          <p className="mt-1 text-xs font-black uppercase text-bright-gold">{resource.license}</p>
        </div>
        <button
          className={[
            "grid size-10 shrink-0 place-items-center rounded-lg border transition duration-200",
            isFavorite
              ? "border-bright-gold/45 bg-gold/15 text-bright-gold shadow-[0_0_24px_rgba(216,169,55,0.12)]"
              : "border-white/10 bg-white/[0.04] text-text-secondary hover:border-bright-gold/35 hover:bg-gold/10 hover:text-bright-gold",
          ].join(" ")}
          type="button"
          aria-label={isFavorite ? t("card.favorite.remove") : t("card.favorite.add")}
          aria-pressed={isFavorite}
          onClick={onToggleFavorite}
        >
          <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="mb-3 flex flex-wrap gap-2">
        {resource.categoryIds.map((categoryId) => (
          <span
            className="rounded-md border border-ice-blue/15 bg-ice-blue/10 px-2 py-1 text-[0.72rem] font-black uppercase text-ice-blue"
            key={categoryId}
          >
            {t(categoryLabelKeys[categoryId])}
          </span>
        ))}
      </div>

      <p className="text-sm leading-7 text-text-primary/90">{t(resource.summaryKey)}</p>

      <div className="mt-4 border-l-2 border-bright-gold py-1 pl-3">
        <strong className="block text-xs font-black uppercase text-bright-gold">{t("advanced.card.bestFor")}</strong>
        <span className="mt-1 block text-sm leading-6 text-text-secondary">{t(resource.fitKey)}</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {resource.tags.slice(0, 5).map((tag) => (
          <span
            className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[0.72rem] font-bold text-text-secondary"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-2 pt-5 text-xs font-bold text-text-secondary">
        <a
          className="inline-flex min-h-8 items-center gap-1.5 rounded-md border border-white/10 px-2.5 text-text-primary transition hover:border-ice-blue/35 hover:text-ice-blue"
          href={resource.homepageUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`${resource.name} ${t("card.links.visit")}`}
        >
          <ExternalLink size={16} />
          {t("card.links.visit")}
        </a>
        {resource.repoUrl ? (
          <a
            className="inline-flex min-h-8 items-center gap-1.5 rounded-md border border-white/10 px-2.5 text-text-primary transition hover:border-ice-blue/35 hover:text-ice-blue"
            href={resource.repoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${resource.name} ${t("card.links.repo")}`}
          >
            <Github size={16} />
            {t("card.links.repo")}
          </a>
        ) : null}
        {resource.docsUrl ? (
          <a
            className="inline-flex min-h-8 items-center gap-1.5 rounded-md border border-white/10 px-2.5 text-text-primary transition hover:border-ice-blue/35 hover:text-ice-blue"
            href={resource.docsUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${resource.name} ${t("card.links.docs")}`}
          >
            <BookOpen size={16} />
            {t("card.links.docs")}
          </a>
        ) : null}
      </div>
    </article>
  );
}
