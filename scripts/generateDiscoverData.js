const fs = require("fs");
const path = require("path");

const imageDataPath = path.join(process.cwd(), "public", "imageData.json");
const outputPath = path.join(process.cwd(), "public", "discoverData.json");

const imageData = JSON.parse(fs.readFileSync(imageDataPath, "utf-8"));

const discoverData = {
  featured: [],
  outdoor: [],
  kitchens: [],
  bedrooms: [],
  bathrooms: [],
  livingSpaces: [],
  beach: [],
};

function addImages(target, images, limit = 6) {
  target.push(...images.slice(0, limit));
}

Object.values(imageData).forEach((property) => {
  Object.values(property.categories).forEach((category) => {
    const title = category.title.toLowerCase();
    const images = category.images;

    if (!images || images.length === 0) return;

    addImages(discoverData.featured, images, 2);

    if (
      title.includes("outside") ||
      title.includes("garden") ||
      title.includes("parking") ||
      title.includes("balcony") ||
      title.includes("balkony") ||
      title.includes("view")
    ) {
      addImages(discoverData.outdoor, images);
    }

    if (title.includes("kitchen")) {
      addImages(discoverData.kitchens, images);
    }

    if (
      title.includes("room") ||
      title.includes("bedroom") ||
      title.includes("loft") ||
      title.includes("upstairs")
    ) {
      addImages(discoverData.bedrooms, images);
    }

    if (title.includes("bathroom")) {
      addImages(discoverData.bathrooms, images);
    }

    if (
      title.includes("sitting") ||
      title.includes("dinning") ||
      title.includes("dining") ||
      title.includes("living")
    ) {
      addImages(discoverData.livingSpaces, images);
    }

    if (title.includes("beach")) {
      addImages(discoverData.beach, images);
    }
  });
});

fs.writeFileSync(outputPath, JSON.stringify(discoverData, null, 2), "utf-8");

console.log("discoverData.json generated successfully.");