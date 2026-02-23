import type { ComponentProps } from 'react';
import { type TextVariantProps } from 'styled-system/recipes';
import type { StyledComponent } from 'styled-system/types';
type Props = TextVariantProps & {
    as?: React.ElementType;
};
export type TextProps = ComponentProps<typeof Text>;
export declare const Text: StyledComponent<"p", Props>;
export {};
//# sourceMappingURL=text.d.ts.map