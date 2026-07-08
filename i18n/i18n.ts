import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Common
import en_common from "./resources/en/common.json";

// Components
import en_header from "./resources/en/header.json";
import en_hero from "./resources/en/hero.json";
import en_lifestyle from "./resources/en/lifestyle.json";
import en_apartmentShowcase from "./resources/en/apartment-showcase.json";
import en_apartmentGallery from "./resources/en/apartment-gallery.json";
import en_amenitiesLocation from "./resources/en/amenities-location.json";
import en_experienceSection from "./resources/en/experience-section.json";
import en_reviews from "./resources/en/reviews.json";
import en_finalCta from "./resources/en/final-cta.json";
import en_contactForm from "./resources/en/contact-form.json";
import en_footer from "./resources/en/footer.json";
import en_cookieConsent from "./resources/en/cookie-consent.json";

// Pages
import en_homePage from "./resources/en/home-page.json";
import en_galleryPage from "./resources/en/gallery-page.json";
import en_locationPage from "./resources/en/location-page.json";
import en_experiencePage from "./resources/en/experience-page.json";
import en_privacyPolicyPage from "./resources/en/privacy-policy-page.json";

const resources = {
  en: {
    common: en_common,
    header: en_header,
    hero: en_hero,
    lifestyle: en_lifestyle,
    "apartment-showcase": en_apartmentShowcase,
    "apartment-gallery": en_apartmentGallery,
    "amenities-location": en_amenitiesLocation,
    "experience-section": en_experienceSection,
    reviews: en_reviews,
    "final-cta": en_finalCta,
    "contact-form": en_contactForm,
    footer: en_footer,
    "cookie-consent": en_cookieConsent,
    "home-page": en_homePage,
    "gallery-page": en_galleryPage,
    "location-page": en_locationPage,
    "experience-page": en_experiencePage,
    "privacy-policy-page": en_privacyPolicyPage,
  },
};

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: "en",
      fallbackLng: "en",

      interpolation: {
        escapeValue: false,
      },

      react: {
        useSuspense: false,
      },
    });
}

export default i18n;