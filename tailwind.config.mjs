/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'white': '#FFFFFF',
			'paper-100': "#FFFAF7",
			'paper-200': "#F2EDEB",
			'blue-200': '#68a6E1',
			'blue-400': '#046BCD',
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
	plugins: [
		function ({ addComponents, theme }) {
			addComponents({
				'.heading': {
					color: theme('colors.black'),
					fontWeight: theme('fontWeight.bold')
				},
				'h1': {
					fontSize: theme('fontSize.5xl'),
				},
				'h2': {
					fontSize: theme('fontSize.4xl'),
				},
				'h3': {
					fontSize: theme('fontSize.3xl'),
				},
				'h4': {
					fontSize: theme('fontSize.2xl'),
				},
				'h5': {
					fontSize: theme('fontSize.xl'),
				},
				'h6': {
					fontSize: theme('fontSize.base'),
				},
				'p': {
					fontSize: theme('fontSize.base'),
					color: theme('colors.black'),
				},
				'a': {
					fontSize: theme('fontSize.base'),
					color: theme('colors.blue-400'),
				},
				'.avatar': {
					borderRadius: theme('borderRadius.full'),
				},
				'.navbar-item': {
					color: theme('colors.black'),
				},
				'.navbar-item:hover': {
					color: theme('colors.blue-400'),
					fontWeight: theme('fontWeight.bold')
				},
				'.navbar-item.active': {
					color: theme('colors.blue-400'),
					fontWeight: theme('fontWeight.bold')
				},
				'.icon-button.primary': {
					backgroundColor: theme('colors.blue-200'),
					color: theme('colors.paper-100'),
				},
				'.icon-button.primary:hover': {
					backgroundColor: theme('colors.blue-400'),
				},
				'.icon-button.secondary': {
					backgroundColor: theme('colors.paper-100'),
					color: theme('colors.gray'),
				},
				'.icon-button.secondary:hover': {
					backgroundColor: theme('colors.paper-200'),
				},
				'.icon-button': {
					backgroundColor: '#000',
				}
			});
		},
	],
}
