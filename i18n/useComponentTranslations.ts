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

import enExperiencePage from "./resources/en/experiencePage.json";
import elExperiencePage from "./resources/el/experiencePage.json";

import enLocationPage from "./resources/en/locationPage.json";
import elLocationPage from "./resources/el/locationPage.json";

import enGalleryPage from "./resources/en/galleryPage.json";
import elGalleryPage from "./resources/el/galleryPage.json";

import enAboutPage from "./resources/en/aboutPage.json";
import elAboutPage from "./resources/el/aboutPage.json";

import enContactPage from "./resources/en/contactPage.json";
import elContactPage from "./resources/el/contactPage.json";


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
    experiencePage: enExperiencePage,
    locationPage: enLocationPage,
    galleryPage: enGalleryPage,
    aboutPage: enAboutPage,
    contactPage: enContactPage,
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
    experiencePage: elExperiencePage,
    locationPage: elLocationPage,
    galleryPage: elGalleryPage,
    aboutPage: elAboutPage,
    contactPage: elContactPage,
  },
};

type Namespace = keyof typeof dictionaries.en;

export function useComponentTranslations(namespace: Namespace) {
  const { lang } = useLang();

  return dictionaries[lang][namespace] as Record<string, string>;
}