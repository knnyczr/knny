"use strict";var precacheConfig=[["/index.html","dc22a0447e5e4f010f8fe86155a348b6"],["/static/css/main.835c323c.css","9105f858efbfb7dd6b9356c72fab5cdf"],["/static/media/LIKWID.c7ef2aec.png","c7ef2aec36356ba6e3b98fd3dcb3ec11"],["/static/media/amys.88289d19.png","88289d19fb9e92bb21cc9284c68814f8"],["/static/media/businesscards.a058b552.png","a058b5527985a245cf227603e6818fc7"],["/static/media/dico.21bb402e.jpg","21bb402eebee141d15e7d21bdfec60cf"],["/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/static/media/hero.686d8d35.jpg","686d8d35127378d21196ce062d571659"],["/static/media/hero.b1027c8e.jpg","b1027c8e57d97f6279e1e5710ff4af0b"],["/static/media/ilovehue.61ec485a.png","61ec485a5858328a60d1d5593525a401"],["/static/media/lights.523e71ad.jpg","523e71ad78558da7b96c420a5919851a"],["/static/media/likwid.cba1c088.png","cba1c088ebfbbeb7a8121416edf766e1"],["/static/media/likwid_color.68d445e0.jpg","68d445e0d2d4e00ed391e727a129c071"],["/static/media/likwid_lander_2.09d09083.png","09d09083c997e55b09c4c15eee56fe5b"],["/static/media/likwid_lander_3.8ae58420.jpg","8ae58420209849fc2d79cba4c1295b5c"],["/static/media/likwid_lander_4.544658aa.png","544658aaedefa055f7691cf1a6fbfcde"],["/static/media/likwid_lander_5.fb088165.gif","fb088165d9b850b6444dbe9090ab2bf0"],["/static/media/likwid_lander_6.68d99647.gif","68d996477ef7700d38d5cdfaf2d421a9"],["/static/media/logo.d51be021.svg","d51be0212cefe4b0fb8726b7d90b0728"],["/static/media/package_2.6593f933.png","6593f9337571f04b22291333c036320d"],["/static/media/pal_et.229d4780.png","229d4780769290f78f27c3f427c467c7"],["/static/media/self.85d56339.gif","85d5633901b53cc77eddab1b80fc6e86"],["/static/media/spectrum.6bd2a8f1.png","6bd2a8f1e79a61be6cca64a2bd2c0fad"],["/static/media/tape_packaging.7582d597.jpg","7582d59749dc299369e0ba47cf9064ae"],["/static/media/thesis.a6893e21.jpg","a6893e211ab27fa02b1466880ec4ee78"],["/static/media/tictactoe.6ffa7c1a.png","6ffa7c1ae3c1c932380af45069ae20de"],["/static/media/ulog.52b7d77e.png","52b7d77ed7d297881432f765c40043f1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});