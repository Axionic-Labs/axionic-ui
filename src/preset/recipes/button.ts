import { defineRecipe } from '@pandacss/dev';

export const buttonRecipe = defineRecipe({
	className: 'button',
	variants: {
		variant: {
			wheat: {
				bg: '{colors.wheat.9}',
				color: '{colors.wheat.12}',
				fontWeight: '600',
				_hover: { bg: '{colors.wheat.10}' },
				_active: { bg: '{colors.wheat.8}' },
			},
			dark: {
				bg: 'colorPalette.12',
				color: 'bg.canvas',
				fontWeight: '600',
				_hover: { bg: 'colorPalette.11' },
				_active: { bg: 'colorPalette.10' },
			},
			oauth: {
				bg: 'bg.default',
				color: 'fg.default',
				borderWidth: '1px',
				borderColor: 'border.default',
				fontWeight: '500',
				_hover: { bg: 'bg.subtle', borderColor: 'colorPalette.7' },
			},
			'outline-brand': {
				borderWidth: '1px',
				borderColor: 'colorPalette.7',
				color: 'colorPalette.11',
				_hover: { bg: 'colorPalette.a2' },
			},
			'ghost-dark': {
				color: 'bg.canvas',
				_hover: { bg: 'colorPalette.a3' },
			},
		},
	},
});
