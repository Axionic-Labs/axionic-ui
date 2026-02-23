import { defineConfig } from '@pandacss/dev';
import { createAxionicPreset } from './src/preset/index';
import { recipes, slotRecipes } from './src/theme/recipes/index';

export default defineConfig({
	preflight: true,
	presets: [createAxionicPreset()],
	include: ['./src/**/*.{ts,tsx}'],
	exclude: [],
	jsxFramework: 'react',
	outdir: 'styled-system',
	theme: {
		// Use top-level recipes (not theme.extend) to fully replace the
		// preset's v0.43 built-in recipes with our local v1 recipe files.
		// This ensures extended slots (e.g. switch 'indicator') are picked up.
		recipes,
		slotRecipes,
	},
});
