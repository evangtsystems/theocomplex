"use client";

import { useLang } from "./LanguageProvider";

import enHero from "./resources/en/hero.json";
import elHero from "./resources/el/hero.json";

const dictionaries = {
  en: {
    hero: enHero,
  },
  el: {
    hero: elHero,
  },
};

type Namespace = keyof typeof dictionaries.en;

export function useComponentTranslations(namespace: Namespace) {
  const { lang } = useLang();

  return dictionaries[lang][namespace] as Record<string, string>;
}