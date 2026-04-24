# Repository Guidelines

## Purpose And Consumers

`axionic-ui/` is the shared design system for Axionic. It wraps Ark UI with Park UI recipes and Axionic Panda CSS tokens. `Spectra-App/` consumes it via `file:../axionic-ui`, and `Axionic-Labs-Mechanex-Frontend/` consumes it as a Git dependency. Changes here directly affect both frontends.

## Key Paths

- `src/preset/`: Panda preset, color scales, tokens, typography, and global CSS.
- `src/theme/recipes/`: custom recipes and slot recipes.
- `src/components/ui/`: primitives.
- `src/components/patterns/`: higher-level reusable building blocks.
- `build.ts`: Bun build pipeline.
- `styled-system/` and `dist/`: generated and committed outputs.

## Commands

- `bun install`
- `bun run codegen`
- `bun run build`
- `bun run typecheck`
- `bun run lint`
- `bun test`
- `bun run verify`

## Working Rules

`dist/` and `styled-system/` are committed. Every source edit must be followed by `bun run build`, then commit the generated outputs. If you forget, downstream consumers break even when source changes look correct.

The package now relies on clean generation instead of incremental declaration reuse. Do not restore partial `dist/` cleanup or `.tsbuildinfo`-driven declaration emits; they can preserve stale or conflicted generated files that downstream apps ingest immediately.

Treat Panda CSS as the source of truth. Add or adjust tokens and recipes here before reaching for app-level overrides. Prefer semantic tokens, shared variants, and recipe changes over hardcoded colors in consuming apps. For the upcoming Spectra overhaul, study `src/preset/`, existing recipes, and the `dev-docs/frontend/design-system.md` notes before changing the theme surface.
