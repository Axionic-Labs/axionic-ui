import { defineConfig } from 'tsup';

export default defineConfig({
	entry: {
		index: 'src/index.ts',
		primitives: 'src/primitives/index.ts',
		layout: 'src/layout/index.ts',
		patterns: 'src/patterns/index.ts',
		utils: 'src/utils.ts',
	},
	format: ['esm'],
	dts: true,
	splitting: true,
	treeshake: true,
	sourcemap: true,
	clean: true,
	external: ['react', 'react-dom', /^@radix-ui\//, 'lucide-react'],
});
