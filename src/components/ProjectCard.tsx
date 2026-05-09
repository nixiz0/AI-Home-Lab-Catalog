import { BookOpen, ExternalLink, Github, Heart } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";
import type { DictionaryKey } from "../i18n/types";
import type { CategoryId, OpennessStatus, Project } from "../types/catalog";
import { cn } from "../utils/classNames";

type ProjectCardProps = {
  project: Project;
  isFavorite: boolean;
  onToggleFavorite: () => void;
};

const categoryLabelKeys: Record<Exclude<CategoryId, "all">, DictionaryKey> = {
  apps: "category.apps",
  mobile: "category.mobile",
  models: "category.models",
  servers: "category.servers",
  images: "category.images",
  workflows: "category.workflows",
};

export function ProjectCard({ project, isFavorite, onToggleFavorite }: ProjectCardProps) {
  const { t } = useI18n();
  const visitLabel = project.websiteLabelKey ? t(project.websiteLabelKey) : t("card.links.visit");
  const extraLinks = project.extraLinks ?? [];
  const hasFeaturedLinks = extraLinks.length > 0;
  const featuredLinks = hasFeaturedLinks
    ? [{ label: visitLabel, url: project.websiteUrl }, ...extraLinks.map((link) => ({ label: t(link.labelKey), url: link.url }))]
    : [];

  return (
    <article className="project-card group flex min-h-[540px] flex-col rounded-lg border border-white/10 bg-surface/80 p-4 shadow-[0_18px_56px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-ice-blue/30 hover:bg-[#242424]/90 sm:p-5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-lg border border-ice-blue/20 bg-[linear-gradient(135deg,var(--deep-blue),var(--steel-blue)_58%,var(--gold))] text-sm font-black text-text-primary shadow-[0_0_28px_rgba(185,201,232,0.12)]">
            <span>{project.name.slice(0, 2)}</span>
          </div>
          <div className="min-w-0">
            <h3 className="truncate text-lg font-black leading-tight text-text-primary">{project.name}</h3>
          </div>
        </div>

        <button
          className={cn(
            "grid size-10 shrink-0 place-items-center rounded-lg border transition duration-200",
            isFavorite
              ? "border-bright-gold/45 bg-gold/15 text-bright-gold shadow-[0_0_24px_rgba(216,169,55,0.12)]"
              : "border-white/10 bg-white/[0.04] text-text-secondary hover:border-bright-gold/35 hover:bg-gold/10 hover:text-bright-gold",
          )}
          type="button"
          aria-label={isFavorite ? t("card.favorite.remove") : t("card.favorite.add")}
          aria-pressed={isFavorite}
          onClick={onToggleFavorite}
        >
          <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="mb-3 flex flex-wrap gap-2">
        {project.categoryIds.map((categoryId) => (
          <span
            className="rounded-md border border-ice-blue/15 bg-ice-blue/10 px-2 py-1 text-[0.72rem] font-black uppercase text-ice-blue"
            key={categoryId}
          >
            {t(categoryLabelKeys[categoryId])}
          </span>
        ))}
      </div>

      {featuredLinks.length > 0 ? (
        <div className="mb-4 flex flex-wrap gap-2">
          {featuredLinks.map((link) => (
            <a
              className="inline-flex min-h-9 items-center gap-1.5 rounded-md border border-ice-blue/20 bg-ice-blue/10 px-3 text-xs font-black text-ice-blue transition hover:border-ice-blue/45 hover:bg-ice-blue/15"
              href={link.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} ${link.label}`}
              key={link.url}
            >
              <ExternalLink size={16} />
              {link.label}
            </a>
          ))}
        </div>
      ) : null}

      <p className="mb-4 text-sm leading-7 text-text-primary/90">{t(project.summaryKey)}</p>

      <div className="border-l-2 border-bright-gold py-1 pl-3">
        <strong className="block text-xs font-black uppercase text-bright-gold">{t("card.bestFor")}</strong>
        <span className="mt-1 block text-sm leading-6 text-text-secondary">{t(project.needsKey)}</span>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 border-y border-white/10 py-4 sm:grid-cols-2">
        <div className="min-w-0">
          <span className="block text-xs font-bold text-text-secondary">{t("card.license")}</span>
          <strong className="mt-1 block text-sm font-black leading-5 text-text-primary">{project.license}</strong>
        </div>
        <div className="min-w-0">
          <span className="block text-xs font-bold text-text-secondary">{t("card.commercial")}</span>
          <strong className="mt-1 block text-sm font-black leading-5 text-text-primary">
            {t(`commercial.${project.commercialStatus}`)}
          </strong>
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-text-secondary">{t(project.licenseNoteKey)}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className={cn("rounded-md border px-2 py-1 text-[0.72rem] font-black uppercase", opennessClass(project.openness))}>
          {t(`openness.${project.openness}`)}
        </span>
        {project.tags.slice(0, 4).map((tag) => (
          <span
            className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[0.72rem] font-bold text-text-secondary"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-col gap-3 pt-5 text-xs font-bold text-text-secondary sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2 sm:justify-end">
          {!hasFeaturedLinks ? (
            <a
              className="inline-flex min-h-8 items-center gap-1.5 rounded-md border border-white/10 px-2.5 text-text-primary transition hover:border-ice-blue/35 hover:text-ice-blue"
              href={project.websiteUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} ${visitLabel}`}
            >
              <ExternalLink size={16} />
              {visitLabel}
            </a>
          ) : null}
          {project.repoUrl ? (
            <a
              className="inline-flex min-h-8 items-center gap-1.5 rounded-md border border-white/10 px-2.5 text-text-primary transition hover:border-ice-blue/35 hover:text-ice-blue"
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} ${t("card.links.repo")}`}
            >
              <Github size={16} />
              {t("card.links.repo")}
            </a>
          ) : null}
          {project.docsUrl ? (
            <a
              className="inline-flex min-h-8 items-center gap-1.5 rounded-md border border-white/10 px-2.5 text-text-primary transition hover:border-ice-blue/35 hover:text-ice-blue"
              href={project.docsUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} ${t("card.links.docs")}`}
            >
              <BookOpen size={16} />
              {t("card.links.docs")}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function opennessClass(openness: OpennessStatus) {
  const classes: Record<OpennessStatus, string> = {
    "model-license": "border-gold/35 bg-gold/15 text-bright-gold",
    "open-source": "border-ice-blue/25 bg-ice-blue/10 text-ice-blue",
    "proprietary-free": "border-steel-blue/35 bg-steel-blue/20 text-ice-blue",
    "source-available": "border-bright-gold/30 bg-bright-gold/10 text-bright-gold",
  };

  return classes[openness];
}
