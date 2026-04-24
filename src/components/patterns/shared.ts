import type { KeyboardEvent } from 'react';

export type PatternTone = 'teal' | 'wheat';
export type PatternDensity = 'default' | 'compact';

interface ActivateOnEnterOrSpaceOptions {
	ignoreNestedInteractiveTarget?: boolean;
}

export function activateOnEnterOrSpace(
	event: KeyboardEvent<HTMLElement>,
	onClick?: () => void,
	options: ActivateOnEnterOrSpaceOptions = {},
) {
	if (!onClick) {
		return;
	}

	if (
		options.ignoreNestedInteractiveTarget &&
		isNestedInteractiveTarget(event.target, event.currentTarget)
	) {
		return;
	}

	if (event.key === 'Enter' || event.key === ' ') {
		event.preventDefault();
		onClick();
	}
}

function isNestedInteractiveTarget(target: EventTarget | null, currentTarget: HTMLElement) {
	if (!(target instanceof HTMLElement)) {
		return false;
	}

	const interactiveTarget = target.closest(
		'button, a, input, textarea, select, summary, [role="button"], [role="link"]',
	);

	return Boolean(interactiveTarget && interactiveTarget !== currentTarget);
}
