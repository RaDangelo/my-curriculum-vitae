"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/my-curriculum-vitae/index.html","7e7a56dc76072b983d496d99af645e6f"],["/my-curriculum-vitae/static/css/main.3cc043a1.css","39fe9322be6b2e6f3d1d79dd07abba05"],["/my-curriculum-vitae/static/js/main.1bcbd996.js","3964293262ec6bb90e88bedcdf7fe8f9"],["/my-curriculum-vitae/static/media/angular-logo.e224f5ed.svg","e224f5ed261735072b00bdb3bae20cbd"],["/my-curriculum-vitae/static/media/css-logo.d3ad67fa.svg","d3ad67fa720fd7aee8c322caff911082"],["/my-curriculum-vitae/static/media/html-logo.7dffd9f3.svg","7dffd9f3befc41d7496ce325f3055084"],["/my-curriculum-vitae/static/media/java-logo.a732a6e5.svg","a732a6e5bc69653a55d6dd81ab8d2d5e"],["/my-curriculum-vitae/static/media/js-logo.87711407.svg","87711407412494d529d45ee76167583c"],["/my-curriculum-vitae/static/media/node-logo.94cafb0d.svg","94cafb0d1b4a2875215db17964f0938a"],["/my-curriculum-vitae/static/media/react-logo.20be474c.svg","20be474c72367ef40ceae7a0e0a48754"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=t),r.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,r,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(r)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var r=new URL(t).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,t){var r=new URL(e);return r.hash="",r.search=r.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),r.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],r=e[1],n=new URL(t,self.location),a=createCacheKey(n,hashParamName,r,/\.\w{8}\./);return[n.toString(),a]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(r){if(!t.has(r)){var n=new Request(r,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+r+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(r,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(r){return Promise.all(r.map(function(r){if(!t.has(r.url))return e.delete(r)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,r=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,"index.html"),t=urlsToCacheKeys.has(r));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(r=new URL("/my-curriculum-vitae/index.html",self.location).toString(),t=urlsToCacheKeys.has(r)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});