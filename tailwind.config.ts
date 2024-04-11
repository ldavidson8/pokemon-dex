import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Figtree Variable', ...fontFamily.sans],
				mono: ['Geist Mono', ...fontFamily.mono]
			}
		},
		colors: {
			gray: {
				100: 'hsl(var(--gray-100-value) / <alpha-value>)',
				200: 'hsl(var(--gray-200-value) / <alpha-value>)',
				300: 'hsl(var(--gray-300-value) / <alpha-value>)',
				400: 'hsl(var(--gray-400-value) / <alpha-value>)',
				500: 'hsl(var(--gray-500-value) / <alpha-value>)',
				600: 'hsl(var(--gray-600-value) / <alpha-value>)',
				700: 'hsl(var(--gray-700-value) / <alpha-value>)',
				800: 'hsl(var(--gray-800-value) / <alpha-value>)',
				900: 'hsl(var(--gray-900-value) / <alpha-value>)',
				1000: 'hsl(var(--gray-1000-value) / <alpha-value>)'
			},
			blue: {
				100: 'hsl(var(--blue-100-value) / <alpha-value>)',
				200: 'hsl(var(--blue-200-value) / <alpha-value>)',
				300: 'hsl(var(--blue-300-value) / <alpha-value>)',
				400: 'hsl(var(--blue-400-value) / <alpha-value>)',
				500: 'hsl(var(--blue-500-value) / <alpha-value>)',
				600: 'hsl(var(--blue-600-value) / <alpha-value>)',
				700: 'hsl(var(--blue-700-value) / <alpha-value>)',
				800: 'hsl(var(--blue-800-value) / <alpha-value>)',
				900: 'hsl(var(--blue-900-value) / <alpha-value>)',
				1000: 'hsl(var(--blue-1000-value) / <alpha-value>)'
			},
			red: {
				100: 'hsl(var(--red-100-value) / <alpha-value>)',
				200: 'hsl(var(--red-200-value) / <alpha-value>)',
				300: 'hsl(var(--red-300-value) / <alpha-value>)',
				400: 'hsl(var(--red-400-value) / <alpha-value>)',
				500: 'hsl(var(--red-500-value) / <alpha-value>)',
				600: 'hsl(var(--red-600-value) / <alpha-value>)',
				700: 'hsl(var(--red-700-value) / <alpha-value>)',
				800: 'hsl(var(--red-800-value) / <alpha-value>)',
				900: 'hsl(var(--red-900-value) / <alpha-value>)',
				1000: 'hsl(var(--red-1000-value) / <alpha-value>)'
			},
			amber: {
				100: 'hsl(var(--amber-100-value) / <alpha-value>)',
				200: 'hsl(var(--amber-200-value) / <alpha-value>)',
				300: 'hsl(var(--amber-300-value) / <alpha-value>)',
				400: 'hsl(var(--amber-400-value) / <alpha-value>)',
				500: 'hsl(var(--amber-500-value) / <alpha-value>)',
				600: 'hsl(var(--amber-600-value) / <alpha-value>)',
				700: 'hsl(var(--amber-700-value) / <alpha-value>)',
				800: 'hsl(var(--amber-800-value) / <alpha-value>)',
				900: 'hsl(var(--amber-900-value) / <alpha-value>)',
				1000: 'hsl(var(--amber-1000-value) / <alpha-value>)'
			},
			green: {
				100: 'hsl(var(--green-100-value) / <alpha-value>)',
				200: 'hsl(var(--green-200-value) / <alpha-value>)',
				300: 'hsl(var(--green-300-value) / <alpha-value>)',
				400: 'hsl(var(--green-400-value) / <alpha-value>)',
				500: 'hsl(var(--green-500-value) / <alpha-value>)',
				600: 'hsl(var(--green-600-value) / <alpha-value>)',
				700: 'hsl(var(--green-700-value) / <alpha-value>)',
				800: 'hsl(var(--green-800-value) / <alpha-value>)',
				900: 'hsl(var(--green-900-value) / <alpha-value>)',
				1000: 'hsl(var(--green-1000-value) / <alpha-value>)'
			},
			teal: {
				100: 'hsl(var(--teal-100-value) / <alpha-value>)',
				200: 'hsl(var(--teal-200-value) / <alpha-value>)',
				300: 'hsl(var(--teal-300-value) / <alpha-value>)',
				400: 'hsl(var(--teal-400-value) / <alpha-value>)',
				500: 'hsl(var(--teal-500-value) / <alpha-value>)',
				600: 'hsl(var(--teal-600-value) / <alpha-value>)',
				700: 'hsl(var(--teal-700-value) / <alpha-value>)',
				800: 'hsl(var(--teal-800-value) / <alpha-value>)',
				900: 'hsl(var(--teal-900-value) / <alpha-value>)',
				1000: 'hsl(var(--teal-1000-value) / <alpha-value>)'
			},
			purple: {
				100: 'hsl(var(--purple-100-value) / <alpha-value>)',
				200: 'hsl(var(--purple-200-value) / <alpha-value>)',
				300: 'hsl(var(--purple-300-value) / <alpha-value>)',
				400: 'hsl(var(--purple-400-value) / <alpha-value>)',
				500: 'hsl(var(--purple-500-value) / <alpha-value>)',
				600: 'hsl(var(--purple-600-value) / <alpha-value>)',
				700: 'hsl(var(--purple-700-value) / <alpha-value>)',
				800: 'hsl(var(--purple-800-value) / <alpha-value>)',
				900: 'hsl(var(--purple-900-value) / <alpha-value>)',
				1000: 'hsl(var(--purple-1000-value) / <alpha-value>)'
			},
			pink: {
				100: 'hsl(var(--pink-100-value) / <alpha-value>)',
				200: 'hsl(var(--pink-200-value) / <alpha-value>)',
				300: 'hsl(var(--pink-300-value) / <alpha-value>)',
				400: 'hsl(var(--pink-400-value) / <alpha-value>)',
				500: 'hsl(var(--pink-500-value) / <alpha-value>)',
				600: 'hsl(var(--pink-600-value) / <alpha-value>)',
				700: 'hsl(var(--pink-700-value) / <alpha-value>)',
				800: 'hsl(var(--pink-800-value) / <alpha-value>)',
				900: 'hsl(var(--pink-900-value) / <alpha-value>)',
				1000: 'hsl(var(--pink-1000-value) / <alpha-value>)'
			},
			background: {
				100: 'var(--background-100)',
				200: 'var(--background-200)'
			}
		},
		plugins: ['postcss-color-scheme/tailwind', 'tailwindcss-forms']
	}
};
