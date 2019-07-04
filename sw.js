/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "crown-yellow-small.png",
    "revision": "3a7ee6e43b9b3dd086d6d2a6a3e5d32f"
  },
  {
    "url": "css/main.min.css",
    "revision": "e22953247ba6ba1b3f1467813bae9a07"
  },
  {
    "url": "images/crown-yellow.png",
    "revision": "3a7ee6e43b9b3dd086d6d2a6a3e5d32f"
  },
  {
    "url": "images/noava.png",
    "revision": "5cd704fc4de15c5463fa3d31480600a4"
  },
  {
    "url": "images/wesbos.png",
    "revision": "fa4051bedaf36eb42f8e5a1660d3b5f1"
  },
  {
    "url": "index.html",
    "revision": "e0562145903d2bce7d5405187b1a493a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
