import en_common from "./resources/en/common.json";
import el_common from "./resources/el/common.json";

import en_header from "./resources/en/header.json";
import el_header from "./resources/el/header.json";

import en_hero from "./resources/en/hero.json";
import el_hero from "./resources/el/hero.json";

import en_lifestyle from "./resources/en/lifestyle.json";
import el_lifestyle from "./resources/el/lifestyle.json";

const dictionaries = {
  en: {
    common: en_common,
    header: en_header,
    hero: en_hero,
    lifestyle: en_lifestyle,
  },
  el: {
    common: el_common,
    header: el_header,
    hero: el_hero,
    lifestyle: el_lifestyle,
  },
};

export function getT(lang: "en" | "el", section: keyof typeof dictionaries.en) {
  return dictionaries[lang][section];
}