import type { KeyboardEvent } from 'react';
export type PatternTone = 'teal' | 'wheat';
export type PatternDensity = 'default' | 'compact';
interface ActivateOnEnterOrSpaceOptions {
    ignoreNestedInteractiveTarget?: boolean;
}
export declare function activateOnEnterOrSpace(event: KeyboardEvent<HTMLElement>, onClick?: () => void, options?: ActivateOnEnterOrSpaceOptions): void;
export {};
//# sourceMappingURL=shared.d.ts.map