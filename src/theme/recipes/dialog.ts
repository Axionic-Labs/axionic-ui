import { dialogAnatomy } from '@ark-ui/react/anatomy';
import { defineSlotRecipe } from '@pandacss/dev';

export const dialog = defineSlotRecipe({
	className: 'dialog',
	slots: dialogAnatomy.extendWith('header', 'body', 'footer').keys(),
	base: {
		backdrop: {
			background: 'rgba(16, 20, 22, 0.22)',
			backdropFilter: 'blur(14px)',
			height: '100dvh',
			left: '0',
			position: 'fixed',
			top: '0',
			width: '100dvw',
			zIndex: 'var(--z-index)',
			_open: {
				animationName: 'fade-in',
				animationTimingFunction: 'emphasized-in',
				animationDuration: 'normal',
			},
			_closed: {
				animationName: 'fade-out',
				animationTimingFunction: 'emphasized-out',
				animationDuration: 'fast',
			},
		},
		positioner: {
			'--dialog-z-index': 'zIndex.modal',
			display: 'flex',
			height: '100dvh',
			justifyContent: 'center',
			left: 0,
			overscrollBehaviorY: 'none',
			position: 'fixed',
			top: 0,
			width: '100dvw',
			zIndex: 'calc(var(--dialog-z-index) + var(--layer-index, 0))',
		},

		title: {
			fontWeight: 'semibold',
			textStyle: 'lg',
		},
		description: {
			color: 'fg.muted',
			textStyle: 'sm',
		},
		closeTrigger: {
			pos: 'absolute',
			top: '3',
			insetEnd: '3',
		},
		content: {
			'--dialog-z-index': 'zIndex.modal',
			bg: 'app.surface',
			borderRadius: 'l3',
			borderWidth: '1px',
			borderColor: 'rgba(45, 75, 74, 0.12)',
			boxShadow: '0 28px 56px rgba(19, 24, 25, 0.16)',
			display: 'flex',
			flexDirection: 'column',
			my: 'var(--dialog-margin, var(--dialog-base-margin))',
			outline: 0,
			position: 'relative',
			textStyle: 'sm',
			width: '100%',
			zIndex: 'calc(var(--dialog-z-index) + var(--layer-index, 0))',
			_open: {
				animationDuration: 'slowest',
			},
			_closed: {
				animationDuration: 'normal',
			},
			_dark: {
				bg: '#111a1d',
				borderColor: 'rgba(183, 207, 209, 0.08)',
			},
		},
		header: {
			display: 'flex',
			flexDirection: 'column',
			gap: '1',
			px: { base: '5', md: '6' },
			pt: { base: '5', md: '6' },
			pb: { base: '4', md: '5' },
			borderBottomWidth: '1px',
			borderBottomColor: 'rgba(45, 75, 74, 0.08)',
			flex: '0',
			_dark: {
				borderBottomColor: 'rgba(183, 207, 209, 0.08)',
			},
		},
		body: {
			display: 'flex',
			flex: '1',
			flexDirection: 'column',
			alignItems: 'flex-start',
			px: { base: '5', md: '6' },
			pb: { base: '5', md: '6' },
		},
		footer: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-end',
			flex: '0',
			gap: '3',
			px: { base: '5', md: '6' },
			py: { base: '4', md: '5' },
			borderTopWidth: '1px',
			borderTopColor: 'rgba(45, 75, 74, 0.08)',
			_dark: {
				borderTopColor: 'rgba(183, 207, 209, 0.08)',
			},
		},
	},
	defaultVariants: {
		size: 'md',
		scrollBehavior: 'outside',
		placement: 'center',
		motionPreset: 'scale',
	},
	variants: {
		motionPreset: {
			scale: {
				content: {
					_open: { animationName: 'scale-in, fade-in' },
					_closed: { animationName: 'scale-out, fade-out' },
				},
			},
			'slide-in-bottom': {
				content: {
					_open: { animationName: 'slide-from-bottom, fade-in' },
					_closed: { animationName: 'slide-to-bottom, fade-out' },
				},
			},
			'slide-in-top': {
				content: {
					_open: { animationName: 'slide-from-top, fade-in' },
					_closed: { animationName: 'slide-to-top, fade-out' },
				},
			},
			'slide-in-left': {
				content: {
					_open: { animationName: 'slide-from-left, fade-in' },
					_closed: { animationName: 'slide-to-left, fade-out' },
				},
			},
			'slide-in-right': {
				content: {
					_open: { animationName: 'slide-from-right, fade-in' },
					_closed: { animationName: 'slide-to-right, fade-out' },
				},
			},
			none: {},
		},
		size: {
			xs: { content: { maxW: 'sm' } },
			sm: { content: { maxW: 'md' } },
			md: { content: { maxW: '3xl' } },
			lg: { content: { maxW: '5xl' } },
			xl: { content: { maxW: '6xl' } },
			cover: {
				positioner: { padding: '8' },
				content: {
					width: '100%',
					height: '100%',
					'--dialog-margin': '0',
				},
			},
			full: {
				content: {
					maxW: '100dvw',
					minH: '100dvh',
					'--dialog-margin': '0',
					borderRadius: '0',
				},
			},
		},
		placement: {
			center: {
				positioner: {
					alignItems: 'center',
				},
				content: {
					'--dialog-base-margin': 'auto',
					mx: 'auto',
				},
			},
			top: {
				positioner: {
					alignItems: 'flex-start',
				},
				content: {
					'--dialog-base-margin': 'spacing.16',
					mx: 'auto',
				},
			},
			bottom: {
				positioner: {
					alignItems: 'flex-end',
				},
				content: {
					'--dialog-base-margin': 'spacing.16',
					mx: 'auto',
				},
			},
		},
		accent: {
			true: {
				content: {
					_before: {
						content: '""',
						display: 'block',
						height: '3px',
						width: '100%',
						position: 'absolute',
						top: '0',
						left: '0',
						right: '0',
						borderTopRadius: 'l3',
						background:
							'linear-gradient(90deg, {colors.teal.light.9}, {colors.teal.light.8}, {colors.wheat.light.9})',
					},
				},
				title: {
					color: '{colors.teal.light.12}',
				},
			},
		},
		scrollBehavior: {
			inside: {
				positioner: {
					overflow: 'hidden',
				},
				content: {
					maxH: 'calc(100dvh - 5rem)',
				},
				body: {
					overflow: 'auto',
				},
			},
			outside: {
				positioner: {
					overflow: 'auto',
					pointerEvents: 'auto',
				},
			},
		},
	},
});
