import type { ReactNode } from 'react';
export interface ChoiceSegmentItem {
    value: string;
    label: ReactNode;
    icon?: ReactNode;
}
export interface ChoiceSegmentProps {
    value: string;
    onValueChange: (value: string) => void;
    items: ChoiceSegmentItem[];
    size?: 'xs' | 'sm' | 'md';
    fitted?: boolean;
    className?: string;
}
export declare function ChoiceSegment({ value, onValueChange, items, size, fitted, className, }: ChoiceSegmentProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=choice-segment.d.ts.map