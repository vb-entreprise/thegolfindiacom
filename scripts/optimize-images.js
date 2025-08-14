const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGES_DIR = path.join(__dirname, '../public/images');
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1080;
const QUALITY = 80;

function optimizeImage(inputPath, outputPath) {
  return sharp(inputPath)
    .resize(MAX_WIDTH, MAX_HEIGHT, {
      fit: 'inside',
      withoutEnlargement: true
    })
    .jpeg({ quality: QUALITY, progressive: true })
    .toFile(outputPath);
}

function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const fileSize = stat.size / (1024 * 1024); // Size in MB
        
        if (fileSize > 1) { // Only optimize files larger than 1MB
          console.log(`Optimizing: ${item} (${fileSize.toFixed(2)}MB)`);
          
          const tempPath = fullPath + '.temp';
          
          try {
            optimizeImage(fullPath, tempPath);
            
            // Check if optimization was successful
            const optimizedSize = fs.statSync(tempPath).size / (1024 * 1024);
            
            if (optimizedSize < fileSize) {
              fs.unlinkSync(fullPath);
              fs.renameSync(tempPath, fullPath);
              console.log(`✓ Optimized: ${item} (${fileSize.toFixed(2)}MB → ${optimizedSize.toFixed(2)}MB)`);
            } else {
              fs.unlinkSync(tempPath);
              console.log(`- Skipped: ${item} (no improvement)`);
            }
          } catch (error) {
            console.error(`✗ Error optimizing ${item}:`, error.message);
            if (fs.existsSync(tempPath)) {
              fs.unlinkSync(tempPath);
            }
          }
        }
      }
    }
  }
}

console.log('Starting image optimization...');
processDirectory(IMAGES_DIR);
console.log('Image optimization complete!'); 