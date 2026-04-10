import { toggleGroupAnatomy } from '@ark-ui/react/anatomy';
import { defineSlotRecipe } from '@pandacss/dev';

export const toggleGroup = defineSlotRecipe({
	className: 'toggle-group',
	slots: toggleGroupAnatomy.keys(),
	base: {
		root: {},
	},
	variants: {
		variant: {
			outline: {
				root: {
					borderRadius: 'xl',
					borderWidth: '1px',
					borderColor: 'app.border',
					bg: 'app.canvas.subtle',
					gap: '1',
					p: '1',
				},
			},
		},
	},
});
