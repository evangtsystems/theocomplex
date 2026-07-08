"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Lang = "en" | "el";

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
}>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "el") {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  function setLang(newLang: Lang) {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.lang = newLang;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}