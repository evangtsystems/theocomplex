const sharp = require("sharp");

const input = "public/images/hero.jpg";
const output = "public/images/hero-landscape.jpg";

const width = 2560;
const height = 1440;

async function run() {
  const blurredBg = await sharp(input)
    .resize(width, height, { fit: "cover" })
    .blur(28)
    .modulate({ brightness: 0.75 })
    .toBuffer();

  const foreground = await sharp(input)
    .resize({ height: height, fit: "contain" })
    .toBuffer();

  await sharp(blurredBg)
    .composite([
      {
        input: foreground,
        gravity: "center",
      },
    ])
    .jpeg({ quality: 90 })
    .toFile(output);

  console.log("Created:", output);
}

run();