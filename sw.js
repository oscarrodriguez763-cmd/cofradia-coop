// Nombre del caché
const CACHE_NAME = 'pwa-cooperativa-v1';

// Archivos que se guardarán para uso sin conexión
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './1000275398-removebg-preview.png'
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Intercepta las peticiones para servir desde el caché si está offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
