/**
 * One-off / CI: writes .webp next to raster sources under public/.
 * Run: node scripts/generate-webp.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "public");

async function toWebp(input, output) {
  await sharp(input).webp({ quality: 86, effort: 6 }).toFile(output);
}

async function ogDefaultFromPng(sourcePng, outWebp) {
  await sharp(sourcePng)
    .resize(1200, 630, { fit: "cover", position: "centre" })
    .webp({ quality: 82, effort: 6 })
    .toFile(outWebp);
}

async function main() {
  const dirs = [
    path.join(root, "assets", "images"),
    path.join(root, "assets"),
  ];

  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;
    for (const name of fs.readdirSync(dir)) {
      if (!name.toLowerCase().endsWith(".png")) continue;
      const input = path.join(dir, name);
      const output = path.join(dir, name.replace(/\.png$/i, ".webp"));
      await toWebp(input, output);
      console.log("wrote", path.relative(root, output));
    }
  }

  const heroLogo = path.join(root, "assets", "images", "w777-bet-game-apk-logo.png");
  const ogOut = path.join(root, "assets", "images", "og-default.webp");
  if (fs.existsSync(heroLogo)) {
    await ogDefaultFromPng(heroLogo, ogOut);
    console.log("wrote", path.relative(root, ogOut));
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
