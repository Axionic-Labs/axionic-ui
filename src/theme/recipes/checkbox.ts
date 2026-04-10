import { checkboxAnatomy } from '@ark-ui/react/anatomy';
import { defineSlotRecipe } from '@pandacss/dev';

export const checkbox = defineSlotRecipe({
	slots: checkboxAnatomy.keys(),
	className: 'checkbox',
	base: {
		root: {
			display: 'inline-flex',
			gap: '2',
			alignItems: 'center',
			verticalAlign: 'top',
			position: 'relative',
			_disabled: {
				layerStyle: 'disabled',
			},
		},
		control: {
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
			flexShrink: '0',
			borderWidth: '1px',
			borderColor: 'app.border',
			borderRadius: 'lg',
			cursor: 'pointer',
			bg: 'app.surface',
			focusVisibleRing: 'outside',

			_icon: {
				boxSize: 'full',
			},
		},
		label: {
			color: 'app.text',
			fontWeight: 'semibold',
			userSelect: 'none',
		},
	},

	variants: {
		size: {
			sm: {
				root: { gap: '2' },
				label: { textStyle: 'sm' },
				control: { boxSize: '4.5', _icon: { boxSize: '3' } },
			},
			md: {
				root: { gap: '3' },
				label: { textStyle: 'sm' },
				control: { boxSize: '5', _icon: { boxSize: '3.5' } },
			},
			lg: {
				root: { gap: '3' },
				label: { textStyle: 'lg' },
				control: { boxSize: '5.5', _icon: { boxSize: '4' } },
			},
		},

		variant: {
			solid: {
				control: {
					_checked: {
						bg: '{colors.teal.light.11}',
						borderColor: '{colors.teal.light.11}',
						color: 'white',
					},
					_invalid: {
						background: 'error',
					},
				},
			},
			surface: {
				control: {
					bg: 'app.surface',
					borderWidth: '1px',
					borderColor: 'app.border',
					color: 'app.text',
				},
			},
			subtle: {
				control: {
					bg: 'app.surface.muted',
					color: 'app.text',
				},
			},
			outline: {
				control: {
					borderWidth: '1px',
					borderColor: 'app.border',
					color: 'app.text',
					_checked: {
						borderColor: 'app.accent',
					},
				},
			},
			plain: {
				control: {
					color: 'colorPalette.plain.fg',
				},
			},
		},
	},

	defaultVariants: {
		variant: 'solid',
		size: 'md',
	},
});
