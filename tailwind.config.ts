import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Figtree Variable', ...fontFamily.sans],
				pixels: ['"Press Start 2P"', ...fontFamily.mono]
			}
		}
	},
	plugins: ['postcss-color-scheme/tailwind', 'tailwindcss-forms']
};
