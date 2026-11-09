const CACHE_NAME = 'yukiyanart-hub-v28';
const ASSETS_TO_CACHE = [
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './assets/icons/yukiyanart_logo.jpg',
  './assets/icons/yukiyanart_chic_badge.jpg',
  './assets/icons/yukiyanart_splash_fhd.jpg',
  './assets/icons/acrylic_ad_frame.jpg',
  './assets/icons/sub_monitor_manager.png',
  './assets/icons/input_nexus.jpg',
  './assets/icons/widget_de_news.png',
  './assets/icons/hex_bastion.jpg',
  './assets/icons/numpre_shift.png',
  './assets/icons/flower_coloring.png',
  './assets/icons/tokyo_gassen.png',
  './assets/icons/audio_dock.png',
  './assets/icons/karada_note.jpg'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.url.includes('/downloads/')) {
    return;
  }
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
