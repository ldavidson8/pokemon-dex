import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Figtree Variable', ...fontFamily.sans],
				mono: ['Geist Mono', ...fontFamily.mono]
			},
			zIndex: {
				'1': '1'
			},
			transitionTimingFunction: {
				ease: 'ease'
			},
			gridTemplateColumns: {
				'auto-fill-100': 'repeat(auto-fill, minmax(100px, 1fr))',
				'auto-fill-200': 'repeat(auto-fill, minmax(200px, 1fr))',
				'auto-fit-100': 'repeat(auto-fit, minmax(100px, 1fr))'
			}
		},
		container: {
			center: true,
			screens: {
				'2xl': '1440px'
			}
		},
		colors: {
			white: '#fff',
			black: '#000',
			border: 'hsl(var(--border) / <alpha-value>)',
			input: 'hsl(var(--input) / <alpha-value>)',
			card: 'hsl(var(--card) / <alpha-value>)',
			cardForeground: 'hsl(var(--card-foreground) / <alpha-value>)',
			background: {
				100: 'hsl(var(--background-100))',
				200: 'hsl(var(--background-200))'
			},
			gray: {
				100: 'var(--gray-100-value)',
				200: 'var(--gray-200-value)',
				300: 'var(--gray-300-value)',
				400: 'var(--gray-400-value)',
				500: 'var(--gray-500-value)',
				600: 'var(--gray-600-value)',
				700: 'var(--gray-700-value)',
				800: 'var(--gray-800-value)',
				900: 'var(--gray-900-value)',
				1000: 'var(--gray-1000-value)'
			},
			blue: {
				100: 'var(--blue-100-value)',
				200: 'var(--blue-200-value)',
				300: 'var(--blue-300-value)',
				400: 'var(--blue-400-value)',
				500: 'var(--blue-500-value)',
				600: 'var(--blue-600-value)',
				700: 'var(--blue-700-value)',
				800: 'var(--blue-800-value)',
				900: 'var(--blue-900-value)',
				1000: 'var(--blue-1000-value)'
			},
			red: {
				100: 'var(--red-100-value)',
				200: 'var(--red-200-value)',
				300: 'var(--red-300-value)',
				400: 'var(--red-400-value)',
				500: 'var(--red-500-value)',
				600: 'var(--red-600-value)',
				700: 'var(--red-700-value)',
				800: 'var(--red-800-value)',
				900: 'var(--red-900-value)',
				1000: 'var(--red-1000-value)'
			},
			amber: {
				100: 'var(--amber-100-value)',
				200: 'var(--amber-200-value)',
				300: 'var(--amber-300-value)',
				400: 'var(--amber-400-value)',
				500: 'var(--amber-500-value)',
				600: 'var(--amber-600-value)',
				700: 'var(--amber-700-value)',
				800: 'var(--amber-800-value)',
				900: 'var(--amber-900-value)',
				1000: 'var(--amber-1000-value)'
			},
			green: {
				100: 'var(--green-100-value)',
				200: 'var(--green-200-value)',
				300: 'var(--green-300-value)',
				400: 'var(--green-400-value)',
				500: 'var(--green-500-value)',
				600: 'var(--green-600-value)',
				700: 'var(--green-700-value)',
				800: 'var(--green-800-value)',
				900: 'var(--green-900-value)',
				1000: 'var(--green-1000-value)'
			},
			teal: {
				100: 'var(--teal-100-value)',
				200: 'var(--teal-200-value)',
				300: 'var(--teal-300-value)',
				400: 'var(--teal-400-value)',
				500: 'var(--teal-500-value)',
				600: 'var(--teal-600-value)',
				700: 'var(--teal-700-value)',
				800: 'var(--teal-800-value)',
				900: 'var(--teal-900-value)',
				1000: 'var(--teal-1000-value)'
			},
			purple: {
				100: 'var(--purple-100-value)',
				200: 'var(--purple-200-value)',
				300: 'var(--purple-300-value)',
				400: 'var(--purple-400-value)',
				500: 'var(--purple-500-value)',
				600: 'var(--purple-600-value)',
				700: 'var(--purple-700-value)',
				800: 'var(--purple-800-value)',
				900: 'var(--purple-900-value)',
				1000: 'var(--purple-1000-value)'
			},
			pink: {
				100: 'var(--pink-100-value)',
				200: 'var(--pink-200-value)',
				300: 'var(--pink-300-value)',
				400: 'var(--pink-400-value)',
				500: 'var(--pink-500-value)',
				600: 'var(--pink-600-value)',
				700: 'var(--pink-700-value)',
				800: 'var(--pink-800-value)',
				900: 'var(--pink-900-value)',
				1000: 'var(--pink-1000-value)'
			},
			'gray-alpha': {
				'100': 'var(--gray-alpha-100)',
				'200': 'var(--gray-alpha-200)',
				'300': 'var(--gray-alpha-300)',
				'400': 'var(--gray-alpha-400)',
				'500': 'var(--gray-alpha-500)',
				'600': 'var(--gray-alpha-600)',
				'700': 'var(--gray-alpha-700)',
				'800': 'var(--gray-alpha-800)',
				'900': 'var(--gray-alpha-900)',
				'1000': 'var(--gray-alpha-1000)'
			},
			'pkmn-normal': 'var(--pkmn-normal)',
			'pkmn-fire': 'var(--pkmn-fire)',
			'pkmn-water': 'var(--pkmn-water)',
			'pkmn-electric': 'var(--pkmn-electric)',
			'pkmn-grass': 'var(--pkmn-grass)',
			'pkmn-ice': 'var(--pkmn-ice)',
			'pkmn-fighting': 'var(--pkmn-fighting)',
			'pkmn-poison': 'var(--pkmn-poison)',
			'pkmn-ground': 'var(--pkmn-ground)',
			'pkmn-flying': 'var(--pkmn-flying)',
			'pkmn-psychic': 'var(--pkmn-psychic)',
			'pkmn-bug': 'var(--pkmn-bug)',
			'pkmn-rock': 'var(--pkmn-rock)',
			'pkmn-ghost': 'var(--pkmn-ghost)',
			'pkmn-dragon': 'var(--pkmn-dragon)',
			'pkmn-dark': 'var(--pkmn-dark)',
			'pkmn-steel': 'var(--pkmn-steel)',
			'pkmn-fairy': 'var(--pkmn-fairy)',
			'pkmn-unknown': 'var(--pkmn-unknown)',
			'pkmn-shadow': 'var(--pkmn-shadow)'
		},
		plugins: ['postcss-color-scheme/tailwind', 'tailwindcss-forms']
	}
};
