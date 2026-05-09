import type { DictionaryKey } from "../i18n/types";

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
  labelKey: DictionaryKey;
};

export type AdvancedResource = {
  id: string;
  name: string;
  categoryIds: Exclude<AdvancedResourceCategoryId, "all">[];
  summaryKey: DictionaryKey;
  fitKey: DictionaryKey;
  license: string;
  homepageUrl: string;
  repoUrl?: string;
  docsUrl?: string;
  tags: string[];
  searchAliases: string[];
};
