import Hero from "@/components/Hero";
import LifestyleSection from "@/components/LifestyleSection";
import ExperienceSection from "@/components/ExperienceSection";
import AmenitiesLocation from "@/components/AmenitiesLocation";
import Reviews from "@/components/Reviews";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ApartmentShowcase from "@/components/ApartmentShowcase";
export default function Home() {
  return (
    <>
      <Hero />
      <LifestyleSection />
      <ApartmentShowcase/>
      <ExperienceSection />
      <AmenitiesLocation />
      <Reviews />
      <FinalCTA />
      <Footer />
    </>
  );
}