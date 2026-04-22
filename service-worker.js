const CACHE = 'receitas-bruno-v3';
const FILES = [
  './index.html',
  './styles.css',
  './data-receitas-1.js',
  './data-receitas-2.js',
  './data-receitas-3.js',
  './data-conservacao.js',
  './rules.js',
  './script.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './apple-touch-icon.png',
  './icon-shortcut-rapidas.png',
  './icon-shortcut-lista.png',
  './screenshot-inicio.png',
  './screenshot-receita.png',
  './screenshot-wide.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(
        ks.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  if (!e.request.url.startsWith(self.location.origin)) return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request)
        .then(res => {
          if (res && res.status === 200 && res.type === 'basic') {
            caches.open(CACHE).then(c => c.put(e.request, res.clone()));
          }
          return res;
        })
        .catch(() => caches.match('./index.html'));
    })
  );
});
