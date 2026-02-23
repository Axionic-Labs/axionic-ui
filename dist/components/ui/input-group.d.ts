import { type ComponentProps, type ReactNode } from 'react';
type RootProps = ComponentProps<typeof Root>;
declare const Root: import("styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & import("@ark-ui/react").PolymorphicProps>, import("styled-system/recipes").InputGroupRecipe>;
export interface InputGroupProps extends RootProps {
    startElement?: ReactNode | undefined;
    endElement?: ReactNode | undefined;
}
export declare const InputGroup: import("react").ForwardRefExoticComponent<Omit<InputGroupProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=input-group.d.ts.map