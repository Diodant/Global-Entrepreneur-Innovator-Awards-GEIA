
import { useMemo } from "react";
import { NEWS } from "./newsData";

export default function useNewsData() {

  const items = useMemo(() => {

    return [...NEWS];
  }, []);

  const bySlug = useMemo(() => {
    const map = new Map();
    for (const n of items) map.set(n.slug, n);
    return map;
  }, [items]);

  return { items, bySlug };
}
