import { defineGlobalStyles } from '@pandacss/dev';

export const globalCss = defineGlobalStyles({
	html: {
		colorPalette: 'teal',
	},
	body: {
		fontFamily: 'body',
		color: 'fg.default',
		bg: 'bg.canvas',
		lineHeight: '1.6',
		WebkitFontSmoothing: 'antialiased',
		MozOsxFontSmoothing: 'grayscale',
	},
	'*, *::before, *::after': {
		borderColor: 'border.muted',
	},
	'::selection': {
		bg: 'colorPalette.a4',
		color: 'colorPalette.12',
	},
});
