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
				radius: 'md',
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
					shadows: {
						whisper: { value: '0 24px 40px rgba(25, 28, 28, 0.04)' },
						float: { value: '0 28px 48px rgba(25, 28, 28, 0.08)' },
						panel: { value: '0 12px 24px rgba(25, 28, 28, 0.04)' },
						'panel.hover': { value: '0 18px 32px rgba(25, 28, 28, 0.08)' },
					},
				},
				semanticTokens: {
					colors: {
						app: {
							canvas: {
								DEFAULT: { value: { _light: '#f8f9f9', _dark: '#081214' } },
								subtle: { value: { _light: '#f3f4f4', _dark: '#0d191b' } },
							},
							surface: {
								DEFAULT: { value: { _light: '#ffffff', _dark: '#102022' } },
								muted: { value: { _light: '#f3f4f4', _dark: '#122629' } },
								raised: { value: { _light: '#fcfdfd', _dark: '#163135' } },
							},
							panel: {
								value: { _light: 'rgba(255, 255, 255, 0.92)', _dark: 'rgba(16, 32, 34, 0.92)' },
							},
							toolbar: {
								value: { _light: 'rgba(248, 249, 249, 0.92)', _dark: 'rgba(8, 18, 20, 0.92)' },
							},
							nav: {
								DEFAULT: { value: { _light: '#f3f4f4', _dark: '#0d191b' } },
								active: { value: { _light: '#e9efef', _dark: '#143034' } },
							},
							accent: {
								DEFAULT: { value: { _light: '#235353', _dark: '#a3dde2' } },
								soft: {
									value: { _light: 'rgba(35, 83, 83, 0.08)', _dark: 'rgba(163, 221, 226, 0.12)' },
								},
								muted: {
									value: { _light: 'rgba(35, 83, 83, 0.14)', _dark: 'rgba(163, 221, 226, 0.18)' },
								},
							},
							border: {
								DEFAULT: {
									value: { _light: 'rgba(35, 83, 83, 0.12)', _dark: 'rgba(163, 221, 226, 0.14)' },
								},
								strong: {
									value: { _light: 'rgba(35, 83, 83, 0.2)', _dark: 'rgba(163, 221, 226, 0.24)' },
								},
							},
							text: {
								DEFAULT: { value: { _light: '#235353', _dark: '#e3fdff' } },
								muted: { value: { _light: '#627877', _dark: '#a0bec1' } },
								subtle: { value: { _light: '#7f9292', _dark: '#88a5a8' } },
								inverse: { value: { _light: '#f8f9f9', _dark: '#f8f9f9' } },
							},
						},
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
							snow: {
								value: { _light: '#E3FDFF', _dark: '#E3FDFF' },
							},
							navbar: {
								value: { _light: 'rgba(248, 249, 249, 0.88)', _dark: 'rgba(8, 18, 20, 0.88)' },
							},
							navbarIdle: {
								value: { _light: 'rgba(248, 249, 249, 0.6)', _dark: 'rgba(8, 18, 20, 0.6)' },
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
