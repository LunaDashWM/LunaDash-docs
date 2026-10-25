import { defineConfig } from "astro/config";

// The Pages workflow passes the deployment's URL; local builds default to this
// repository's GitHub Pages site.
const site = process.env.SITE_URL || "https://lunadashwm.github.io";
const base = process.env.BASE_PATH || "/LunaDash-docs";

export default defineConfig({
  site,
  base,
  output: "static",
});
