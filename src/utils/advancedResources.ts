import type { AdvancedResource, AdvancedResourceCategoryId } from "../types/advanced";

type FilterAdvancedResourcesInput = {
  resources: AdvancedResource[];
  query: string;
  activeCategory: AdvancedResourceCategoryId;
  showFavoritesOnly: boolean;
  favoriteIds: Set<string>;
  translate: (key: string) => string;
};

export function filterAdvancedResources({
  resources,
  query,
  activeCategory,
  showFavoritesOnly,
  favoriteIds,
  translate,
}: FilterAdvancedResourcesInput) {
  const normalizedQuery = normalize(query);

  return resources
    .filter((resource) => activeCategory === "all" || resource.categoryIds.includes(activeCategory))
    .filter((resource) => !showFavoritesOnly || favoriteIds.has(resource.id))
    .filter((resource) => {
      if (!normalizedQuery) {
        return true;
      }

      const searchableText = [
        resource.name,
        resource.license,
        resource.tags.join(" "),
        resource.searchAliases.join(" "),
        translate(resource.summaryKey),
        translate(resource.fitKey),
      ].join(" ");

      return normalize(searchableText).includes(normalizedQuery);
    })
    .sort((left, right) => Number(favoriteIds.has(right.id)) - Number(favoriteIds.has(left.id)) || left.name.localeCompare(right.name));
}

export function getAdvancedCategoryCounts(resources: AdvancedResource[]) {
  const counts = new Map<AdvancedResourceCategoryId, number>([["all", resources.length]]);

  for (const resource of resources) {
    for (const categoryId of resource.categoryIds) {
      counts.set(categoryId, (counts.get(categoryId) ?? 0) + 1);
    }
  }

  return counts;
}

function normalize(value: string) {
  return value.trim().toLocaleLowerCase();
}
