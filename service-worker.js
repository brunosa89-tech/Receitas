// ═══════════════════════════════════════════════════════
// RECEITAS DO BRUNO — service-worker.js
// Cache-First — funciona 100% offline após primeiro acesso
// Versão: v2 — ícones PNG e screenshots incluídos
// ═══════════════════════════════════════════════════════

const CACHE = 'receitas-bruno-v2';
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
  './apple-touch-icon.png',
  './screenshot-inicio.png',
  './screenshot-receita.png',
  './screenshot-wide.png',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Nunito:wght@400;600;700;800&family=Lora:ital@0;1&display=swap'
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
  e.respondWith(
    caches.match(e.request)
      .then(cached => {
        if (cached) return cached;
        return fetch(e.request)
          .then(res => {
            if (res && res.status === 200 && res.type === 'basic') {
              const clone = res.clone();
              caches.open(CACHE).then(c => c.put(e.request, clone));
            }
            return res;
          })
          .catch(() => caches.match('./index.html'));
      })
  );
});
