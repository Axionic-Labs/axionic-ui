#!/usr/bin/env bash
#
# Build @axionic/ui and sync consumer projects in sibling directories.
#
# Assumes directory layout:
#   parent/
#     axionic-ui/          (this repo)
#     Spectra-App/         (optional)
#     Axionic-Labs-Mechanex-Frontend/  (optional)
#
# Usage:
#   ./scripts/sync.sh                  Build axionic-ui, sync all found consumers
#   ./scripts/sync.sh --build          Also run each consumer's production build
#   ./scripts/sync.sh --skip-build     Skip the axionic-ui build (just sync consumers)
#   ./scripts/sync.sh spectra          Target only Spectra-App
#   ./scripts/sync.sh marketing        Target only Marketing Frontend
#
# Flags can be combined: ./scripts/sync.sh spectra --build

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PARENT="$(dirname "$ROOT")"

SPECTRA="$PARENT/Spectra-App"
MARKETING="$PARENT/Axionic-Labs-Mechanex-Frontend"

BUILD_CONSUMERS=false
SKIP_UI_BUILD=false
TARGET=""

for arg in "$@"; do
	case "$arg" in
		--build) BUILD_CONSUMERS=true ;;
		--skip-build) SKIP_UI_BUILD=true ;;
		spectra) TARGET="spectra" ;;
		marketing) TARGET="marketing" ;;
		-h|--help)
			sed -n '2,/^$/{ s/^# \?//; p }' "$0"
			exit 0
			;;
		*)
			echo "Unknown argument: $arg" >&2
			echo "Run with --help for usage." >&2
			exit 1
			;;
	esac
done

should_sync() {
	[ -z "$TARGET" ] || [ "$TARGET" = "$1" ]
}

# -- Build axionic-ui --

if ! $SKIP_UI_BUILD; then
	echo "==> Building @axionic/ui..."
	cd "$ROOT"
	bun run build
	echo ""
fi

# -- Spectra-App (file: dependency) --

if should_sync spectra; then
	if [ -d "$SPECTRA" ]; then
		echo "==> Syncing Spectra-App..."
		cd "$SPECTRA"

		# file: dep creates a symlink in node_modules, so changes are
		# already visible. Just re-run panda codegen to pick up any
		# preset/token/recipe changes from the updated axionic-ui.
		if [ ! -d node_modules ]; then
			echo "    Installing dependencies..."
			npm install --no-audit --no-fund
		fi
		npm run codegen 2>&1 | tail -1

		if $BUILD_CONSUMERS; then
			echo "    Building..."
			npm run build
		fi

		echo "    Spectra-App synced."
		echo ""
	else
		echo "--- Spectra-App not found at $SPECTRA, skipping."
		echo ""
	fi
fi

# -- Axionic-Labs-Mechanex-Frontend (git dependency) --

if should_sync marketing; then
	if [ -d "$MARKETING" ]; then
		echo "==> Syncing Axionic-Labs-Mechanex-Frontend..."
		cd "$MARKETING"

		if [ ! -d node_modules ]; then
			echo "    Installing dependencies..."
			yarn install --frozen-lockfile 2>/dev/null || yarn install
		fi

		# For local dev: link the local axionic-ui into node_modules so
		# changes are reflected without publishing. Overwrites the git
		# dependency resolution until the next yarn install.
		echo "    Linking local @axionic/ui..."
		rm -rf node_modules/@axionic/ui
		ln -s "$ROOT" node_modules/@axionic/ui

		yarn run codegen 2>&1 | tail -1

		if $BUILD_CONSUMERS; then
			echo "    Building..."
			yarn run build
		fi

		echo "    Marketing frontend synced."
		echo "    (Note: local link active. Run 'yarn install' to restore git dependency.)"
		echo ""
	else
		echo "--- Marketing frontend not found at $MARKETING, skipping."
		echo ""
	fi
fi

echo "Done."
