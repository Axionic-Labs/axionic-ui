import type { RecipeConfig } from '@pandacss/dev';

export const input = {
	className: 'input',
	jsx: ['Input', 'Field.Input'],
	base: {
		appearance: 'none',
		borderRadius: 'xl',
		height: 'var(--input-height)',
		minHeight: 'var(--input-height)',
		minW: 'var(--input-height)',
		outline: '0',
		position: 'relative',
		textAlign: 'start',
		transition:
			'border-color 0.18s ease, box-shadow 0.18s ease, background-color 0.18s ease, transform 0.18s ease',
		width: '100%',
		_placeholder: {
			color: 'app.text.subtle',
		},
		_disabled: {
			layerStyle: 'disabled',
		},
	},
	defaultVariants: {
		size: 'md',
		variant: 'outline',
	},
	variants: {
		variant: {
			outline: {
				bg: 'app.surface',
				borderWidth: '1px',
				borderColor: 'app.border',
				color: 'app.text',
				_hover: {
					borderColor: 'app.border.strong',
					bg: 'app.surface.muted',
				},
				_focus: {
					borderColor: 'app.accent',
					boxShadow: '0 0 0 3px rgba(88, 153, 150, 0.16)',
					outline: 'none',
					bg: 'app.surface',
				},
				_invalid: {
					focusRingColor: 'error',
					borderColor: 'error',
				},
			},
			surface: {
				bg: 'app.surface',
				borderWidth: '1px',
				borderColor: 'app.border',
				color: 'app.text',
				_hover: {
					borderColor: 'app.border.strong',
					bg: 'app.surface.muted',
				},
				_focus: {
					borderColor: 'app.accent',
					boxShadow: '0 0 0 3px rgba(88, 153, 150, 0.16)',
					outline: 'none',
					bg: 'app.surface',
				},

				_invalid: {
					focusRingColor: 'error',
					borderColor: 'error',
				},
			},
			subtle: {
				borderWidth: '1px',
				borderColor: 'transparent',
				bg: 'app.canvas.subtle',
				color: 'app.text',
				_focus: {
					borderColor: 'app.border',
					bg: 'app.surface',
					outline: 'none',
				},

				_invalid: {
					focusRingColor: 'error',
					borderColor: 'error',
				},
			},
			flushed: {
				borderBottomWidth: '1px',
				borderBottomColor: 'gray.outline.border',
				borderRadius: '0',
				color: 'fg.default',
				px: '0',
				_invalid: {
					borderColor: 'error',
				},
				_focus: {
					borderColor: 'colorPalette.solid.bg',
					boxShadowColor: 'colorPalette.solid.bg',
					boxShadow: '0 1px 0 0 var(--shadow-color)',
					_invalid: {
						borderColor: 'error',
						boxShadowColor: 'error',
					},
				},
			},
		},
		size: {
			'2xs': { textStyle: 'xs', px: '2', '--input-height': 'sizes.8' },
			xs: { textStyle: 'sm', px: '2.5', '--input-height': 'sizes.9' },
			sm: { textStyle: 'sm', px: '3', '--input-height': 'sizes.10' },
			md: { textStyle: 'sm', px: '4', '--input-height': 'sizes.11' },
			lg: { textStyle: 'md', px: '4.25', '--input-height': 'sizes.12' },
			xl: { textStyle: 'lg', px: '4.5', '--input-height': 'sizes.14' },
			'2xl': { textStyle: '3xl', px: '5', '--input-height': 'sizes.16' },
		},
	},
} satisfies RecipeConfig;
