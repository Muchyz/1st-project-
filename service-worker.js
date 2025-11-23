self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("portfolio-cache-v1").then(cache => {
      return cache.addAll([
        "/portfolio/",
        "/portfolio/index.html",
        "/portfolio/style.css",
        "/portfolio/me.jpg"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
