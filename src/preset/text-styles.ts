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
			fontSize: '2.75rem',
			fontWeight: '800',
			lineHeight: '1.15',
			letterSpacing: '-0.02em',
		},
	},
	h2: {
		value: { fontFamily: 'body', fontSize: '2rem', fontWeight: '700', lineHeight: '1.25' },
	},
	h3: {
		value: { fontFamily: 'body', fontSize: '1.5rem', fontWeight: '700', lineHeight: '1.35' },
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
	accentSubtitle: {
		description: 'High-contrast warm gold text for subtitles on dark backgrounds.',
		value: {
			fontWeight: '600',
			color: '#f5dfc0',
		},
	},
	cardHeading: {
		description: 'Card section title — bold teal heading.',
		value: {
			fontFamily: 'body',
			fontSize: '1.125rem',
			fontWeight: '700',
			lineHeight: '1.35',
		},
	},
	sectionHeading: {
		description: 'Smaller section heading within cards.',
		value: {
			fontFamily: 'body',
			fontSize: '0.875rem',
			fontWeight: '700',
			lineHeight: '1.4',
		},
	},
	description: {
		description: 'Small muted description/helper text.',
		value: {
			fontFamily: 'body',
			fontSize: '0.75rem',
			fontWeight: '400',
			lineHeight: '1.5',
		},
	},
});
