import { toastAnatomy } from '@ark-ui/react/anatomy';
import { defineSlotRecipe } from '@pandacss/dev';

export const toast = defineSlotRecipe({
	className: 'toast',
	slots: toastAnatomy.keys(),
	base: {
		root: {
			alignItems: 'start',
			background: 'gray.surface.bg',
			borderRadius: 'l3',
			boxShadow: 'lg',
			display: 'flex',
			gap: '4',
			height: 'var(--height)',
			minWidth: 'sm',
			maxWidth: 'md',
			opacity: 'var(--opacity)',
			overflowWrap: 'anywhere',
			p: '4',
			position: 'relative',
			scale: 'var(--scale)',
			transitionDuration: 'slow',
			transitionProperty: 'translate, scale, opacity, height',
			transitionTimingFunction: 'default',
			translate: 'var(--x) var(--y)',
			willChange: 'translate, opacity, scale',
			zIndex: 'var(--z-index)',
		},
		title: {
			color: 'fg.default',
			fontWeight: 'medium',
			textStyle: 'sm',
		},
		description: {
			color: 'fg.muted',
			textStyle: 'sm',
		},
		actionTrigger: {
			color: 'colorPalette.plain.fg',
			cursor: 'pointer',
			fontWeight: 'semibold',
			textStyle: 'sm',
			px: '2',
			py: '0.5',
			borderRadius: 'l1',
			borderWidth: '1px',
			borderColor: 'colorPalette.plain.fg/30',
			transition: 'colors',
			_hover: {
				bg: 'colorPalette.plain.fg/10',
			},
			_active: {
				bg: 'colorPalette.plain.fg/20',
			},
		},
		closeTrigger: {
			position: 'absolute',
			top: '2',
			insetEnd: '2',
		},
	},
});
