import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://tristanzellner.de",
  output: "static",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/lebenslauf"),
    }),
  ],
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: [400, 500, 600, 700],
      styles: ["normal"],
    },
    {
      provider: fontProviders.google(),
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
      weights: [400, 500],
      styles: ["normal"],
    },
  ],
  vite: {
    server: {
      watch: {
        // Exclude the design handoff folder from file watching
        ignored: ["**/portfolio-website/**"],
      },
    },
  },
});
