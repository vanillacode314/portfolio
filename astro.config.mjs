import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import compress from "astro-compress";
import critters from "astro-critters";
import compressor from "astro-compressor";
import purgecss from "astro-purgecss";
import image from "@astrojs/image";
const BASE_URL = "https://raqueebuddinaziz.com";

// https://astro.build/config
export default defineConfig({
  // Enable Svelte to support Svelte components.
  site: BASE_URL,
  integrations: [
    image(),
    svelte(),
    sitemap({
      /* customPages: [BASE_URL + "/", BASE_URL + "/blog", ...getBlogs()], */
    }),
    robotsTxt(),
    purgecss(),
    /* critters(), */
    compressor(),
  ],
  markdown: {
    shikiConfig: {
      theme: "dark-plus",
    },
  },
  /* output: "server", */
  /* adapter: netlify(), */
});

/* import fs from "node:fs"; */
/* import netlify from "@astrojs/netlify/functions"; */
/* function getBlogs() { */
/*   const files = fs.readdirSync("src/pages/blog"); */
/*   const blogs = files.filter((file) => file.endsWith(".md")); */
/*   return blogs.map((blog) => BASE_URL + "/blog/" + blog.replace(".md", "")); */
/* } */
