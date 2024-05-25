/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'white': '#FFFFFF',
			'paper-100': "#FFFAF7",
			'paper-200': "#F2EDEB",
			'blue-400': '#046BCD',
			'blue-200': '#68a6E1',
			'gray': '#838383',
			'black': '#333333',
		},
		extend: {},
	},
	plugins: [],
}
