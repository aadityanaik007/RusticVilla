/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const IMAGES_DIR = path.join(__dirname, "..", "src", "images");
const PUBLIC_OG_IMAGE = path.join(__dirname, "..", "public", "og-image.jpg");
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 78;
const PNG_QUALITY = 80;

const walk = (dir, files = []) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, files);
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
};

const optimize = async (filePath) => {
  const before = fs.statSync(filePath).size;
  const buffer = fs.readFileSync(filePath);
  const image = sharp(buffer);
  const metadata = await image.metadata();

  let pipeline = image;
  if (metadata.width && metadata.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH });
  }

  const isPng = /\.png$/i.test(filePath);
  const output = isPng
    ? await pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 }).toBuffer()
    : await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();

  // Only overwrite if it's actually smaller
  if (output.length < before) {
    fs.writeFileSync(filePath, output);
    return { filePath, before, after: output.length };
  }
  return { filePath, before, after: before, skipped: true };
};

(async () => {
  const files = walk(IMAGES_DIR);
  if (fs.existsSync(PUBLIC_OG_IMAGE)) {
    files.push(PUBLIC_OG_IMAGE);
  }

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const result = await optimize(file);
    totalBefore += result.before;
    totalAfter += result.after;
    const savedPct = (((result.before - result.after) / result.before) * 100).toFixed(0);
    console.log(
      `${result.skipped ? "skip " : "opt  "}${path.relative(process.cwd(), file)}  ${(
        result.before / 1024
      ).toFixed(0)}KB -> ${(result.after / 1024).toFixed(0)}KB (${savedPct}%)`
    );
  }

  console.log(
    `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(
      totalAfter / 1024 / 1024
    ).toFixed(2)}MB`
  );
})();
