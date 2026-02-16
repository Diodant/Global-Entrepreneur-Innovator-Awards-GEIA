// src/pages/data/useNewsData.js
import { useMemo } from "react";
import { useI18n } from "../../components/I18nProvider";

import { NEWS_EN } from "./newsData";
import { NEWS_RU } from "./newsData.ru";

export default function useNewsData() {
  const { lang } = useI18n();

  const items = useMemo(() => {
    return lang === "ru" ? NEWS_RU : NEWS_EN;
  }, [lang]);

  const bySlug = useMemo(() => {
    return new Map(items.map((i) => [i.slug, i]));
  }, [items]);

  return { items, bySlug };
}
