import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import ruMenu from "../components/ru.json";
import geiaRu from "../components/geia.ru.json";

const I18nContext = createContext(null);

// ✅ вытаскивает значение по пути "a.b.c" из вложенного объекта
const getByPath = (obj, path) => {
  if (!obj || !path) return undefined;

  // быстрый путь: если ключ реально плоский и существует как есть
  if (Object.prototype.hasOwnProperty.call(obj, path)) return obj[path];

  return path.split(".").reduce((acc, part) => {
    if (acc && Object.prototype.hasOwnProperty.call(acc, part)) return acc[part];
    return undefined;
  }, obj);
};

export const I18nProvider = ({ children }) => {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "en");

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  // Один общий словарь RU: меню + страницы
  const ruDict = useMemo(() => {
    return { ...ruMenu, ...geiaRu };
  }, []);

  // ✅ t() теперь понимает и плоские ключи, и вложенные через точку
  // Возвращает string / array / object (как лежит в JSON)
  const t = (key) => {
    if (lang !== "ru") return key;

    const v = getByPath(ruDict, key);
    return v === undefined ? key : v;
  };

  const value = useMemo(() => ({ lang, setLang, t }), [lang, ruDict]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
};
