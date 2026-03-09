import { defineTextStyles } from '@pandacss/dev';

export const textStyles = defineTextStyles({
	display: {
		value: {
			fontFamily: 'display',
			fontSize: '3.5rem',
			fontWeight: '700',
			lineHeight: '1.1',
			letterSpacing: '-0.02em',
		},
	},
	h1: {
		value: {
			fontFamily: 'body',
			fontSize: '2.25rem',
			fontWeight: '700',
			lineHeight: '1.2',
			letterSpacing: '-0.01em',
		},
	},
	h2: {
		value: { fontFamily: 'body', fontSize: '1.875rem', fontWeight: '600', lineHeight: '1.3' },
	},
	h3: {
		value: { fontFamily: 'body', fontSize: '1.5rem', fontWeight: '600', lineHeight: '1.4' },
	},
	body: {
		value: { fontFamily: 'body', fontSize: '1rem', fontWeight: '400', lineHeight: '1.6' },
	},
	small: {
		value: { fontFamily: 'body', fontSize: '0.875rem', fontWeight: '400', lineHeight: '1.5' },
	},
	caption: {
		value: { fontFamily: 'body', fontSize: '0.75rem', fontWeight: '500', lineHeight: '1.4' },
	},
	label: {
		value: { fontFamily: 'body', fontSize: '0.875rem', fontWeight: '600', lineHeight: '1.4' },
	},
	code: {
		value: { fontFamily: 'mono', fontSize: '0.875rem', fontWeight: '400', lineHeight: '1.6' },
	},
	accentGlow: {
		description: 'Wheat-colored text with a soft warm glow. Use on dark backgrounds for accent subtitles.',
		value: {
			fontWeight: '600',
			color: '{colors.wheat.9}',
			textShadow: '0 0 4px rgba(230, 182, 133, 0.8), 0 0 14px rgba(230, 182, 133, 0.55), 0 0 32px rgba(230, 182, 133, 0.3), 0 0 60px rgba(230, 182, 133, 0.12)',
		},
	},
});
