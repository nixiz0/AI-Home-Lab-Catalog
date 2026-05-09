import { useMemo, useState } from "react";
import { readStoredFavorites, writeStoredFavorites } from "../utils/storage";

export function useFavorites(validIds: string[]) {
  const validIdSet = useMemo(() => new Set(validIds), [validIds]);
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(() => readStoredFavorites(validIdSet));

  const toggleFavorite = (projectId: string) => {
    if (!validIdSet.has(projectId)) {
      return;
    }

    setFavoriteIds((current) => {
      const next = new Set(current);

      if (next.has(projectId)) {
        next.delete(projectId);
      } else {
        next.add(projectId);
      }

      writeStoredFavorites(next, validIds);
      return next;
    });
  };

  return { favoriteIds, toggleFavorite };
}
