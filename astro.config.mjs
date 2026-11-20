import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://2027.rustweek.org",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
  redirects: {
    "/schedule": "/schedule/tuesday",
    "/events": "/overview#list",
    "/live": "/live/tuesday",
  },
});
