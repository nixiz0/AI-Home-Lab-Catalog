import type { DictionaryKey } from "../i18n/types";
import type { CategoryId, Project } from "../types/catalog";

type FilterProjectsInput = {
  projects: Project[];
  query: string;
  activeCategory: CategoryId;
  showFavoritesOnly: boolean;
  favoriteIds: Set<string>;
  translate: (key: DictionaryKey) => string;
};

export function filterProjects({
  projects,
  query,
  activeCategory,
  showFavoritesOnly,
  favoriteIds,
  translate,
}: FilterProjectsInput) {
  const normalizedQuery = normalize(query);

  return projects
    .filter((project) => activeCategory === "all" || project.categoryIds.includes(activeCategory))
    .filter((project) => !showFavoritesOnly || favoriteIds.has(project.id))
    .filter((project) => {
      if (!normalizedQuery) {
        return true;
      }

      const searchableText = [
        project.name,
        project.license,
        project.tags.join(" "),
        project.searchAliases.join(" "),
        translate(project.summaryKey),
        translate(project.needsKey),
        translate(project.licenseNoteKey),
      ].join(" ");

      return normalize(searchableText).includes(normalizedQuery);
    })
    .sort((left, right) => Number(favoriteIds.has(right.id)) - Number(favoriteIds.has(left.id)) || left.name.localeCompare(right.name));
}

export function getCategoryCounts(projects: Project[]) {
  const counts = new Map<CategoryId, number>([["all", projects.length]]);

  for (const project of projects) {
    for (const categoryId of project.categoryIds) {
      counts.set(categoryId, (counts.get(categoryId) ?? 0) + 1);
    }
  }

  return counts;
}

function normalize(value: string) {
  return value.trim().toLocaleLowerCase();
}
