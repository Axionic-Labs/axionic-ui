import { defineGlobalStyles } from '@pandacss/dev';

export const globalCss = defineGlobalStyles({
	html: {
		colorPalette: 'teal',
	},
	body: {
		fontFamily: 'body',
		color: 'app.text',
		bg: 'app.canvas',
		lineHeight: '1.55',
		WebkitFontSmoothing: 'antialiased',
		MozOsxFontSmoothing: 'grayscale',
	},
	'*, *::before, *::after': {
		borderColor: 'app.border',
	},
	'::selection': {
		bg: 'teal.a3',
		color: 'app.text',
	},
});
