import type { ComponentProps } from 'react';
import { type HeadingVariantProps } from 'styled-system/recipes';
import type { StyledComponent } from 'styled-system/types';
type Props = HeadingVariantProps & {
    as?: React.ElementType;
};
export type HeadingProps = ComponentProps<typeof Heading>;
export declare const Heading: StyledComponent<"h2", Props>;
export {};
//# sourceMappingURL=heading.d.ts.map