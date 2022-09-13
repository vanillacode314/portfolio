import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
/* import fs from "node:fs"; */

/* import netlify from "@astrojs/netlify/functions"; */
const BASE_URL = "https://raqueebuddinaziz.com";

/* function getBlogs() { */
/*   const files = fs.readdirSync("src/pages/blog"); */
/*   const blogs = files.filter((file) => file.endsWith(".md")); */
/*   return blogs.map((blog) => BASE_URL + "/blog/" + blog.replace(".md", "")); */
/* } */

// https://astro.build/config
export default defineConfig({
  // Enable Svelte to support Svelte components.
  site: BASE_URL,
  integrations: [
    svelte(),
    sitemap({
      /* customPages: [BASE_URL + "/", BASE_URL + "/blog", ...getBlogs()], */
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "dark-plus",
    },
  },
  /* output: "server", */
  /* adapter: netlify(), */
});
