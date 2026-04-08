import type { ReactNode } from 'react';
export interface CredentialCardProps {
    icon?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    status?: ReactNode;
    children?: ReactNode;
    footer?: ReactNode;
    className?: string;
}
export declare function CredentialCard({ icon, title, description, status, children, footer, className, }: CredentialCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=credential-card.d.ts.map