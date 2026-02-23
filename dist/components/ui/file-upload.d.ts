import { FileUpload } from '@ark-ui/react/file-upload';
import { type ComponentProps } from 'react';
import { type HTMLStyledProps } from 'styled-system/jsx';
export type RootProps = ComponentProps<typeof Root>;
export type ItemProps = ComponentProps<typeof Item>;
export declare const Root: import("styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<FileUpload.RootProps & import("react").RefAttributes<HTMLDivElement>>, import("styled-system/recipes").FileUploadRecipe>;
export declare const RootProvider: import("styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<FileUpload.RootProviderProps & import("react").RefAttributes<HTMLDivElement>>, import("styled-system/recipes").FileUploadRecipe>;
export declare const ClearTrigger: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<FileUpload.ClearTriggerProps & import("react").RefAttributes<HTMLButtonElement>>>;
export declare const Dropzone: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<FileUpload.DropzoneProps & import("react").RefAttributes<HTMLDivElement>>>;
export declare const HiddenInput: import("react").ForwardRefExoticComponent<FileUpload.HiddenInputProps & import("react").RefAttributes<HTMLInputElement>>;
export declare const Item: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<FileUpload.ItemProps & import("react").RefAttributes<HTMLLIElement>>>;
export declare const ItemDeleteTrigger: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<FileUpload.ItemDeleteTriggerProps & import("react").RefAttributes<HTMLButtonElement>>>;
export declare const ItemGroup: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<FileUpload.ItemGroupProps & import("react").RefAttributes<HTMLUListElement>>>;
export declare const ItemName: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<FileUpload.ItemNameProps & import("react").RefAttributes<HTMLDivElement>>>;
export declare const ItemPreview: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<FileUpload.ItemPreviewProps & import("react").RefAttributes<HTMLImageElement>>>;
export declare const ItemPreviewImage: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<FileUpload.ItemPreviewImageProps & import("react").RefAttributes<HTMLImageElement>>>;
export declare const ItemSizeText: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<FileUpload.ItemSizeTextProps & import("react").RefAttributes<HTMLDivElement>>>;
export declare const Label: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<FileUpload.LabelProps & import("react").RefAttributes<HTMLLabelElement>>>;
export declare const Trigger: import("styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<FileUpload.TriggerProps & import("react").RefAttributes<HTMLButtonElement>>>;
export { FileUploadContext as Context } from '@ark-ui/react/file-upload';
interface ItemsBaseProps {
    showSize?: boolean | undefined;
    clearable?: boolean | undefined;
    files?: File[] | undefined;
}
interface ItemsProps extends Omit<ItemProps, 'file'>, ItemsBaseProps {
}
export declare const Items: (props: ItemsProps) => import("react/jsx-runtime").JSX.Element[];
interface FileUploadListProps extends ItemsBaseProps {
}
export declare const List: import("react").ForwardRefExoticComponent<FileUploadListProps & import("react").RefAttributes<HTMLUListElement>>;
export interface FileTextProps extends HTMLStyledProps<'span'> {
    fallback?: string | undefined;
}
export declare const FileText: import("react").ForwardRefExoticComponent<Omit<FileTextProps, "ref"> & import("react").RefAttributes<HTMLSpanElement>>;
//# sourceMappingURL=file-upload.d.ts.map