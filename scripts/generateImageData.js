const fs = require("fs");
const path = require("path");

const imagesRoot = path.join(process.cwd(), "public", "images");
const outputFile = path.join(process.cwd(), "public", "imageData.json");

const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/^\d+\./, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "")
    .replace(/-+/g, "-")
    .trim();
}

function getImagesFromFolder(folderPath, propertyName, categoryName) {
  if (!fs.existsSync(folderPath)) return [];

  return fs
    .readdirSync(folderPath)
    .filter((file) => imageExtensions.includes(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => {
      return `/images/${propertyName}/${categoryName}/${file}`.replace(/\\/g, "/");
    });
}

const data = {};

const propertyFolders = fs
  .readdirSync(imagesRoot)
  .filter((item) => fs.statSync(path.join(imagesRoot, item)).isDirectory())
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

propertyFolders.forEach((propertyFolder) => {
  const propertyPath = path.join(imagesRoot, propertyFolder);
  const propertyKey = slugify(propertyFolder);

  data[propertyKey] = {
    title: propertyFolder.replace(/^\d+\./, "").trim(),
    slug: propertyKey,
    categories: {},
    allImages: [],
  };

  const categoryFolders = fs
    .readdirSync(propertyPath)
    .filter((item) => fs.statSync(path.join(propertyPath, item)).isDirectory())
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  categoryFolders.forEach((categoryFolder) => {
    const categoryPath = path.join(propertyPath, categoryFolder);
    const categoryKey = slugify(categoryFolder);
    const images = getImagesFromFolder(categoryPath, propertyFolder, categoryFolder);

    data[propertyKey].categories[categoryKey] = {
      title: categoryFolder.replace(/^\d+\./, "").trim(),
      images,
    };

    data[propertyKey].allImages.push(...images);
  });
});

fs.writeFileSync(outputFile, JSON.stringify(data, null, 2), "utf-8");

console.log("imageData.json generated successfully.");