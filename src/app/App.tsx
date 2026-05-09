import { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Cpu,
  Heart,
  Image as ImageIcon,
  Languages,
  LockKeyhole,
  Mic2,
  PanelTop,
  RotateCcw,
  Search,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import { CatalogFilters } from "../components/CatalogFilters";
import { EmptyState } from "../components/EmptyState";
import { LanguageSwitch } from "../components/LanguageSwitch";
import { ProjectCard } from "../components/ProjectCard";
import { StatPill } from "../components/StatPill";
import { projects } from "../data/projects";
import { categories } from "../data/taxonomy";
import { useFavorites } from "../hooks/useFavorites";
import { useI18n } from "../i18n/I18nProvider";
import { filterProjects, getCategoryCounts } from "../utils/catalog";
import type { CategoryId } from "../types/catalog";

export function App() {
  const { t } = useI18n();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const { favoriteIds, toggleFavorite } = useFavorites(projects.map((project) => project.id));

  const categoryCounts = useMemo(() => getCategoryCounts(projects), []);
  const filteredProjects = useMemo(
    () =>
      filterProjects({
        projects,
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

  const handleCategoryChange = (category: CategoryId) => {
    setActiveCategory(category);
    setShowFavoritesOnly(false);
  };

  const handleFavoritesToggle = () => {
    setActiveCategory("all");
    setShowFavoritesOnly((value) => !value);
  };

  return (
    <div className="site-shell min-h-screen overflow-x-hidden bg-background text-text-primary">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-background/75 backdrop-blur-2xl">
        <div className="mx-auto flex w-[min(1180px,calc(100%-1.5rem))] items-center justify-between gap-3 py-3 sm:w-[min(1180px,calc(100%-2rem))] sm:py-4">
          <a
            className="group inline-flex min-w-0 items-center gap-3 text-sm font-black text-text-primary transition hover:text-bright-gold sm:text-base"
            href="/"
            aria-label="AI Home Lab Catalog"
          >
            <img
              className="brand-logo brand-logo-sm transition duration-300 group-hover:scale-105 group-hover:shadow-[0_0_42px_rgba(244,211,107,0.28)]"
              src="/logo.svg"
              alt=""
              aria-hidden="true"
            />
            <span className="truncate">AI Home Lab Catalog</span>
          </a>

          <div className="flex shrink-0 items-center gap-2">
            <LanguageSwitch />
          </div>
        </div>
      </header>

      <main className="mx-auto w-[min(1180px,calc(100%-1.5rem))] pb-16 sm:w-[min(1180px,calc(100%-2rem))] lg:pb-24">
        <section
          className="relative grid min-h-[calc(100vh-72px)] grid-cols-1 items-center gap-8 overflow-hidden py-10 sm:py-14 lg:grid-cols-[minmax(0,1.03fr)_minmax(340px,0.72fr)] lg:gap-10"
          aria-labelledby="hero-title"
        >
          <div className="relative z-10 max-w-3xl animate-fade-up">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-ice-blue/20 bg-ice-blue/10 px-3 py-1.5 text-xs font-black uppercase text-ice-blue">
              <LockKeyhole size={14} aria-hidden="true" />
              {t("hero.eyebrow")}
            </p>
            <h1
              id="hero-title"
              className="max-w-4xl text-balance text-[clamp(3rem,9vw,6.9rem)] font-black leading-[0.9] tracking-normal text-text-primary"
            >
              AI Home Lab Catalog
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg lg:text-xl lg:leading-9">
              {t("hero.subtitle")}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#catalog"
                className="gold-sheen inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-bright-gold/35 bg-gold px-5 text-sm font-black text-[#151109] shadow-[0_16px_46px_rgba(216,169,55,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-bright-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bright-gold"
              >
                {t("hero.primaryAction")}
                <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a
                href="#catalog-search"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-ice-blue/20 bg-white/[0.04] px-5 text-sm font-black text-ice-blue transition duration-300 hover:-translate-y-0.5 hover:border-ice-blue/45 hover:bg-ice-blue/10"
              >
                <Search size={17} aria-hidden="true" />
                {t("hero.secondaryAction")}
              </a>
            </div>
          </div>

          <div
            className="lab-visual relative min-h-[430px] overflow-hidden rounded-lg border border-ice-blue/15 bg-surface/70 shadow-[0_24px_80px_rgba(0,0,0,0.46)] backdrop-blur-xl sm:min-h-[460px]"
            aria-hidden="true"
          >
            <div className="arctic-channel-band absolute left-4 right-4 top-4 z-10 h-28 overflow-hidden rounded-lg border border-white/10 sm:h-32">
              <img
                className="brand-logo brand-logo-lg absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
                src="/logo.svg"
                alt=""
              />
            </div>

            <div className="lab-node node-openwebui">
              <span className="lab-node-icon">
                <PanelTop size={28} aria-hidden="true" />
              </span>
            </div>
            <div className="lab-node node-ollama">
              <span className="lab-node-icon">
                <Cpu size={29} aria-hidden="true" />
              </span>
            </div>
            <div className="lab-node node-comfy">
              <span className="lab-node-icon">
                <ImageIcon size={28} aria-hidden="true" />
              </span>
            </div>
            <div className="lab-node node-voice">
              <span className="lab-node-icon">
                <Mic2 size={28} aria-hidden="true" />
              </span>
            </div>
            <span className="lab-line line-one" />
            <span className="lab-line line-two" />
            <span className="lab-line line-three" />

            <div className="absolute bottom-4 left-4 right-4 z-20 rounded-lg border border-ice-blue/15 bg-black/60 p-2.5 shadow-[0_16px_38px_rgba(0,0,0,0.28)] backdrop-blur-md sm:p-3">
              <div className="flex items-center justify-between gap-3 text-xs font-black uppercase text-text-secondary">
                <span className="inline-flex items-center gap-2 text-ice-blue">
                  <span className="size-2 rounded-full bg-bright-gold shadow-[0_0_18px_rgba(244,211,107,0.8)]" />
                  {t("hero.visual.status")}
                </span>
                <span className="rounded-md border border-white/10 px-2 py-1 text-[0.68rem] text-text-secondary">LOCAL</span>
              </div>
              <div className="mt-2 grid grid-cols-3 gap-2 text-center text-[0.66rem] font-black uppercase text-text-secondary sm:mt-3">
                <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1.5">{t("hero.visual.private")}</span>
                <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1.5">{t("hero.visual.open")}</span>
                <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1.5">{t("hero.visual.selfhost")}</span>
              </div>
            </div>
          </div>

          <div
            className="search-panel relative z-20 rounded-lg border border-ice-blue/15 bg-surface/85 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.36)] backdrop-blur-2xl sm:p-4 lg:col-span-2"
            role="search"
          >
            <label
              className="flex min-h-14 items-center gap-3 rounded-lg border border-white/10 bg-black/35 px-4 transition duration-200 focus-within:border-ice-blue/45 focus-within:shadow-[0_0_0_4px_rgba(185,201,232,0.08)]"
              htmlFor="catalog-search"
            >
              <span className="sr-only">{t("search.label")}</span>
              <Search className="shrink-0 text-ice-blue" size={20} aria-hidden="true" />
              <input
                id="catalog-search"
                className="min-w-0 flex-1 bg-transparent text-base text-text-primary outline-none placeholder:text-text-secondary/65"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={t("search.placeholder")}
                autoComplete="off"
              />
            </label>
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4" aria-label={t("stats.label")}>
              <StatPill icon={Boxes} label={t("stats.projects")} value={projects.length.toString()} />
              <StatPill icon={Heart} label={t("stats.favorites")} value={favoriteCount.toString()} />
              <StatPill icon={Languages} label={t("stats.languages")} value="EN / FR" />
              <StatPill icon={ShieldCheck} label={t("stats.licenseAware")} value={t("stats.yes")} />
            </div>
          </div>
        </section>

        <section id="catalog" className="relative scroll-mt-24 pt-8" aria-labelledby="catalog-title">
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-black uppercase text-bright-gold">{t("catalog.eyebrow")}</p>
              <h2 id="catalog-title" className="text-balance text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight text-text-primary">
                {t("catalog.title")}
              </h2>
            </div>
            <div className="inline-flex min-h-10 items-center gap-2 self-start rounded-lg border border-ice-blue/15 bg-white/[0.04] px-3 text-sm font-bold text-text-secondary sm:self-auto">
              <BadgeCheck size={17} className="text-ice-blue" />
              <span>
                {filteredProjects.length} {t("catalog.results")}
              </span>
            </div>
          </div>

          <CatalogFilters
            categories={categories}
            activeCategory={activeCategory}
            categoryCounts={categoryCounts}
            favoriteCount={favoriteCount}
            showFavoritesOnly={showFavoritesOnly}
            onCategoryChange={handleCategoryChange}
            onFavoritesToggle={handleFavoritesToggle}
          />

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
              <span>{t("catalog.helper")}</span>
            </div>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isFavorite={favoriteIds.has(project.id)}
                  onToggleFavorite={() => toggleFavorite(project.id)}
                />
              ))}
            </div>
          ) : (
            <EmptyState onReset={resetFilters} />
          )}
        </section>
      </main>
    </div>
  );
}
