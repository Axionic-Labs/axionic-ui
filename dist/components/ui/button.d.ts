import { type ComponentProps } from 'react';
import { type ButtonVariantProps } from 'styled-system/recipes';
import { type GroupProps } from './group';
interface ButtonLoadingProps {
    /**
     * If `true`, the button will show a loading spinner.
     * @default false
     */
    loading?: boolean | undefined;
    /**
     * The text to show while loading.
     */
    loadingText?: React.ReactNode | undefined;
    /**
     * The spinner to show while loading.
     */
    spinner?: React.ReactNode | undefined;
    /**
     * The placement of the spinner
     * @default "start"
     */
    spinnerPlacement?: 'start' | 'end' | undefined;
}
type BaseButtonProps = ComponentProps<typeof BaseButton>;
declare const BaseButton: import("styled-system/jsx").StyledComponent<import("react").ForwardRefExoticComponent<import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement> & import("@ark-ui/react").PolymorphicProps>, ButtonVariantProps>;
export interface ButtonProps extends BaseButtonProps, ButtonLoadingProps {
}
export declare const Button: import("react").ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
export interface ButtonGroupProps extends GroupProps, ButtonVariantProps {
}
export declare const ButtonGroup: import("react").ForwardRefExoticComponent<Omit<ButtonGroupProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=button.d.ts.map