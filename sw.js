const CACHE_NAME = 'farmcloud-v1';

// Install the service worker and cache the core files
self.addEventListener('install', (event) => {
  self.skipWaiting(); // Force the waiting service worker to become the active service worker
});

// Intercept network requests: fetch from internet first (to get updates), fallback to cache if offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});