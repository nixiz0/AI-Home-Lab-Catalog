import {
  Boxes,
  Cpu,
  Heart,
  Image,
  LayoutDashboard,
  ServerCog,
  Workflow,
} from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";
import type { Category, CategoryId } from "../types/catalog";
import { cn } from "../utils/classNames";

type CatalogFiltersProps = {
  categories: Category[];
  activeCategory: CategoryId;
  categoryCounts: Map<CategoryId, number>;
  favoriteCount: number;
  showFavoritesOnly: boolean;
  onCategoryChange: (category: CategoryId) => void;
  onFavoritesToggle: () => void;
};

const categoryIcons = {
  all: Boxes,
  apps: LayoutDashboard,
  models: Cpu,
  servers: ServerCog,
  images: Image,
  workflows: Workflow,
};

export function CatalogFilters({
  categories,
  activeCategory,
  categoryCounts,
  favoriteCount,
  showFavoritesOnly,
  onCategoryChange,
  onFavoritesToggle,
}: CatalogFiltersProps) {
  const { t } = useI18n();

  return (
    <div className="mb-4" aria-label="Project filters">
      <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:thin]">
        <button
          className={cn(
            "inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-lg border px-3 text-sm font-black text-text-secondary transition duration-200",
            "border-white/10 bg-white/[0.04] hover:border-bright-gold/35 hover:bg-gold/10 hover:text-bright-gold",
            showFavoritesOnly &&
              "border-bright-gold/50 bg-gold/10 text-bright-gold shadow-[0_10px_34px_rgba(216,169,55,0.14)] hover:bg-gold/10 hover:text-bright-gold",
          )}
          type="button"
          aria-pressed={showFavoritesOnly}
          onClick={onFavoritesToggle}
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

        {categories.map((category) => {
          const Icon = categoryIcons[category.icon];
          const isActive = activeCategory === category.id;
          const count = category.id === "all" ? categoryCounts.get("all") : categoryCounts.get(category.id);

          return (
            <button
              key={category.id}
              className={cn(
                "inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-lg border px-3 text-sm font-black text-text-secondary transition duration-200",
                "border-white/10 bg-white/[0.04] hover:border-ice-blue/35 hover:bg-ice-blue/10 hover:text-ice-blue",
                isActive && "border-ice-blue/45 bg-ice-blue text-background shadow-[0_10px_34px_rgba(185,201,232,0.18)] hover:bg-ice-blue hover:text-background",
              )}
              type="button"
              aria-pressed={isActive}
              onClick={() => onCategoryChange(category.id)}
            >
              <Icon size={17} className={cn("shrink-0", isActive ? "text-background" : "text-ice-blue")} />
              <span>{t(category.labelKey)}</span>
              <strong
                className={cn(
                  "grid min-w-6 place-items-center rounded-md px-1.5 py-0.5 text-xs",
                  isActive ? "bg-background/15 text-background" : "bg-white/10 text-text-primary",
                )}
              >
                {count ?? 0}
              </strong>
            </button>
          );
        })}
      </div>
    </div>
  );
}
