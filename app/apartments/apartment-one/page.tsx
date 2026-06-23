import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ApartmentGallery from "@/components/ApartmentGallery";
import imageData from "@/public/imageData.json";

export default function ApartmentOnePage() {
  const villa = imageData["villa-theo"];

  return (
    <>
      <div style={{ position: "relative", background: "#0f1216", height: "100px" }}>
        <Header />
      </div>

      <ApartmentGallery title={villa.title} categories={villa.categories} />

      <Footer />
    </>
  );
}