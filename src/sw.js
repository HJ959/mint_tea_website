/**
 * Service Worker for Mint Tea Records website.
 * Caches core assets for offline access using a cache-first strategy
 * for static assets and network-first for HTML pages.
 */

const CACHE_NAME = 'mint-tea-v1'

// Core assets to pre-cache on install
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/otodojo.html',
  '/index.js',
  '/otodojo.js',
  '/runtime.js',
  '/main.js',
  '/npm.three.js'
]

// Install: pre-cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS)
    })
  )
  self.skipWaiting()
})

// Activate: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    })
  )
  self.clients.claim()
})

// Fetch: network-first for HTML, cache-first for assets
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Only handle same-origin requests
  if (url.origin !== location.origin) return

  // HTML pages: network-first (fall back to cache if offline)
  if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone))
          return response
        })
        .catch(() => caches.match(request))
    )
    return
  }

  // Static assets (JS, CSS, images, audio): cache-first
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached

      return fetch(request).then((response) => {
        // Don't cache non-successful responses or opaque responses
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response
        }

        // Cache media assets and JS/CSS
        const shouldCache =
          url.pathname.endsWith('.js') ||
          url.pathname.endsWith('.css') ||
          url.pathname.endsWith('.png') ||
          url.pathname.endsWith('.jpg') ||
          url.pathname.endsWith('.webp') ||
          url.pathname.endsWith('.gif') ||
          url.pathname.endsWith('.mp3') ||
          url.pathname.endsWith('.obj')

        if (shouldCache) {
          const clone = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone))
        }

        return response
      })
    })
  )
})
