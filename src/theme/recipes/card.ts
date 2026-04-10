import { defineSlotRecipe } from '@pandacss/dev';

export const card = defineSlotRecipe({
	className: 'card',
	slots: ['root', 'header', 'body', 'footer', 'title', 'description'],
	base: {
		root: {
			borderRadius: 'l3',
			display: 'flex',
			flexDirection: 'column',
			overflow: 'hidden',
			position: 'relative',
			borderWidth: '1px',
			borderColor: 'app.border',
			bg: 'app.surface',
			boxShadow: '{shadows.whisper}',
		},
		header: {
			display: 'flex',
			flexDirection: 'column',
			gap: '1.5',
			p: '5',
		},
		body: {
			display: 'flex',
			flex: '1',
			flexDirection: 'column',
			p: '5',
		},
		footer: {
			display: 'flex',
			justifyContent: 'flex-end',
			gap: '3',
			p: '5',
			pt: '3',
		},
		title: {
			textStyle: 'lg',
			fontWeight: 'semibold',
		},
		description: {
			color: 'fg.muted',
			textStyle: 'sm',
		},
	},
	defaultVariants: {
		variant: 'outline',
	},
	variants: {
		variant: {
			elevated: {
				root: {
					boxShadow: '{shadows.float}',
				},
			},
			outline: {
				root: {
					boxShadow: '{shadows.whisper}',
				},
			},
			subtle: {
				root: {
					bg: 'app.surface.muted',
					borderWidth: '1px',
					borderColor: 'transparent',
				},
			},
		},
		hover: {
			true: {
				root: {
					cursor: 'pointer',
					transition: 'all 0.2s',
					_hover: {
						boxShadow: '{shadows.float}',
						borderColor: 'app.border.strong',
						transform: 'translateY(-1px)',
					},
					_focusVisible: {
						outline: '2px solid',
						outlineColor: 'colorPalette.8',
						outlineOffset: '2px',
					},
				},
			},
		},
		dashed: {
			true: {
				root: {
					borderStyle: 'dashed',
					bg: 'app.surface.muted',
				},
			},
		},
		accent: {
			teal: {
				root: {
					borderTopWidth: '2px',
					borderTopColor: '{colors.teal.light.7}',
				},
			},
			wheat: {
				root: {
					borderTopWidth: '2px',
					borderTopColor: '{colors.wheat.light.9}',
				},
			},
		},
		gradient: {
			true: {
				root: {
					position: 'relative',
					overflow: 'hidden',
					_before: {
						content: '""',
						position: 'absolute',
						top: '0',
						left: '0',
						right: '0',
						height: '3px',
						background: 'linear-gradient(90deg, {colors.teal.light.9}, {colors.wheat.light.9})',
						zIndex: '1',
					},
				},
			},
		},
	},
});
