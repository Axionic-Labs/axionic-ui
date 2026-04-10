import { sliderAnatomy } from '@ark-ui/react/anatomy';
import { defineSlotRecipe } from '@pandacss/dev';

export const slider = defineSlotRecipe({
	className: 'slider',
	slots: sliderAnatomy.extendWith('markerIndicator').keys(),
	base: {
		root: {
			display: 'flex',
			flexDirection: 'column',
			gap: '2',
			textStyle: 'sm',
			position: 'relative',
			isolation: 'isolate',
			touchAction: 'none',
			width: 'full',
		},
		label: {
			color: 'app.text',
			fontWeight: 'semibold',
			textStyle: 'small',
		},
		control: {
			display: 'inline-flex',
			alignItems: 'center',
		},
		track: {
			overflow: 'hidden',
			borderRadius: 'full',
			flex: '1',
			borderWidth: '1px',
			borderColor: 'app.border',
		},
		range: {
			width: 'inherit',
			height: 'inherit',
		},
		markerGroup: {
			position: 'absolute!',
			zIndex: '1',
		},
		marker: {
			display: 'flex',
			alignItems: 'center',
			gap: 'calc(var(--slider-thumb-size) / 2)',
			color: 'app.text.subtle',
			textStyle: 'caption',
		},
		markerIndicator: {
			width: 'var(--slider-marker-size)',
			height: 'var(--slider-marker-size)',
			borderRadius: 'full',
			bg: 'app.accent',
		},
		thumb: {
			width: 'var(--slider-thumb-size)',
			height: 'var(--slider-thumb-size)',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			outline: 0,
			zIndex: '2',
			borderRadius: 'full',
			_focusVisible: {
				ring: '2px',
				ringColor: 'colorPalette.solid',
				ringOffset: '2px',
				ringOffsetColor: 'bg',
			},
		},
	},
	defaultVariants: {
		size: 'md',
		variant: 'outline',
		orientation: 'horizontal',
	},
	variants: {
		size: {
			sm: {
				root: {
					'--slider-thumb-size': 'sizes.5',
					'--slider-track-size': 'sizes.2',
					'--slider-marker-center': '8px',
					'--slider-marker-size': 'sizes.1',
					'--slider-marker-inset': '4px',
				},
			},
			md: {
				root: {
					'--slider-thumb-size': 'sizes.5',
					'--slider-track-size': 'sizes.2',
					'--slider-marker-center': '8px',
					'--slider-marker-size': 'sizes.1',
					'--slider-marker-inset': '4px',
				},
			},
			lg: {
				root: {
					'--slider-thumb-size': 'sizes.5',
					'--slider-track-size': 'sizes.2',
					'--slider-marker-center': '8px',
					'--slider-marker-size': 'sizes.1',
					'--slider-marker-inset': '4px',
				},
			},
		},
		variant: {
			outline: {
				thumb: {
					bg: 'app.surface',
					borderWidth: '2px',
					borderColor: 'app.accent',
					boxShadow: '{shadows.panel}',
				},
				range: {
					bg: 'app.accent',
				},
				track: {
					bg: 'app.surface.muted',
				},
			},
		},
		orientation: {
			vertical: {
				root: {
					display: 'inline-flex',
				},
				control: {
					flexDirection: 'column',
					height: '100%',
					minWidth: 'var(--slider-thumb-size)',
					'&[data-has-mark-label]': {
						marginEnd: '4',
					},
				},
				track: {
					width: 'var(--slider-track-size)',
				},
				thumb: {
					left: '50%',
					translate: '-50% 0',
				},
				markerGroup: {
					insetStart: 'var(--slider-marker-center)',
					insetBlock: 'var(--slider-marker-inset)',
				},
				marker: {
					flexDirection: 'row',
				},
			},
			horizontal: {
				control: {
					flexDirection: 'row',
					width: '100%',
					minHeight: 'var(--slider-thumb-size)',
					'&[data-has-mark-label]': {
						marginBottom: '4',
					},
				},
				track: {
					height: 'var(--slider-track-size)',
				},
				thumb: {
					top: '50%',
					translate: '0 -50%',
				},
				markerGroup: {
					top: 'var(--slider-marker-center)',
					insetInline: 'var(--slider-marker-inset)',
				},
				marker: {
					flexDirection: 'column',
				},
			},
		},
	},
});
