import { type ComponentProps } from 'react';
import { type StackProps } from 'styled-system/jsx';
export type SkeletonProps = ComponentProps<typeof Skeleton>;
export declare const Skeleton: import("styled-system/jsx").StyledComponent<import("react").ForwardRefExoticComponent<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & import("@ark-ui/react").PolymorphicProps>, import("styled-system/recipes").SkeletonVariantProps>;
export type SkeletonCircleProps = ComponentProps<typeof SkeletonCircle>;
export declare const SkeletonCircle: import("styled-system/jsx").StyledComponent<import("react").ForwardRefExoticComponent<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & import("@ark-ui/react").PolymorphicProps>, import("styled-system/recipes").SkeletonVariantProps>;
export interface SkeletonTextProps extends SkeletonProps {
    /**
     * Number of lines to display
     * @default 3
     */
    noOfLines?: number | undefined;
    rootProps?: StackProps | undefined;
}
export declare const SkeletonText: import("react").ForwardRefExoticComponent<Omit<SkeletonTextProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=skeleton.d.ts.map