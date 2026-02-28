import { resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vitest/config';

/**
 * Panda CSS codegen emits `export const switch = ...` in switch.mjs.
 * `switch` is a JS reserved word — Rollup's parser rejects it.
 * This plugin renames the export before Vite transforms the file.
 */
const fixSwitchReservedWord: Plugin = {
	name: 'fix-switch-reserved-word',
	transform(code, id) {
		if (id.includes('styled-system/recipes/switch.mjs')) {
			return { code: code.replace('export const switch =', 'export const _switch =') };
		}
	},
};

export default defineConfig({
	plugins: [fixSwitchReservedWord],
	test: {
		include: ['src/test/**/*.test.ts'],
	},
	resolve: {
		alias: {
			'~': resolve(__dirname, './src'),
			'styled-system': resolve(__dirname, './styled-system'),
		},
	},
});
