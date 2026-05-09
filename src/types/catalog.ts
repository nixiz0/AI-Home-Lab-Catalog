export type CategoryId =
  | "all"
  | "apps"
  | "models"
  | "servers"
  | "images"
  | "workflows";

export type CommercialStatus = "friendly" | "caution" | "restricted" | "proprietary";

export type OpennessStatus = "open-source" | "source-available" | "proprietary-free" | "model-license";

export type Category = {
  id: CategoryId;
  icon: "all" | "apps" | "models" | "servers" | "images" | "workflows";
  labelKey: string;
};

export type Project = {
  id: string;
  name: string;
  categoryIds: Exclude<CategoryId, "all">[];
  summaryKey: string;
  needsKey: string;
  licenseNoteKey: string;
  websiteUrl: string;
  repoUrl?: string;
  docsUrl?: string;
  logoUrl?: string;
  license: string;
  openness: OpennessStatus;
  commercialStatus: CommercialStatus;
  tags: string[];
  searchAliases: string[];
};
