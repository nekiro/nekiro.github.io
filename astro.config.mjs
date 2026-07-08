// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://nekiro.dev/",
	integrations: [
		mdx(),
		react(),
		icon(),
		sitemap(),
	],
	vite: {
		// ponytail: lightningcss chokes on tailwind 3 output; revisit after tailwind 4 migration
		build: { cssMinify: "esbuild" },
	},
	markdown: {
		shikiConfig: {
			theme: "rose-pine-dawn",
			wrap: true,
		},
	},
});
