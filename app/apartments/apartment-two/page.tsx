import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ApartmentGallery from "@/components/ApartmentGallery";
import imageData from "@/public/imageData.json";

export default function ApartmentTwoPage() {
  const villa = imageData["theo-two-bedroom-apartment-with-loft"];

  return (
    <>
      <div style={{ position: "relative", background: "#0f1216", height: "100px" }}>
        <Header />
      </div>

     <ApartmentGallery
  title={villa.title}
  heroImage={villa.heroImage}
  categories={villa.categories}
/>

      <Footer />
    </>
  );
}