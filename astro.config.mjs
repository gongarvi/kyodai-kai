// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import auth from "auth-astro";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), auth()],
  adapter: netlify(),
});
