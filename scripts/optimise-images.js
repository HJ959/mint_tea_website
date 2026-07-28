/**
 * Image optimisation script for Mint Tea Records website.
 * Compresses source images and generates WebP versions.
 * Run as part of the build process.
 */
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const PROJECT_ROOT = path.resolve(__dirname, '..')
const MEDIA_SRC = path.join(PROJECT_ROOT, 'src/media')
const MEDIA_DIST = path.join(PROJECT_ROOT, 'dist/media')

// Max dimensions for artwork images (they're displayed at most ~600px wide)
const ARTWORK_MAX_WIDTH = 800
const ARTWORK_QUALITY_JPG = 80
const ARTWORK_QUALITY_WEBP = 75
const ARTWORK_QUALITY_PNG = 80

async function optimiseImages() {
  // Ensure output dirs exist
  fs.mkdirSync(MEDIA_DIST, { recursive: true })
  fs.mkdirSync(path.join(MEDIA_DIST, 'shapes'), { recursive: true })

  const files = fs.readdirSync(MEDIA_SRC)

  for (const file of files) {
    const srcPath = path.join(MEDIA_SRC, file)
    const stat = fs.statSync(srcPath)

    if (stat.isDirectory()) continue

    const ext = path.extname(file).toLowerCase()
    const baseName = path.basename(file, ext)
    const distPath = path.join(MEDIA_DIST, file)

    if (ext === '.jpg' || ext === '.jpeg') {
      console.log(`Optimising JPG: ${file}`)
      // Compress JPG
      await sharp(srcPath)
        .resize({ width: ARTWORK_MAX_WIDTH, withoutEnlargement: true })
        .jpeg({ quality: ARTWORK_QUALITY_JPG, progressive: true })
        .toFile(distPath)

      // Generate WebP
      await sharp(srcPath)
        .resize({ width: ARTWORK_MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: ARTWORK_QUALITY_WEBP })
        .toFile(path.join(MEDIA_DIST, `${baseName}.webp`))

    } else if (ext === '.png' && !file.includes('Parts')) {
      console.log(`Optimising PNG: ${file}`)
      // Compress PNG (skip Parts.png texture as it needs full resolution for 3D)
      await sharp(srcPath)
        .resize({ width: ARTWORK_MAX_WIDTH, withoutEnlargement: true })
        .png({ quality: ARTWORK_QUALITY_PNG, compressionLevel: 9 })
        .toFile(distPath)

      // Generate WebP
      await sharp(srcPath)
        .resize({ width: ARTWORK_MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: ARTWORK_QUALITY_WEBP })
        .toFile(path.join(MEDIA_DIST, `${baseName}.webp`))

    } else if (file === 'Parts.png') {
      // Texture map - compress but keep original dimensions
      console.log(`Optimising texture: ${file}`)
      await sharp(srcPath)
        .png({ compressionLevel: 9 })
        .toFile(distPath)

    } else if (ext === '.gif') {
      // GIFs just get copied (sharp can't optimise animated GIFs well)
      console.log(`Copying GIF: ${file}`)
      fs.copyFileSync(srcPath, distPath)

    } else if (ext === '.obj') {
      // Copy OBJ as-is (consider converting to glTF/GLB in future)
      console.log(`Copying OBJ: ${file}`)
      fs.copyFileSync(srcPath, distPath)

    } else {
      // Copy anything else
      console.log(`Copying: ${file}`)
      fs.copyFileSync(srcPath, distPath)
    }
  }

  // Optimise shape PNGs (these are used as visual elements, can be smaller)
  const shapesDir = path.join(MEDIA_SRC, 'shapes')
  const shapesDistDir = path.join(MEDIA_DIST, 'shapes')
  const shapeFiles = fs.readdirSync(shapesDir)

  for (const file of shapeFiles) {
    const ext = path.extname(file).toLowerCase()
    if (ext !== '.png') continue

    const srcPath = path.join(shapesDir, file)
    const distPath = path.join(shapesDistDir, file)
    const baseName = path.basename(file, ext)

    console.log(`Optimising shape: ${file}`)
    await sharp(srcPath)
      .resize({ width: 512, withoutEnlargement: true })
      .png({ compressionLevel: 9 })
      .toFile(distPath)

    // WebP version for shapes too
    await sharp(srcPath)
      .resize({ width: 512, withoutEnlargement: true })
      .webp({ quality: ARTWORK_QUALITY_WEBP })
      .toFile(path.join(shapesDistDir, `${baseName}.webp`))
  }

  // Copy audio tracks directory
  const tracksDir = path.join(MEDIA_SRC, 'Otodojo_Tracks')
  const tracksDistDir = path.join(MEDIA_DIST, 'Otodojo_Tracks')
  fs.mkdirSync(tracksDistDir, { recursive: true })
  const trackFiles = fs.readdirSync(tracksDir)
  for (const file of trackFiles) {
    console.log(`Copying audio: ${file}`)
    fs.copyFileSync(path.join(tracksDir, file), path.join(tracksDistDir, file))
  }

  console.log('\n✓ Image optimisation complete!')
}

optimiseImages().catch(err => {
  console.error('Image optimisation failed:', err)
  process.exit(1)
})
