const CACHE_NAME = "version-1";
const urlsToCache = ['index.html', 'offline.html'];

this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    )
});

this.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then(() => {
            return fetch(event.request)
                .catch(() => caches.match('offline.html'))
        })
    )
});

this.addEventListener('activate', (event) => {
    const cacaheWhiteList = [];
    cacaheWhiteList.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then(cnames => Promise.all(
            cnames.map(cname => {
                if (!cacaheWhiteList.includes(cname)) {
                    return caches.delete(cname)
                }
            })
        ))
    );
});