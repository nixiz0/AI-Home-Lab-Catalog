import type { Category } from "../types/catalog";

export const categories: Category[] = [
  { id: "all", icon: "all", labelKey: "category.all" },
  { id: "interface", icon: "interface", labelKey: "category.interface" },
  { id: "local-server", icon: "server", labelKey: "category.localServer" },
  { id: "image-generation", icon: "image", labelKey: "category.imageGeneration" },
  { id: "voice", icon: "voice", labelKey: "category.voice" },
  { id: "agents", icon: "agents", labelKey: "category.agents" },
  { id: "automation", icon: "automation", labelKey: "category.automation" },
  { id: "models", icon: "models", labelKey: "category.models" },
  { id: "rag", icon: "rag", labelKey: "category.rag" },
];
