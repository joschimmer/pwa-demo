import { cleanupOutdatedCaches, precacheAndRoute } from "workbox-precaching";
import { clientsClaim } from "workbox-core";
import { articleEventBus } from "@/ArticleEventBus";

declare let self: ServiceWorkerGlobalScope;

self.skipWaiting();
clientsClaim();

cleanupOutdatedCaches();
precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener("sync", (event) => {
  articleEventBus.emit("add", {
    message: "Message from Service Worker",
  });
  console.debug("Sync Event");
});
