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
export declare function createAxionicPreset(): import("@pandacss/types").Preset;
export { axionicSand } from './colors/sand';
export { axionicTeal } from './colors/teal';
//# sourceMappingURL=index.d.ts.map