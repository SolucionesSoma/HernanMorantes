import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const IMAGES_DIR = path.resolve('public/images');

const RESIZE_RULES = {
  'abogado.jpeg': { width: 1600, height: 2200 },
  'abogado_3.jpeg': { width: 2200, height: 1650 },
};

const SUPPORTED = new Set(['.jpg', '.jpeg', '.png', '.webp']);

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  return `${(kb / 1024).toFixed(2)} MB`;
}

async function optimizeFile(fileName) {
  const fullPath = path.join(IMAGES_DIR, fileName);
  const ext = path.extname(fileName).toLowerCase();
  if (!SUPPORTED.has(ext)) return null;

  const beforeSize = fs.statSync(fullPath).size;
  let pipeline = sharp(fullPath, { failOn: 'none' });
  const metadata = await pipeline.metadata();

  const resizeRule = RESIZE_RULES[fileName];
  if (resizeRule && metadata.width && metadata.height) {
    pipeline = pipeline.resize({
      width: resizeRule.width,
      height: resizeRule.height,
      fit: 'inside',
      withoutEnlargement: true,
      kernel: 'lanczos3',
    });
  }

  if (ext === '.jpg' || ext === '.jpeg') {
    pipeline = pipeline.jpeg({
      quality: 86,
      mozjpeg: true,
      chromaSubsampling: '4:4:4',
      progressive: true,
    });
  } else if (ext === '.png') {
    pipeline = pipeline.png({
      compressionLevel: 9,
      adaptiveFiltering: true,
      palette: false,
      quality: 100,
    });
  } else if (ext === '.webp') {
    pipeline = pipeline.webp({ quality: 90, lossless: false });
  }

  await pipeline.toFile(`${fullPath}.tmp`);

  const afterSize = fs.statSync(`${fullPath}.tmp`).size;
  if (afterSize >= beforeSize) {
    fs.unlinkSync(`${fullPath}.tmp`);
    return {
      fileName,
      changed: false,
      beforeSize,
      afterSize: beforeSize,
      saved: 0,
    };
  }

  fs.renameSync(`${fullPath}.tmp`, fullPath);

  return {
    fileName,
    changed: true,
    beforeSize,
    afterSize,
    saved: beforeSize - afterSize,
  };
}

async function main() {
  const files = fs.readdirSync(IMAGES_DIR).sort();
  const results = [];

  for (const fileName of files) {
    const fullPath = path.join(IMAGES_DIR, fileName);
    if (!fs.statSync(fullPath).isFile()) continue;

    try {
      const result = await optimizeFile(fileName);
      if (result) results.push(result);
    } catch (error) {
      console.warn(`Skipping ${fileName}: ${error.message}`);
    }
  }

  const changed = results.filter((r) => r.changed);
  const totalBefore = results.reduce((sum, r) => sum + r.beforeSize, 0);
  const totalAfter = results.reduce((sum, r) => sum + r.afterSize, 0);
  const totalSaved = totalBefore - totalAfter;

  console.log('Image optimization report');
  console.log('-------------------------');
  for (const r of changed) {
    const pct = ((r.saved / r.beforeSize) * 100).toFixed(1);
    console.log(`${r.fileName}: ${formatBytes(r.beforeSize)} -> ${formatBytes(r.afterSize)} (saved ${formatBytes(r.saved)}, ${pct}%)`);
  }

  if (changed.length === 0) {
    console.log('No files were reduced.');
  }

  const totalPct = totalBefore > 0 ? ((totalSaved / totalBefore) * 100).toFixed(1) : '0.0';
  console.log('-------------------------');
  console.log(`Total: ${formatBytes(totalBefore)} -> ${formatBytes(totalAfter)} (saved ${formatBytes(totalSaved)}, ${totalPct}%)`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});