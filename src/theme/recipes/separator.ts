import { defineRecipe } from '@pandacss/dev';

export const separator = defineRecipe({
	className: 'separator',
	jsx: ['Separator'],
	base: {
		borderColor: 'border.default',
		'&[data-orientation=horizontal]': {
			width: 'full',
			borderBottomWidth: '1px',
		},
		'&[data-orientation=vertical]': {
			height: 'full',
			borderInlineStartWidth: '1px',
		},
	},
	defaultVariants: {},
});
