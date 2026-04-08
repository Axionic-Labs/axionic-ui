import type { ReactNode } from 'react';
export interface StepCardProps {
    step: number;
    title: string;
    description?: string;
    children?: ReactNode;
    endSlot?: ReactNode;
    className?: string;
}
export declare function StepCard({ step, title, description, children, endSlot, className }: StepCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=step-card.d.ts.map