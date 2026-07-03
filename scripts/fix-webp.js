const fs = require("fs");

const path = "public/discoverData.json";

let s = fs.readFileSync(path, "utf8");

s = s.replace(/\.(jpg|jpeg|png)"/gi, '.webp"');

fs.writeFileSync(path, s);

console.log("Done!");