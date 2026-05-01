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
				funnel: ["Funnel Sans", "sans-serif"],
				mono: ["'Courier New'", "Courier", "monospace"],
			},
			colors: {
				bg: "#0a0a0a",
				surface: "#111111",
				border: "#222222",
				primary: "#a855f7",
				"primary-hover": "#9333ea",
				"primary-dim": "#a855f720",
				muted: "#999999",
				subtle: "#bbbbbb",
				fg: "#f0f0f0",
				"fg-dim": "#cccccc",

				// kept for prose/blog compat
				"light-theme": "#e5e5e5",
				"dark-theme": "#0a0a0a",
				"primary-light": "#a855f7",
				"primary-dark": "#a855f7",
				"primary-hover-light": "#9333ea",
				"primary-hover-dark": "#9333ea",
				n200: "#d4d4d4",
				n900: "#171717",
				n700: "#262626",
				n500: "#555555",
			},
		},
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
