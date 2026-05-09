import { useMemo, useState } from "react";
import {
  BadgeCheck,
  BookOpen,
  Bot,
  Boxes,
  ChartNoAxesCombined,
  Database,
  FlaskConical,
  Gauge,
  Heart,
  Image as ImageIcon,
  RotateCcw,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { AdvancedResourceCard } from "../components/AdvancedResourceCard";
import { advancedResourceCategories, advancedResources } from "../data/advancedResources";
import { useFavorites } from "../hooks/useFavorites";
import { useI18n } from "../i18n/I18nProvider";
import type { AdvancedResourceCategoryId } from "../types/advanced";
import { filterAdvancedResources, getAdvancedCategoryCounts } from "../utils/advancedResources";
import { cn } from "../utils/classNames";
import { advancedFavoritesStorageKey } from "../utils/storage";

const categoryIcons = {
  all: Boxes,
  notebooks: BookOpen,
  data: Database,
  modeling: ChartNoAxesCombined,
  llm: Bot,
  "ops-eval": Gauge,
  visualization: ImageIcon,
};

const labFlow = [
  {
    icon: BookOpen,
    titleKey: "advanced.flow.notebooks.title",
    bodyKey: "advanced.flow.notebooks.body",
    tools: ["JupyterLab", "marimo"],
  },
  {
    icon: Database,
    titleKey: "advanced.flow.data.title",
    bodyKey: "advanced.flow.data.body",
    tools: ["NumPy", "pandas", "Polars", "DuckDB", "Qdrant"],
  },
  {
    icon: ChartNoAxesCombined,
    titleKey: "advanced.flow.model.title",
    bodyKey: "advanced.flow.model.body",
    tools: ["scikit-learn", "XGBoost", "LightGBM", "PyTorch", "JAX"],
  },
  {
    icon: Bot,
    titleKey: "advanced.flow.llm.title",
    bodyKey: "advanced.flow.llm.body",
    tools: ["Transformers", "Qdrant", "Arena", "LLM Visualization"],
  },
  {
    icon: Gauge,
    titleKey: "advanced.flow.opsEval.title",
    bodyKey: "advanced.flow.opsEval.body",
    tools: ["MLflow", "Ray", "Optuna"],
  },
  {
    icon: ImageIcon,
    titleKey: "advanced.flow.visualization.title",
    bodyKey: "advanced.flow.visualization.body",
    tools: ["Matplotlib", "seaborn"],
  },
];

export function AdvancedLabPage() {
  const { t } = useI18n();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<AdvancedResourceCategoryId>("all");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const { favoriteIds, toggleFavorite } = useFavorites(
    advancedResources.map((resource) => resource.id),
    advancedFavoritesStorageKey,
  );

  const categoryCounts = useMemo(() => getAdvancedCategoryCounts(advancedResources), []);
  const filteredResources = useMemo(
    () =>
      filterAdvancedResources({
        resources: advancedResources,
        query,
        activeCategory,
        showFavoritesOnly,
        favoriteIds,
        translate: t,
      }),
    [activeCategory, favoriteIds, query, showFavoritesOnly, t],
  );

  const favoriteCount = favoriteIds.size;
  const hasFilters = query.trim().length > 0 || activeCategory !== "all" || showFavoritesOnly;

  const resetFilters = () => {
    setQuery("");
    setActiveCategory("all");
    setShowFavoritesOnly(false);
  };

  const handleCategoryChange = (category: AdvancedResourceCategoryId) => {
    setActiveCategory(category);
    setShowFavoritesOnly(false);
  };

  const handleFavoritesToggle = () => {
    setActiveCategory("all");
    setShowFavoritesOnly((value) => !value);
  };

  return (
    <div className="py-10 sm:py-14 lg:py-16">
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(320px,0.55fr)] lg:items-end">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-ice-blue/20 bg-ice-blue/10 px-3 py-1.5 text-xs font-black uppercase text-ice-blue">
            <FlaskConical size={14} aria-hidden="true" />
            {t("advanced.eyebrow")}
          </p>
          <h1 className="max-w-4xl text-balance text-[clamp(2.55rem,7vw,5.7rem)] font-black leading-[0.92] tracking-normal text-text-primary">
            {t("advanced.title")}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">{t("advanced.subtitle")}</p>
        </div>

        <div className="rounded-lg border border-ice-blue/15 bg-surface/80 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.32)]">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-black uppercase text-bright-gold">{t("advanced.snapshot.title")}</span>
            <BadgeCheck size={18} className="text-ice-blue" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Metric label={t("advanced.snapshot.resources")} value={advancedResources.length.toString()} />
            <Metric label={t("advanced.snapshot.open")} value={t("advanced.snapshot.openValue")} />
            <Metric label={t("advanced.snapshot.local")} value={t("advanced.snapshot.localValue")} />
            <Metric label={t("advanced.snapshot.updated")} value="2026" />
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase text-bright-gold">{t("advanced.flow.eyebrow")}</p>
            <h2 className="mt-1 text-2xl font-black text-text-primary">{t("advanced.flow.title")}</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-text-secondary">{t("advanced.flow.helper")}</p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {labFlow.map((step) => {
            const Icon = step.icon;

            return (
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3" key={step.titleKey}>
                <Icon size={19} className="text-ice-blue" />
                <h3 className="mt-3 text-sm font-black text-text-primary">{t(step.titleKey)}</h3>
                <p className="mt-2 text-xs leading-5 text-text-secondary">{t(step.bodyKey)}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {step.tools.map((tool) => (
                    <span className="rounded-md border border-white/10 px-2 py-1 text-[0.68rem] font-bold text-text-secondary" key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative mt-10 scroll-mt-24" aria-labelledby="advanced-directory-title">
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-black uppercase text-bright-gold">{t("advanced.directory.eyebrow")}</p>
            <h2 id="advanced-directory-title" className="text-balance text-[clamp(2rem,5vw,3.4rem)] font-black leading-tight text-text-primary">
              {t("advanced.directory.title")}
            </h2>
          </div>
          <div className="inline-flex min-h-10 items-center gap-2 self-start rounded-lg border border-ice-blue/15 bg-white/[0.04] px-3 text-sm font-bold text-text-secondary sm:self-auto">
            <BadgeCheck size={17} className="text-ice-blue" />
            <span>
              {filteredResources.length} {t("catalog.results")}
            </span>
          </div>
        </div>

        <div className="mb-4 rounded-lg border border-ice-blue/15 bg-surface/85 p-3 shadow-[0_18px_56px_rgba(0,0,0,0.24)]" role="search">
          <label
            className="flex min-h-14 items-center gap-3 rounded-lg border border-white/10 bg-black/35 px-4 transition duration-200 focus-within:border-ice-blue/45 focus-within:shadow-[0_0_0_4px_rgba(185,201,232,0.08)]"
            htmlFor="advanced-search"
          >
            <span className="sr-only">{t("advanced.search.label")}</span>
            <Search className="shrink-0 text-ice-blue" size={20} aria-hidden="true" />
            <input
              id="advanced-search"
              className="min-w-0 flex-1 bg-transparent text-base text-text-primary outline-none placeholder:text-text-secondary/65"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t("advanced.search.placeholder")}
              autoComplete="off"
            />
          </label>
        </div>

        <div className="mb-4 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:thin]" aria-label={t("advanced.filters.label")}>
          <button
            className={cn(
              "inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-lg border px-3 text-sm font-black text-text-secondary transition duration-200",
              "border-white/10 bg-white/[0.04] hover:border-bright-gold/35 hover:bg-gold/10 hover:text-bright-gold",
              showFavoritesOnly &&
                "border-bright-gold/50 bg-gold/10 text-bright-gold shadow-[0_10px_34px_rgba(216,169,55,0.14)] hover:bg-gold/10 hover:text-bright-gold",
            )}
            type="button"
            aria-pressed={showFavoritesOnly}
            onClick={handleFavoritesToggle}
          >
            <Heart size={17} className="shrink-0 text-bright-gold" />
            <span>{t("filters.favorites")}</span>
            <strong
              className={cn(
                "grid min-w-6 place-items-center rounded-md px-1.5 py-0.5 text-xs",
                showFavoritesOnly ? "bg-bright-gold/15 text-bright-gold" : "bg-white/10 text-text-primary",
              )}
            >
              {favoriteCount}
            </strong>
          </button>

          {advancedResourceCategories.map((category) => {
            const Icon = categoryIcons[category.id];
            const isActive = activeCategory === category.id;

            return (
              <button
                className={cn(
                  "inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-lg border px-3 text-sm font-black text-text-secondary transition duration-200",
                  "border-white/10 bg-white/[0.04] hover:border-ice-blue/35 hover:bg-ice-blue/10 hover:text-ice-blue",
                  isActive &&
                    "border-ice-blue/45 bg-ice-blue text-background shadow-[0_10px_34px_rgba(185,201,232,0.18)] hover:bg-ice-blue hover:text-background",
                )}
                type="button"
                aria-pressed={isActive}
                onClick={() => handleCategoryChange(category.id)}
                key={category.id}
              >
                <Icon size={17} className={cn("shrink-0", isActive ? "text-background" : "text-ice-blue")} />
                <span>{t(category.labelKey)}</span>
                <strong
                  className={cn(
                    "grid min-w-6 place-items-center rounded-md px-1.5 py-0.5 text-xs",
                    isActive ? "bg-background/15 text-background" : "bg-white/10 text-text-primary",
                  )}
                >
                  {categoryCounts.get(category.id) ?? 0}
                </strong>
              </button>
            );
          })}
        </div>

        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center">
          {hasFilters ? (
            <button
              className="inline-flex min-h-10 w-fit items-center justify-center gap-2 rounded-lg border border-white/15 bg-transparent px-4 text-sm font-black text-text-secondary transition duration-200 hover:border-bright-gold/35 hover:bg-gold/10 hover:text-bright-gold"
              type="button"
              onClick={resetFilters}
            >
              <RotateCcw size={16} />
              {t("filters.reset")}
            </button>
          ) : null}
          <div className="inline-flex items-center gap-2 text-sm font-bold text-text-secondary" aria-hidden="true">
            <SlidersHorizontal size={17} className="text-steel-blue" />
            <span>{t("advanced.directory.helper")}</span>
          </div>
        </div>

        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredResources.map((resource) => (
              <AdvancedResourceCard
                key={resource.id}
                resource={resource}
                isFavorite={favoriteIds.has(resource.id)}
                onToggleFavorite={() => toggleFavorite(resource.id)}
              />
            ))}
          </div>
        ) : (
          <div className="grid min-h-[220px] place-items-center rounded-lg border border-ice-blue/15 bg-surface/70 p-8 text-center shadow-[0_22px_70px_rgba(0,0,0,0.28)]">
            <div>
              <Search className="mx-auto text-bright-gold" size={34} />
              <h3 className="mt-4 text-2xl font-black text-text-primary">{t("advanced.empty.title")}</h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-text-secondary">{t("advanced.empty.description")}</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 border-t border-white/10 pt-3">
      <span className="block truncate text-xs font-bold text-text-secondary">{label}</span>
      <strong className="mt-1 block truncate text-sm font-black text-text-primary">{value}</strong>
    </div>
  );
}
