import { defineConfig } from "astro/config";
import path from "path";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src")
      }
    }
  },
  integrations: [svelte()]
});