import { selectAnatomy } from '@ark-ui/react/anatomy';
import { defineSlotRecipe } from '@pandacss/dev';

const warmTriggerBg =
	'color-mix(in srgb, var(--colors-app-surface-muted) 84%, var(--colors-wheat-2) 16%)';
const warmTriggerHoverBg =
	'color-mix(in srgb, var(--colors-app-surface) 76%, var(--colors-wheat-3) 24%)';

export const select = defineSlotRecipe({
	className: 'select',
	slots: selectAnatomy.extendWith('indicatorGroup').keys(),
	base: {
		root: {
			display: 'flex',
			flexDirection: 'column',
			gap: '1.5',
			width: 'full',
		},
		content: {
			background: 'app.surface',
			borderRadius: 'xl',
			borderWidth: '0',
			borderColor: 'transparent',
			boxShadow: '{shadows.float}',
			display: 'flex',
			flexDirection: 'column',
			maxH: 'min(var(--available-height), {sizes.96})',
			minWidth: 'max(var(--reference-width), {sizes.40})',
			outline: 0,
			overflowY: 'auto',
			zIndex: 'dropdown',
			_open: {
				animationStyle: 'slide-fade-in',
				animationDuration: 'slow',
			},
			_closed: {
				animationStyle: 'slide-fade-out',
				animationDuration: 'fastest',
			},
		},
		item: {
			alignItems: 'center',
			borderRadius: 'lg',
			color: 'app.text',
			cursor: 'pointer',
			display: 'flex',
			justifyContent: 'space-between',
			userSelect: 'none',
			_hover: {
				background: 'app.canvas.subtle',
			},
			_highlighted: {
				background: 'app.canvas.subtle',
			},
			_selected: {},
			_disabled: {
				layerStyle: 'disabled',
			},
		},
		indicatorGroup: {
			display: 'flex',
			alignItems: 'center',
			gap: '1',
			pointerEvents: 'none',
		},
		indicator: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			color: 'app.text.subtle',
		},
		itemGroupLabel: {
			alignItems: 'flex-start',
			color: 'app.text.subtle',
			display: 'flex',
			flexDirection: 'column',
			fontWeight: 'semibold',
			gap: '1px',
			justifyContent: 'center',
			textTransform: 'uppercase',
			letterSpacing: '0.08em',
		},
		itemIndicator: {
			color: 'app.accent',
		},
		label: {
			color: 'app.text.subtle',
			fontWeight: 'semibold',
			userSelect: 'none',
			textStyle: 'caption',
		},
		trigger: {
			alignItems: 'center',
			bg: 'app.surface',
			borderRadius: 'xl',
			cursor: 'pointer',
			display: 'flex',
			justifyContent: 'space-between',
			minWidth: '0',
			outline: '0',
			textAlign: 'start',
			transition: 'border-color 0.18s ease, box-shadow 0.18s ease, background-color 0.18s ease',
			userSelect: 'none',
			width: 'full',
			_placeholderShown: {
				color: 'app.text.subtle',
			},
			_disabled: {
				layerStyle: 'disabled',
			},
		},
		valueText: {
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
		},
	},
	defaultVariants: {
		size: 'md',
		variant: 'outline',
	},
	variants: {
		variant: {
			outline: {
				trigger: {
					bg: 'app.surface',
					boxShadow: '{shadows.whisper}',
					borderWidth: '0',
					borderColor: 'transparent',
					_hover: {
						bg: 'app.surface.raised',
					},
					_focusVisible: {
						boxShadow: '0 0 0 3px rgba(88, 153, 150, 0.16)',
						outline: 'none',
						bg: 'app.surface.raised',
					},
				},
			},
			surface: {
				trigger: {
					bg: warmTriggerBg,
					borderWidth: '0',
					borderColor: 'transparent',
					_hover: {
						bg: warmTriggerHoverBg,
					},
					_focusVisible: {
						boxShadow: '0 0 0 3px rgba(88, 153, 150, 0.16)',
						outline: 'none',
						bg: 'app.surface',
					},
				},
			},
		},
		size: {
			xs: {
				content: { p: '1.5', gap: '0.75', textStyle: 'sm' },
				item: { px: '2', minH: '8', gap: '2', _icon: { boxSize: '3.5' } },
				itemGroup: { gap: '0.5' },
				itemGroupLabel: { px: '1', height: '8' },
				trigger: { px: '2', h: '8', textStyle: 'sm', gap: '2', _icon: { boxSize: '3.5' } },
			},
			sm: {
				content: { p: '1.5', gap: '0.75', textStyle: 'sm' },
				item: { px: '2.25', minH: '9', gap: '2', _icon: { boxSize: '4' } },
				itemGroup: { gap: '0.5' },
				itemGroupLabel: { px: '1.5', height: '9' },
				trigger: { px: '2.5', h: '9', textStyle: 'sm', gap: '2', _icon: { boxSize: '4' } },
			},
			md: {
				content: { p: '1.75', gap: '0.75', textStyle: 'sm' },
				item: { px: '2.75', minH: '10', gap: '2.25', _icon: { boxSize: '4' } },
				itemGroup: { gap: '0.5' },
				itemGroupLabel: { px: '2', height: '8' },
				trigger: { px: '3.5', h: '10', textStyle: 'sm', gap: '2', _icon: { boxSize: '4' } },
			},
			lg: {
				content: { p: '1.75', gap: '0.75', textStyle: 'md' },
				item: { px: '3', minH: '11', gap: '2', _icon: { boxSize: '4.5' } },
				itemGroup: { gap: '0.5' },
				itemGroupLabel: { px: '2.5', height: '8' },
				trigger: { px: '3.5', h: '11', textStyle: 'md', gap: '2', _icon: { boxSize: '4.5' } },
			},
			xl: {
				content: { p: '1', gap: '1', textStyle: 'lg' },
				item: { px: '3', minH: '12', gap: '3', _icon: { boxSize: '5' } },
				itemGroup: { gap: '1' },
				itemGroupLabel: { px: '3', height: '12' },
				trigger: { px: '4', h: '12', textStyle: 'lg', gap: '3', _icon: { boxSize: '5' } },
			},
		},
	},
});
