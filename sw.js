const CACHE_NAME = 'arbitragem-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  'https://cdn.jsdelivr.net/npm/@turf/turf@6/turf.min.js'
];

// Instalação do Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Responde com o Cache quando estiver offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
