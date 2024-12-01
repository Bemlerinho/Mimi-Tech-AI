const sharp = require('sharp');
const path = require('path');

const sizes = [192, 512];
const inputFile = path.join(__dirname, '../public/mimi-tech-ai-optimized.svg');

async function generateIcons() {
  for (const size of sizes) {
    await sharp(inputFile)
      .resize(size, size)
      .png()
      .toFile(path.join(__dirname, `../public/logo${size}.png`));
    console.log(`Generated ${size}x${size} icon`);
  }
}

generateIcons().catch(console.error);
