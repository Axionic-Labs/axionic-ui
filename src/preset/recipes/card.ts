import { defineSlotRecipe } from '@pandacss/dev';

export const cardSlotRecipe = defineSlotRecipe({
	className: 'card',
	slots: ['root', 'header', 'body', 'footer', 'title', 'description'],
	variants: {
		variant: {
			hover: {
				root: {
					transition: 'all 0.2s ease',
					_hover: { shadow: 'lg', translateY: '-1px' },
				},
			},
			dashed: {
				root: {
					borderStyle: 'dashed',
					borderWidth: '2px',
					borderColor: 'border.muted',
				},
			},
		},
	},
});
