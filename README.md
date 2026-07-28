# mint_tea_website

Website for Mint Tea Records, hosted on Netlify. Written and designed by Henry James.

## Project Overview

Static website for **Mint Tea Records**, a Bristol-based independent record label launched in 2016. The site serves as a catalogue browser and promotional hub for the label's releases, plus a standalone interactive audio-visual experience for the Otodojo EP.

**Audience:** Fans, DJs, and producers exploring the label's catalogue.

**Live URL:** [mint-tea-records.co.uk](https://mint-tea-records.co.uk)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Language | Vanilla JavaScript (ES6 modules) |
| 3D | Three.js (^0.144.0) + OBJLoader |
| Audio | Web Audio API (AnalyserNode, fftSize 4096) |
| Bundler | Webpack 5 (^5.70.0) |
| CSS Framework | Bootstrap 3.3.5 (CDN) |
| Fonts | Google Fonts (Roboto) via CDN |
| Image Optimisation | Sharp (build-time compression + WebP generation) |
| Linting | ESLint + Prettier |
| Offline Support | Service Worker (cache-first for assets, network-first for HTML) |
| Hosting | Netlify (auto-builds from git) |
| Version Control | Git |

---

## Project Structure

```
mint_tea_website/
├── src/                        # Source files
│   ├── index.html              # Homepage template
│   ├── index.js                # Homepage JS (Three.js scene, catalogue UI, drag logic)
│   ├── main.css                # Homepage styles (responsive, Bootstrap overrides)
│   ├── otodojo.html            # Otodojo page template
│   ├── otodojo.js              # Otodojo JS (audio visualisation, shape animation)
│   ├── otodojoAudio.js         # Web Audio API setup (analyser, playback controls)
│   ├── otodojo.css             # Otodojo styles (CSS Grid, CSS variables)
│   ├── sw.js                   # Service worker (offline caching)
│   └── media/                  # Source media assets
│       ├── shapes/             # Shape PNGs for Otodojo (shape1–13.png)
│       ├── Otodojo_Tracks/     # Audio files (MP3)
│       ├── *.png / *.gif       # Release artwork
│       ├── *.obj               # 3D model (space shuttle shard)
│       └── *.jpg               # Otodojo artwork
├── scripts/                    # Build scripts
│   └── optimise-images.js      # Sharp-based image compression + WebP generation
├── dist/                       # Production build output (gitignored, built by Netlify)
├── dev/                        # Development build output (gitignored)
├── webpack.prod.config.js      # Production webpack config
├── webpack.dev.config.js       # Development webpack config
├── netlify.toml                # Netlify build configuration
├── .eslintrc.json              # ESLint configuration
├── .prettierrc                 # Prettier configuration
├── .prettierignore             # Files excluded from formatting
├── .gitignore                  # Ignores node_modules, dist/, dev/
├── package.json                # NPM manifest
├── package-lock.json           # Lockfile
└── README.md                   # This file
```

---

## Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` (index.html) | Homepage | 3D animated scene (wireframe sphere + OBJ model), draggable catalogue panels, label info |
| `/otodojo.html` | Otodojo | Audio-reactive visual experience for the "Parsing a Path" EP |

---

## Components Breakdown

### Homepage (index.html + index.js)

| Component | Description |
|-----------|-------------|
| Three.js Scene | Rotating wireframe sphere + space shuttle OBJ model with texture, renders to `<canvas>` |
| Catalogue Panel | Draggable overlay cycling through 9 releases (MT001–MINT06) with artwork and descriptions |
| About Panel | Draggable overlay with label info, demo policy, contact details |
| Navigation | Bootstrap 3 navbar with links to Catalogue, Info, Shop, Facebook, SoundCloud, Otodojo |
| Drag System | Custom mouse-event-based drag logic for the overlay panels |
| Service Worker | Registers SW for offline caching on page load |

### Otodojo (otodojo.html + otodojo.js + otodojoAudio.js)

| Component | Description |
|-----------|-------------|
| Audio Engine | Web Audio API: `AudioContext` → `MediaElementSource` → `AnalyserNode` → `destination` |
| Frequency Analysis | FFT data split into 5 frequency bands driving visual parameters |
| Shape Visualiser | 5 absolutely-positioned `<img>` elements with CSS transforms/filters driven by audio data |
| Interaction | Pointer drag relocates shapes; tap shapes to randomise; swipe up or spacebar to play/pause |
| Playback Controls | Play/pause button, visibility-change handler (pauses when tab hidden) |

---

## Styling Architecture

### Homepage (main.css)

- **Bootstrap 3.3.5** loaded via CDN for grid, navbar, and responsive utilities
- Custom responsive CSS with 3 breakpoints: mobile (≤500px), tablet (501–960px), desktop (≥961px)
- Custom styles for draggable panels, catalogue, navigation overrides
- Google Fonts: Roboto (400, 900 weights)

### Otodojo (otodojo.css)

- **CSS Grid** layout: 3-column, 3-row grid (`screen / textDisplay / back play forward`)
- **CSS Custom Properties**: `--main-blue`, `--main-black`, `--main-pink`, `--main-white`
- CSS animation (`slide-left` keyframe for text scrolling)
- No external CSS framework — fully self-contained

---

## Assets & Media

### Source Assets (src/media/)

| Asset | Type | Purpose |
|-------|------|---------|
| `space_shuttle_shard.obj` | 3D Model (~9.4 MB) | Homepage rotating 3D object |
| `Parts.png` | Texture (~713 KB) | Texture map for the OBJ model |
| `mt001–mt005_artwork.png` | PNG | Release artwork for catalogue |
| `mtusb01_artwork.gif`, `mtwl001_artwork.gif` | GIF | Animated release artwork |
| `main_MTUSB002.png` | PNG | USB release artwork |
| `otodojo-parsing-a-path-artwork.jpg` | JPG (~7.5 MB) | Otodojo EP artwork |
| `start_otodojo.png` | PNG (~2.1 MB) | Otodojo instruction overlay |
| `shapes/shape1–13.png` | PNG | Otodojo visual elements |
| `Otodojo_Tracks/*.mp3` | Audio (~13 MB) | Otodojo playback track |

### Build-Time Optimisation

The `scripts/optimise-images.js` script (run during `build-prod`):
- Resizes artwork to max 800px wide
- Compresses JPGs (quality 80, progressive)
- Compresses PNGs (compression level 9)
- Generates **WebP** versions of all images for modern browsers
- Preserves `Parts.png` texture at full resolution
- Copies GIFs, OBJ, and audio files as-is

HTML templates use `<picture>` elements with WebP sources and PNG/JPG fallbacks.

---

## Build & Deployment

### NPM Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `npm start` | `webpack serve --open --host 0.0.0.0 --config webpack.dev.config.js` | Start dev server with HMR |
| `npm run build-prod` | Optimise images + webpack production build | Production build → `dist/` |
| `npm run build-dev` | Copy media + webpack dev build with watch | Dev build → `dev/` |
| `npm run clean` | Remove dist/ and dev/ contents | Clean build outputs |
| `npm run lint` | `eslint src/**/*.js` | Lint JavaScript |
| `npm run lint:fix` | `eslint src/**/*.js --fix` | Auto-fix lint issues |
| `npm run format` | `prettier --write "src/**/*.{js,css,html}"` | Format all source files |
| `npm run format:check` | `prettier --check "src/**/*.{js,css,html}"` | Check formatting |

### Local Development

```bash
npm install
npm start
# Opens browser at http://0.0.0.0:8080
```

### Production Build & Deploy

```bash
npm run build-prod
git push
# Netlify auto-builds and deploys from the dist/ output
```

**Netlify is configured via `netlify.toml`** to run `npm run build-prod` and serve the `dist/` directory. No need to commit build artifacts.

---

## Configuration

### Webpack Production (webpack.prod.config.js)

- **Mode:** production
- **Entry points:** `index` and `otodojo` (multi-page)
- **Output:** `dist/[name].js`
- **Plugins:** HtmlWebpackPlugin (per page) + CopyWebpackPlugin (copies `sw.js`)
- **Code splitting:** vendor chunks split by npm package name (`npm.[package].js`)
- **Runtime chunk:** single shared runtime (`runtime.js`)
- **Loaders:** `style-loader` + `css-loader` for `.css` files

### Webpack Development (webpack.dev.config.js)

- **Mode:** development
- **Output:** `dev/[name].js`
- **Dev server:** serves from `./dev`
- **Same entry/plugin/loader setup** as production (without code splitting)

### ESLint (.eslintrc.json)

- Extends `eslint:recommended` + `prettier`
- Browser + Node environment
- Warns on `no-var`, `prefer-const`, `no-unused-vars`
- Globals declared for window-exposed functions

### Prettier (.prettierrc)

- No semicolons, single quotes (matching existing code style)
- 2-space indentation, 120 char print width
- Trailing commas in ES5 positions

### Netlify (netlify.toml)

- Build command: `npm run build-prod`
- Publish directory: `dist`
- Node 18

---

## Integrations

### External Links

| Service | Usage |
|---------|-------|
| [Bandcamp](https://mintteaa.bandcamp.com/) | Shop / purchase releases |
| [SoundCloud](https://soundcloud.com/mint-tea-records) | Streaming previews (linked in catalogue) |
| [Facebook](https://www.facebook.com/minttearecords/) | Social media |

### CDN Dependencies (Homepage)

| Resource | Version | URL |
|----------|---------|-----|
| Bootstrap CSS | 3.3.5 | `stackpath.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css` |
| Bootstrap JS | 3.3.5 | `stackpath.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js` |
| jQuery | 3.4.1 | `code.jquery.com/jquery-3.4.1.min.js` |
| Google Fonts | Roboto 400,900 | `fonts.googleapis.com/css?family=Roboto:400,900` |

---

## Accessibility

- ARIA labels on all interactive elements (buttons, nav, panels)
- `aria-hidden="true"` on decorative elements (canvas, arrow icons)
- `role` attributes on regions and navigation
- `aria-live="polite"` on dynamic text displays
- `rel="noopener noreferrer"` on all external links
- Keyboard accessible: spacebar toggles play on Otodojo

---

## SEO & Social Sharing

- Open Graph meta tags on both pages (title, description, image, type, URL)
- Twitter Card meta tags (summary_large_image)
- Descriptive `<title>` and `<meta name="description">` on both pages
- Proper `alt` attributes on all images

---

## Offline Support

A service worker (`src/sw.js`) provides offline caching:
- **Install:** Pre-caches core HTML and JS assets
- **Fetch strategy:** Network-first for HTML pages (falls back to cache), cache-first for static assets
- **Cache cleanup:** Old cache versions are removed on activation
- Registered from `index.js` on page load

---

## Known Issues & Future Development

### Remaining Issues

- **Bootstrap 3 EOL:** Bootstrap 3.3.5 is end-of-life (last release 2015); consider migrating to Bootstrap 5 or removing entirely
- **jQuery dependency:** Only loaded for Bootstrap 3's collapse/toggle; could be eliminated by migrating away from Bootstrap 3
- **Large media in git:** ~50 MB+ of binary media tracked in git history; consider Git LFS or external hosting
- **OBJ model size:** 9.4 MB OBJ file could be converted to glTF/GLB for ~80% size reduction

### Future Improvements

- Convert OBJ to glTF/GLB format for faster 3D model loading
- Migrate from Bootstrap 3 to lightweight custom CSS or Bootstrap 5 (removes jQuery dependency)
- Move media to CDN or object storage (S3/CloudFront)
- Set up Git LFS for binary media files
- Implement proper SPA routing or shared nav component
- Add unit tests for audio/visual logic
