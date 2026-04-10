import { fieldAnatomy } from '@ark-ui/react/anatomy';
import { defineSlotRecipe } from '@pandacss/dev';

export const field = defineSlotRecipe({
	className: 'field',
	slots: fieldAnatomy.keys(),
	base: {
		root: {
			display: 'flex',
			flexDirection: 'column',
			gap: '2',
		},
		label: {
			alignItems: 'center',
			color: 'app.text',
			display: 'flex',
			gap: '0.75',
			fontWeight: 'semibold',
			textAlign: 'start',
			userSelect: 'none',
			textStyle: 'caption',
			letterSpacing: '0.02em',
			_disabled: {
				layerStyle: 'disabled',
			},
		},
		requiredIndicator: {
			color: 'app.accent',
		},
		helperText: {
			color: 'app.text.subtle',
			textStyle: 'caption',
			lineHeight: '1.55',
			_disabled: {
				layerStyle: 'disabled',
			},
		},
		errorText: {
			color: 'fg.error',
			textStyle: 'caption',
			lineHeight: '1.5',
		},
	},
});
