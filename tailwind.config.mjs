/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	safelist: [
		{
			pattern: /animate-.*/,
		},
		{
			pattern: /transition-.*/,
		},
		{
			pattern: /duration-.*/,
		},
		{
			pattern: /ease-.*/,
		},
	],
	theme: {
		container: {
			center: true,
			screens: {
				sm: "100%",
				md: "100%",
				lg: "680px",
				xl: "760px",
			},
			padding: "1.5rem",
		},
		extend: {
			fontFamily: {
				serif: ["'EB Garamond'", "Georgia", "serif"],
				mono: ["'Courier New'", "Courier", "monospace"],
			},
			boxShadow: {
				retro: "3px 3px 0 0 #33203e",
				"retro-sm": "2px 2px 0 0 #33203e",
			},
			colors: {
				bg: "#8b7fb8",
				surface: "#fdeff6",
				border: "#e9cfdf",
				highlight: "#f9dcea",
				primary: "#c2417f",
				"primary-hover": "#a02c64",
				"primary-dim": "#c2417f20",
				peach: "#ffa06e",
				mint: "#9fdcc5",
				lavender: "#b9a7e8",
				sun: "#ffd76e",
				muted: "#9c6f8c",
				subtle: "#7d5470",
				fg: "#33203e",
				"fg-dim": "#8c3a6b",

				// kept for prose/blog compat
				"light-theme": "#33203e",
				"dark-theme": "#8b7fb8",
				"primary-light": "#c2417f",
				"primary-dark": "#c2417f",
				"primary-hover-light": "#a02c64",
				"primary-hover-dark": "#a02c64",
				n200: "#8c3a6b",
				n900: "#f9dcea",
				n700: "#e9cfdf",
				n500: "#9c6f8c",
			},
		},
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
