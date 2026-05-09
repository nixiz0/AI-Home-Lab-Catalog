export type AdvancedResourceCategoryId =
  | "all"
  | "notebooks"
  | "data"
  | "modeling"
  | "llm"
  | "ops-eval"
  | "visualization";

export type AdvancedResourceCategory = {
  id: AdvancedResourceCategoryId;
  labelKey: string;
};

export type AdvancedResource = {
  id: string;
  name: string;
  categoryIds: Exclude<AdvancedResourceCategoryId, "all">[];
  summaryKey: string;
  fitKey: string;
  license: string;
  homepageUrl: string;
  repoUrl?: string;
  docsUrl?: string;
  tags: string[];
  searchAliases: string[];
};
