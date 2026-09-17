import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "../data/translations.js";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "en";
    return localStorage.getItem("lang") || "en";
  });

  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", dir);
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // ignore storage errors
    }
  }, [lang, dir]);

  function toggleLang() {
    setLang((l) => (l === "en" ? "ar" : "en"));
  }

  return (
    <LanguageContext.Provider
      value={{ lang, dir, toggleLang, t: translations[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
