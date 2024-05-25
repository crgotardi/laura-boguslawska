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
		fontFamily: {
			sans: ['Niramit', 'sans-serif'],
		},
		fontSize: {
			xs: '0.8rem',
			sm: '1rem',
			base: '1.25rem',
			xl: '2rem',
			'2xl': '2.375rem',
			'3xl': '3rem',
			'4xl': '4rem',
			'5xl': '6rem',
		},
		extend: {},
	},
	plugins: [],
}
