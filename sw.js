self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("naidandorj-cache").then((cache) =>
      cache.addAll([
        "/My_new_web/",
        "/My_new_web/index.html",
        "/My_new_web/style.css",
        "/My_new_web/script.js"
      ])
    )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
