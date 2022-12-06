// self.addEventListener('install', e =>{
//     const cacheProm = caches.open('cache-v1')
//         .then(cache => {
//             return cache.addAll([
//                 '/',
//                 'index.html',
//                 'css/style.css',
//                 'css/normalize.css',
//                 'js/script.js',
//                 'img/caf.jpg',
//                 'img/cafeteria.jpg',
//                 'img/coffee.jpg',
//                 'img/menucaf.jpg',
//                 'img/pan.jpg',
//                 'img/pastel.jpg',
//                 'img/vaso.jpg',
//                 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
//             ])
            
//         });
        
//     e.waitUntil(cacheProm);
// });

// self.addEventListener('fetch', e =>{
//     //cache with network fallback
//     const respuesta = caches.match( e.request )
//         .then ( res => {
//             if ( res ) return res;
//             //no existe el archivo
//             //tengo que ir a la web
//             console.log('No existe', e.request.url);
//             return fetch( e.request ).then ( newResp => {
//                 caches.open('cache-v1')
//                     .then( cache => {
//                         cache.put( e.request, newResp);
//                     }

//                     )
//                 return newResp.clone;
//             });
//         });
//         e.respondWith(respuesta);
//     //only cache
//     //e.respondWith( caches.match(e.request));
// });

//desde aqui

self.addEventListener('install', e =>{
    const cacheProm = caches.open('cache-v1')
        .then(cache => {
            return cache.addAll([
                '/',
                'index.html',
                'css/style.css', 
                'css/normalize.css',
                'js/script.js',
                'img/caf.jpg',
                'img/cafeteria.jpg',
                'img/coffee.jpg',
                'img/menucaf.jpg',
                'img/pan.jpg',
                'img/pastel.jpg',
                'img/vaso.jpg',
                'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
            ])
            
        });
    e.waitUntil(cacheProm);
});

self.addEventListener('fetch', e =>{
    //cache with network fallback
    const respuesta = caches.match( e.request )
        .then ( res => {
            if ( res ) return res;
            //no existe el archivo
            //tengo que ir a la web
            console.log('No existe', e.request.url);
            return fetch( e.request ).then ( newResp => {
                caches.open('cache-v1')
                    .then( cache => {
                        cache.put( e.request, newResp);
                    }

                    )
                return newResp.clone;
            });
        });
        e.respondWith(respuesta);
    //only cache
    //e.respondWith( caches.match(e.request));
});

