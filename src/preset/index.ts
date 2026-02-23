import { definePreset } from '@pandacss/dev';
import { createPreset } from '@park-ui/panda-preset';
import { axionicTeal } from './colors/teal';
import { axionicSand } from './colors/sand';
import { buttonRecipe } from './recipes/button';
import { cardSlotRecipe } from './recipes/card';
import { textStyles } from './text-styles';
import { keyframes } from './keyframes';
import { globalCss } from './global-css';

/**
 * Creates the Axionic UI Panda CSS preset.
 * Wraps Park UI's createPreset() with Axionic brand tokens, typography,
 * and custom component recipe extensions.
 *
 * @example
 * ```ts
 * // panda.config.ts
 * import { defineConfig } from '@pandacss/dev';
 * import { createAxionicPreset } from '@axionic/ui/preset';
 *
 * export default defineConfig({
 *   presets: [createAxionicPreset()],
 *   include: ['./src/**\/*.{ts,tsx}'],
 *   outdir: 'styled-system',
 * });
 * ```
 */
export function createAxionicPreset() {
	return definePreset({
		name: '@axionic/ui',
		presets: [
			createPreset({
				accentColor: axionicTeal,
				grayColor: axionicSand,
				radius: 'sm',
			}),
		],
		theme: {
			extend: {
				tokens: {
					fonts: {
						body: { value: '"Mulish", sans-serif' },
						display: { value: '"Mulish", sans-serif' },
						mono: { value: '"JetBrains Mono", "Consolas", monospace' },
					},
					colors: {
						wheat: {
							light: {
								'1': { value: '#fefcf8' },
								'2': { value: '#fdf5eb' },
								'3': { value: '#faecd6' },
								'4': { value: '#f5dfc0' },
								'5': { value: '#f0d2ab' },
								'6': { value: '#e6b685' },
								'7': { value: '#d4a070' },
								'8': { value: '#c28a5b' },
								'9': { value: '#e6b685' },
								'10': { value: '#d4a070' },
								'11': { value: '#8b6c44' },
								'12': { value: '#5c3d1e' },
							},
							dark: {
								'1': { value: '#1a1410' },
								'2': { value: '#261e16' },
								'3': { value: '#352a1e' },
								'4': { value: '#443626' },
								'5': { value: '#54432f' },
								'6': { value: '#6b5539' },
								'7': { value: '#8b6c44' },
								'8': { value: '#b08a5a' },
								'9': { value: '#e6b685' },
								'10': { value: '#f0c898' },
								'11': { value: '#f5dfc0' },
								'12': { value: '#fdf5eb' },
							},
						},
					},
				},
				semanticTokens: {
					colors: {
						wheat: {
							'1': { value: { _light: '{colors.wheat.light.1}', _dark: '{colors.wheat.dark.1}' } },
							'2': { value: { _light: '{colors.wheat.light.2}', _dark: '{colors.wheat.dark.2}' } },
							'3': { value: { _light: '{colors.wheat.light.3}', _dark: '{colors.wheat.dark.3}' } },
							'4': { value: { _light: '{colors.wheat.light.4}', _dark: '{colors.wheat.dark.4}' } },
							'5': { value: { _light: '{colors.wheat.light.5}', _dark: '{colors.wheat.dark.5}' } },
							'6': { value: { _light: '{colors.wheat.light.6}', _dark: '{colors.wheat.dark.6}' } },
							'7': { value: { _light: '{colors.wheat.light.7}', _dark: '{colors.wheat.dark.7}' } },
							'8': { value: { _light: '{colors.wheat.light.8}', _dark: '{colors.wheat.dark.8}' } },
							'9': { value: { _light: '{colors.wheat.light.9}', _dark: '{colors.wheat.dark.9}' } },
							'10': { value: { _light: '{colors.wheat.light.10}', _dark: '{colors.wheat.dark.10}' } },
							'11': { value: { _light: '{colors.wheat.light.11}', _dark: '{colors.wheat.dark.11}' } },
							'12': { value: { _light: '{colors.wheat.light.12}', _dark: '{colors.wheat.dark.12}' } },
							default: { value: { _light: '{colors.wheat.light.9}', _dark: '{colors.wheat.dark.9}' } },
							emphasized: { value: { _light: '{colors.wheat.light.10}', _dark: '{colors.wheat.dark.10}' } },
							fg: { value: { _light: '{colors.wheat.light.12}', _dark: '{colors.wheat.dark.1}' } },
							text: { value: { _light: '{colors.wheat.light.11}', _dark: '{colors.wheat.dark.11}' } },
						},
					},
				},
				textStyles,
				keyframes,
				recipes: {
					button: buttonRecipe,
				},
				slotRecipes: {
					card: cardSlotRecipe,
				},
			},
		},
		globalCss,
	});
}

export { axionicTeal } from './colors/teal';
export { axionicSand } from './colors/sand';
