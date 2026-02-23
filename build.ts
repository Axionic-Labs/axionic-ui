/**
 * Build script for @axionic/ui.
 * Uses Bun's native bundler for ESM output + tsc for declaration files.
 *
 * Usage: bun run build.ts
 */
import { $ } from 'bun';
import { readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const entrypoints = {
	index: 'src/index.ts',
	'preset/index': 'src/preset/index.ts',
	'components/ui/index': 'src/components/ui/index.ts',
	'components/patterns/index': 'src/components/patterns/index.ts',
	'components/layout/index': 'src/components/layout/index.ts',
	'components/forms/index': 'src/components/forms/index.ts',
	utils: 'src/utils.ts',
};

/**
 * Patches known issues in Panda CSS codegen output:
 *
 * 1. styled-system/recipes/switch.d.ts exports `const switch` which is
 *    syntactically invalid (reserved word). Renamed to safe export.
 *
 * 2. The v0.43 preset generates switch-recipe.d.ts with only 4 slots
 *    (root, label, control, thumb), but our local v1 recipe adds
 *    'indicator'. Both files are generated due to preset/config overlap.
 *    Patch the type to include the extended slot.
 */
async function patchGeneratedDeclarations() {
	const patches: Array<{ file: string; find: string; replace: string; label: string }> = [
		{
			file: 'styled-system/recipes/switch.d.ts',
			find: 'export declare const switch:',
			replace: 'export declare const switchSlotRecipe:',
			label: 'switch.d.ts reserved word',
		},
		{
			file: 'styled-system/recipes/switch-recipe.d.ts',
			find: 'type SwitchRecipeSlot = "root" | "label" | "control" | "thumb"',
			replace: 'type SwitchRecipeSlot = "root" | "label" | "control" | "thumb" | "indicator"',
			label: 'switch-recipe.d.ts indicator slot',
		},
	];

	for (const { file, find, replace, label } of patches) {
		try {
			const content = await readFile(file, 'utf-8');
			const patched = content.replace(find, replace);
			if (patched !== content) {
				await writeFile(file, patched);
				console.log(`Patched ${label}.`);
			}
		} catch {
			// File might not exist if codegen hasn't run yet.
		}
	}
}

async function build() {
	await rm('dist', { recursive: true, force: true });

	// Patch known codegen issues before tsc runs
	await patchGeneratedDeclarations();

	for (const [outName, entry] of Object.entries(entrypoints)) {
		const outdir = path.dirname(path.join('dist', outName));
		const result = await Bun.build({
			entrypoints: [entry],
			outdir,
			naming: `${path.basename(outName)}.js`,
			format: 'esm',
			target: 'browser',
			sourcemap: 'linked',
			external: [
				'react',
				'react-dom',
				'react/jsx-runtime',
				'@ark-ui/react',
				'@ark-ui/react/*',
				'@pandacss/dev',
				'@park-ui/panda-preset',
				'styled-system/*',
				'~/components/*',
			],
			splitting: false,
		});

		if (!result.success) {
			console.error(`Failed to build ${entry}:`);
			for (const log of result.logs) {
				console.error(log);
			}
			process.exit(1);
		}
	}

	console.log('JS build complete.');

	await $`bunx tsc --emitDeclarationOnly --outDir dist`.quiet();
	console.log('Declaration files generated.');

	console.log('Build complete.');
}

build();
