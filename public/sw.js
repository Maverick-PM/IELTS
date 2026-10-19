// IELTS Academic Offline - Service Worker
const CACHE_NAME = 'ielts-offline-v3';

const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/app.css',
  './js/app.js',
  './js/data/task1Prompts.js',
  './js/data/task2Prompts.js',
  './js/data/readingTests.js',
  './js/data/listeningTests.js',
  './js/data/speakingTests.js',
  './js/data/academicWordList.js',
  './js/data/cohesiveDevices.js',
  './js/engine/tokenizer.js',
  './js/engine/taskAchievement.js',
  './js/engine/coherenceCohesion.js',
  './js/engine/lexicalResource.js',
  './js/engine/grammaticalRange.js',
  './js/engine/scoringEngine.js',
  './js/engine/readingEngine.js',
  './js/engine/listeningEngine.js',
  './js/engine/speakingEngine.js',
  './js/services/storageService.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Pre-caching offline assets...');
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Removing old cache', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        // Cache newly fetched assets
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // If network fails and request is for page, return cached index
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
