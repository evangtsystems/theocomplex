"use client";

import { useLang } from "./LanguageProvider";

import enHero from "./resources/en/hero.json";
import elHero from "./resources/el/hero.json";

import enHeader from "./resources/en/header.json";
import elHeader from "./resources/el/header.json";
import enAmenitiesLocation from "./resources/en/amenities-location.json";
import elAmenitiesLocation from "./resources/el/amenities-location.json";

import enApartmentGallery from "./resources/en/apartment-gallery.json";
import elApartmentGallery from "./resources/el/apartment-gallery.json";

import enApartmentShowcase from "./resources/en/apartmentShowcase.json";
import elApartmentShowcase from "./resources/el/apartmentShowcase.json";

import enContactForm from "./resources/en/contactForm.json";
import elContactForm from "./resources/el/contactForm.json";

import enCookieConsent from "./resources/en/cookieConsent.json";
import elCookieConsent from "./resources/el/cookieConsent.json";


import enExperienceSection from "./resources/en/experienceSection.json";
import elExperienceSection from "./resources/el/experienceSection.json";

import enLifestyleSection from "./resources/en/lifestyleSection.json";
import elLifestyleSection from "./resources/el/lifestyleSection.json";

import enFooter from "./resources/en/footer.json";
import elFooter from "./resources/el/footer.json";
const dictionaries = {
  en: {
    hero: enHero,
    header: enHeader,
    amenitiesLocation: enAmenitiesLocation,
    apartmentGallery: enApartmentGallery,
    apartmentShowcase: enApartmentShowcase,
    contactForm: enContactForm,
    cookieConsent: enCookieConsent,
    experienceSection: enExperienceSection,
    lifestyleSection: enLifestyleSection,
    footer: enFooter,
  },
  el: {
    hero: elHero,
    header: elHeader,
    amenitiesLocation: elAmenitiesLocation,
    apartmentGallery: elApartmentGallery,
    apartmentShowcase: elApartmentShowcase,
    contactForm: elContactForm,
    cookieConsent: elCookieConsent,
    experienceSection: elExperienceSection,
    lifestyleSection: elLifestyleSection,
    footer: elFooter,
  },
};

type Namespace = keyof typeof dictionaries.en;

export function useComponentTranslations(namespace: Namespace) {
  const { lang } = useLang();

  return dictionaries[lang][namespace] as Record<string, string>;
}