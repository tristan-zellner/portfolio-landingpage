import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  vite: {
    server: {
      watch: {
        // Exclude the design handoff folder from file watching
        ignored: ["**/portfolio-website/**"],
      },
    },
  },
});
