import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme.js'

export default {
	content: ['./app/**/*.{ts,tsx,jsx,js}'],
	plugins: [require('daisyui'), require('tailwind-scrollbar-hide')],
	theme: {
		extend: {
			colors: {
				Eden: '#0f4d5c',
				Elm: '#1f7c8e',
				Pelorous: '#3ea5bb',
				Cornflower: '#89d1e1',
				MintTulip: '#c1e6f1',
			},
			fontFamily: {
				sans: [
					'Nunito Sans',
					'Nunito Sans Fallback',
					...defaultTheme.fontFamily.sans,
				],
			},
		},
	},
} satisfies Config
