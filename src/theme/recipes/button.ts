import { defineRecipe } from '@pandacss/dev';

const accentHoverStyles = {
	bg: 'app.accentAlt.soft',
	borderColor: 'app.accentAlt.border',
	color: 'app.accentAlt.text',
	transform: 'translateY(-1px)',
	boxShadow: '{shadows.whisper}',
};

const accentActiveStyles = {
	bg: 'app.accentAlt.muted',
	borderColor: 'app.accentAlt.border',
	color: 'app.accentAlt.text',
	transform: 'translateY(0)',
};

export const button = defineRecipe({
	className: 'button',
	jsx: ['Button', 'IconButton', 'CloseButton', 'ButtonGroup'],
	base: {
		alignItems: 'center',
		appearance: 'none',
		borderRadius: 'xl',
		cursor: 'pointer',
		display: 'inline-flex',
		flexShrink: '0',
		fontFamily: 'display',
		fontWeight: 'semibold',
		gap: '2',
		isolation: 'isolate',
		justifyContent: 'center',
		outline: '0',
		position: 'relative',
		transition: 'all 180ms ease',
		transitionProperty: 'background-color, border-color, color, box-shadow, transform',
		userSelect: 'none',
		verticalAlign: 'middle',
		whiteSpace: 'nowrap',
		_icon: {
			flexShrink: '0',
		},
		_disabled: {
			layerStyle: 'disabled',
		},
		focusVisibleRing: 'outside',
	},
	defaultVariants: {
		variant: 'solid',
		size: 'md',
	},
	variants: {
		variant: {
			solid: {
				bg: 'colorPalette.solid.bg',
				color: 'colorPalette.solid.fg',
				_hover: {
					bg: 'colorPalette.solid.bg.hover',
				},
			},
			surface: {
				bg: 'app.surface',
				borderWidth: '1px',
				borderColor: 'app.border',
				color: 'app.text',
				_hover: accentHoverStyles,
				_active: accentActiveStyles,
				_on: {
					bg: 'app.surface',
					borderColor: 'app.border.strong',
				},
			},
			subtle: {
				bg: 'app.canvas.subtle',
				color: 'app.text',
				borderWidth: '1px',
				borderColor: 'transparent',
				_hover: {
					...accentHoverStyles,
					boxShadow: 'none',
				},
				_active: accentActiveStyles,
				_on: accentActiveStyles,
			},
			outline: {
				borderWidth: '1px',
				borderColor: 'app.border',
				bg: 'app.surface',
				color: 'app.text',
				_hover: accentHoverStyles,
				_active: accentActiveStyles,
				_on: accentActiveStyles,
			},
			plain: {
				color: 'app.text',
				_hover: {
					bg: 'app.surface.muted',
				},
				_active: {
					bg: 'app.accent.soft',
				},
				_on: {
					bg: 'app.accent.soft',
				},
			},
			quiet: {
				bg: 'app.surface.muted',
				color: 'app.text',
				borderWidth: '1px',
				borderColor: 'transparent',
				_hover: accentHoverStyles,
				_active: accentActiveStyles,
			},
			toolbar: {
				bg: 'transparent',
				color: 'app.text.muted',
				borderWidth: '1px',
				borderColor: 'transparent',
				_hover: {
					...accentHoverStyles,
					boxShadow: 'none',
				},
				_active: {
					...accentActiveStyles,
					boxShadow: 'none',
				},
				_on: {
					...accentActiveStyles,
					boxShadow: 'none',
				},
			},
			wheat: {
				bg: 'transparent',
				color: '{colors.wheat.9}',
				fontWeight: '600',
				borderWidth: '1px',
				borderColor: '{colors.wheat.9}',
				_hover: { bg: '{colors.wheat.9}', color: '{colors.wheat.12}' },
				_active: { bg: '{colors.wheat.10}', color: '{colors.wheat.12}' },
			},
			dark: {
				bg: 'transparent',
				color: 'colorPalette.12',
				fontWeight: '600',
				borderWidth: '1px',
				borderColor: 'colorPalette.12',
				_hover: { bg: 'colorPalette.12', color: 'bg.canvas' },
				_active: { bg: 'colorPalette.11', color: 'bg.canvas' },
			},
			oauth: {
				bg: 'app.surface',
				color: 'app.text',
				borderWidth: '1px',
				borderColor: 'app.border',
				fontWeight: '600',
				boxShadow: '{shadows.whisper}',
				_hover: {
					bg: 'app.surface.muted',
					borderColor: 'app.border.strong',
					transform: 'translateY(-1px)',
				},
			},
			'outline-brand': {
				borderWidth: '1px',
				borderColor: 'colorPalette.7',
				color: 'app.text',
				_hover: { bg: 'app.accent.soft' },
			},
			light: {
				bg: 'transparent',
				color: '{colors.bg.snow}',
				fontWeight: '600',
				borderWidth: '1px',
				borderColor: '{colors.bg.snow}',
				_hover: { bg: '{colors.bg.snow}', color: 'colorPalette.12' },
				_active: { bg: '{colors.teal.light.3}', color: 'colorPalette.12' },
			},
			'ghost-dark': {
				color: 'bg.canvas',
				_hover: { bg: 'colorPalette.a3' },
			},
			brand: {
				background: '{colors.teal.light.11}',
				color: 'white',
				boxShadow: '{shadows.whisper}',
				_hover: {
					background: '{colors.teal.light.10}',
					transform: 'translateY(-1px)',
					boxShadow: '{shadows.float}',
				},
				_active: {
					background: '{colors.teal.light.11}',
					transform: 'translateY(0)',
				},
			},
			danger: {
				bg: '{colors.fg.error}',
				color: 'white',
				_hover: { opacity: '0.9' },
				_active: { opacity: '0.85' },
			},
		},
		size: {
			'2xs': { h: '7', minW: '7', textStyle: 'xs', px: '2.5', _icon: { boxSize: '3.5' } },
			xs: { h: '8', minW: '8', textStyle: 'sm', px: '3', _icon: { boxSize: '4' } },
			sm: { h: '9', minW: '9', textStyle: 'sm', px: '3.75', _icon: { boxSize: '4' } },
			md: { h: '10', minW: '10', textStyle: 'sm', px: '4.25', _icon: { boxSize: '4.5' } },
			lg: { h: '11', minW: '11', textStyle: 'md', px: '4.75', _icon: { boxSize: '5' } },
			xl: { h: '12', minW: '12', textStyle: 'md', px: '5', _icon: { boxSize: '5.5' } },
			'2xl': { h: '16', minW: '16', textStyle: 'xl', px: '6.5', _icon: { boxSize: '6' } },
		},
	},
});
