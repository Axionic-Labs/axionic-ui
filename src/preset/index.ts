import { definePreset } from '@pandacss/dev';
import { createPreset } from '@park-ui/panda-preset';
import { recipes as themeRecipes, slotRecipes as themeSlotRecipes } from '../theme/recipes/index';
import { axionicSand } from './colors/sand';
import { axionicTeal } from './colors/teal';
import { globalCss } from './global-css';
import { keyframes } from './keyframes';
import { textStyles } from './text-styles';

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
						body: { value: '"Graphik", "Satoshi", sans-serif' },
						display: { value: '"Satoshi", "Graphik", sans-serif' },
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
						fg: {
							success: { value: { _light: '#16a34a', _dark: '#4ade80' } },
							warning: { value: { _light: '#d97706', _dark: '#fbbf24' } },
							info: { value: { _light: '#2563eb', _dark: '#60a5fa' } },
							error: { value: { _light: '#dc2626', _dark: '#f87171' } },
						},
						bg: {
							success: {
								value: { _light: 'rgba(22, 163, 74, 0.08)', _dark: 'rgba(74, 222, 128, 0.12)' },
							},
							warning: {
								value: { _light: 'rgba(217, 119, 6, 0.08)', _dark: 'rgba(251, 191, 36, 0.12)' },
							},
							info: {
								value: { _light: 'rgba(37, 99, 235, 0.08)', _dark: 'rgba(96, 165, 250, 0.12)' },
							},
							error: {
								value: { _light: 'rgba(220, 38, 38, 0.08)', _dark: 'rgba(248, 113, 113, 0.12)' },
							},
							deep: { value: { _light: '{colors.gray.light.1}', _dark: '#061012' } },
							navbar: {
								value: { _light: 'rgba(253, 253, 252, 0.85)', _dark: 'rgba(26, 46, 48, 0.85)' },
							},
							navbarIdle: {
								value: { _light: 'rgba(253, 253, 252, 0.6)', _dark: 'rgba(26, 46, 48, 0.6)' },
							},
						},
						border: {
							success: {
								value: { _light: 'rgba(22, 163, 74, 0.3)', _dark: 'rgba(74, 222, 128, 0.3)' },
							},
							warning: {
								value: { _light: 'rgba(217, 119, 6, 0.3)', _dark: 'rgba(251, 191, 36, 0.3)' },
							},
							info: {
								value: { _light: 'rgba(37, 99, 235, 0.3)', _dark: 'rgba(96, 165, 250, 0.3)' },
							},
							error: {
								value: { _light: 'rgba(220, 38, 38, 0.3)', _dark: 'rgba(248, 113, 113, 0.3)' },
							},
						},
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
							'10': {
								value: { _light: '{colors.wheat.light.10}', _dark: '{colors.wheat.dark.10}' },
							},
							'11': {
								value: { _light: '{colors.wheat.light.11}', _dark: '{colors.wheat.dark.11}' },
							},
							'12': {
								value: { _light: '{colors.wheat.light.12}', _dark: '{colors.wheat.dark.12}' },
							},
							default: {
								value: { _light: '{colors.wheat.light.9}', _dark: '{colors.wheat.dark.9}' },
							},
							emphasized: {
								value: { _light: '{colors.wheat.light.10}', _dark: '{colors.wheat.dark.10}' },
							},
							fg: { value: { _light: '{colors.wheat.light.12}', _dark: '{colors.wheat.dark.1}' } },
							text: {
								value: { _light: '{colors.wheat.light.11}', _dark: '{colors.wheat.dark.11}' },
							},
						},
					},
				},
				textStyles,
				keyframes,
				recipes: themeRecipes,
				slotRecipes: themeSlotRecipes,
			},
		},
		globalCss,
	});
}

export { axionicSand } from './colors/sand';
export { axionicTeal } from './colors/teal';
