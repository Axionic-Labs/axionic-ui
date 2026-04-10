import { defineTextStyles } from '@pandacss/dev';

export const textStyles = defineTextStyles({
	display: {
		value: {
			fontFamily: 'display',
			fontSize: '3.875rem',
			fontWeight: '760',
			lineHeight: '1.02',
			letterSpacing: '-0.03em',
		},
	},
	h1: {
		value: {
			fontFamily: 'body',
			fontSize: '3.75rem',
			fontWeight: '760',
			lineHeight: '1.02',
			letterSpacing: '-0.03em',
		},
	},
	h2: {
		value: {
			fontFamily: 'body',
			fontSize: '2.25rem',
			fontWeight: '750',
			lineHeight: '1.12',
			letterSpacing: '-0.02em',
		},
	},
	h3: {
		value: {
			fontFamily: 'body',
			fontSize: '1.625rem',
			fontWeight: '700',
			lineHeight: '1.2',
			letterSpacing: '-0.01em',
		},
	},
	body: {
		value: { fontFamily: 'body', fontSize: '1rem', fontWeight: '400', lineHeight: '1.55' },
	},
	small: {
		value: { fontFamily: 'body', fontSize: '0.875rem', fontWeight: '400', lineHeight: '1.45' },
	},
	caption: {
		value: { fontFamily: 'body', fontSize: '0.75rem', fontWeight: '600', lineHeight: '1.35' },
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
			color: 'wheat.11',
		},
	},
	eyebrow: {
		description: 'Compact uppercase eyebrow for page and panel intros.',
		value: {
			fontFamily: 'body',
			fontSize: '0.75rem',
			fontWeight: '700',
			lineHeight: '1.2',
			letterSpacing: '0.18em',
			textTransform: 'uppercase',
		},
	},
	pageTitle: {
		description: 'Primary page title used in app workspace intros.',
		value: {
			fontFamily: 'display',
			fontSize: '2.5rem',
			fontWeight: '760',
			lineHeight: '1.04',
			letterSpacing: '-0.03em',
		},
	},
	sectionTitle: {
		description: 'Panel and section title within product workspaces.',
		value: {
			fontFamily: 'display',
			fontSize: '1.05rem',
			fontWeight: '650',
			lineHeight: '1.22',
			letterSpacing: '-0.015em',
		},
	},
	toolbarLabel: {
		description: 'Compact toolbar label and top-nav text.',
		value: {
			fontFamily: 'display',
			fontSize: '0.875rem',
			fontWeight: '600',
			lineHeight: '1.25',
		},
	},
	metricValue: {
		description: 'Large metric value used in KPI tiles.',
		value: {
			fontFamily: 'body',
			fontSize: '1.8rem',
			fontWeight: '760',
			lineHeight: '1',
			letterSpacing: '-0.03em',
		},
	},
	metricLabel: {
		description: 'Small uppercase metric label used in KPI tiles.',
		value: {
			fontFamily: 'body',
			fontSize: '0.6875rem',
			fontWeight: '700',
			lineHeight: '1.2',
			letterSpacing: '0.14em',
			textTransform: 'uppercase',
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
			fontSize: '0.875rem',
			fontWeight: '400',
			lineHeight: '1.5',
		},
	},
});
