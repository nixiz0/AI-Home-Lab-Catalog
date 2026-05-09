export type CategoryId =
  | "all"
  | "interface"
  | "local-server"
  | "image-generation"
  | "voice"
  | "agents"
  | "automation"
  | "models"
  | "rag";

export type CommercialStatus = "friendly" | "caution" | "restricted" | "proprietary";

export type OpennessStatus = "open-source" | "source-available" | "proprietary-free" | "model-license";

export type Difficulty = "beginner" | "intermediate" | "advanced";

export type Category = {
  id: CategoryId;
  icon: "all" | "interface" | "server" | "image" | "voice" | "agents" | "automation" | "models" | "rag";
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
  difficulty: Difficulty;
  tags: string[];
  searchAliases: string[];
  verifiedAt: string;
  sourceRefs: string[];
};
