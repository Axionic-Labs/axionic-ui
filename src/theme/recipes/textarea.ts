import { defineRecipe } from '@pandacss/dev';

export const textarea = defineRecipe({
	className: 'textarea',
	base: {
		appearance: 'none',
		borderRadius: 'l3',
		minWidth: '0',
		outline: '0',
		position: 'relative',
		transition: 'colors',
		transitionProperty: 'box-shadow, border-color',
		width: '100%',
		_disabled: {
			layerStyle: 'disabled',
		},
	},
	defaultVariants: {
		size: 'md',
		variant: 'surface',
	},
	variants: {
		variant: {
			outline: {
				bg: 'app.surface',
				borderWidth: '1px',
				borderColor: 'app.border',
				color: 'app.text',
				_focus: {
					borderColor: 'app.accent',
					boxShadow: '0 0 0 3px {colors.teal.light.a3}',
					outline: 'none',
				},
				_invalid: {
					borderColor: 'error',
					focusRingColor: 'error',
				},
			},
			surface: {
				bg: 'app.surface.muted',
				borderWidth: '1px',
				borderColor: 'app.border',
				color: 'app.text',
				_focus: {
					borderColor: 'app.accent',
					boxShadow: '0 0 0 3px {colors.teal.light.a3}',
					outline: 'none',
				},
				_invalid: {
					borderColor: 'error',
					focusRingColor: 'error',
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
					borderColor: 'error',
					focusRingColor: 'error',
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
			xs: { textStyle: 'sm', px: '2.5', py: '7px', scrollPaddingBottom: '7px' },
			sm: { textStyle: 'sm', px: '3', py: '9px', scrollPaddingBottom: '9px' },
			md: { textStyle: 'md', px: '3.5', py: '9px', scrollPaddingBottom: '9px' },
			lg: { textStyle: 'md', px: '4', py: '11px', scrollPaddingBottom: '11px' },
			xl: { textStyle: 'lg', px: '4.5', py: '11px', scrollPaddingBottom: '11px' },
		},
	},
});
