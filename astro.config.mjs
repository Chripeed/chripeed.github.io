// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://chripeed.github.io",
  output: "static", // or 'static' if you only want certain pages on-demand
  adapter: node({
    mode: "standalone",
  }),
  integrations: [react(), tailwind()],
});
