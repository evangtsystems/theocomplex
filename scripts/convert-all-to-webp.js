const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.join(__dirname, "../public/images");

const IMAGE_EXTENSIONS = [
  ".jpg",
  ".jpeg",
  ".png",
  ".bmp",
  ".tif",
  ".tiff",
];

async function convertDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await convertDirectory(fullPath);
      continue;
    }

    const ext = path.extname(file).toLowerCase();

    if (!IMAGE_EXTENSIONS.includes(ext))
      continue;

    const webpPath = fullPath.replace(ext, ".webp");

    console.log(`Converting ${file}`);

    await sharp(fullPath)
      .rotate()
      .resize({
        width: 1800,
        withoutEnlargement: true,
      })
      .webp({
        quality: 85,
        effort: 6,
      })
      .toFile(webpPath);

    fs.unlinkSync(fullPath);
  }
}

(async () => {
  console.log("Starting conversion...\n");

  await convertDirectory(ROOT);

  console.log("\nDone.");
})();