import type { DictionaryKey } from "../i18n/types";

export type CategoryId =
  | "all"
  | "apps"
  | "mobile"
  | "models"
  | "servers"
  | "images"
  | "workflows";

export type CommercialStatus = "friendly" | "caution" | "restricted" | "proprietary";

export type OpennessStatus = "open-source" | "source-available" | "proprietary-free" | "model-license";

export type Category = {
  id: CategoryId;
  icon: "all" | "apps" | "mobile" | "models" | "servers" | "images" | "workflows";
  labelKey: DictionaryKey;
};

export type ProjectLink = {
  labelKey: DictionaryKey;
  url: string;
};

export type Project = {
  id: string;
  name: string;
  categoryIds: Exclude<CategoryId, "all">[];
  summaryKey: DictionaryKey;
  needsKey: DictionaryKey;
  licenseNoteKey: DictionaryKey;
  websiteUrl: string;
  websiteLabelKey?: DictionaryKey;
  repoUrl?: string;
  docsUrl?: string;
  extraLinks?: ProjectLink[];
  license: string;
  openness: OpennessStatus;
  commercialStatus: CommercialStatus;
  tags: string[];
  searchAliases: string[];
};
