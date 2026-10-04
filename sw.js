const CACHE_NAME = "kkr-lifehub-v2";

const APP_ASSETS = [
    "./test.html",
    "./manifest.json"
];

self.addEventListener("install", function(event) {

    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {

            return cache.addAll(APP_ASSETS);

        })
    );

});


self.addEventListener("fetch", function(event) {

    event.respondWith(

        caches.match(event.request).then(function(response) {

            return response || fetch(event.request);

        })

    );

});
