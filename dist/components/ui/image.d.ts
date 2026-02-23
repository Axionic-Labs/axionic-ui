import type { HTMLStyledProps, SystemStyleObject } from 'styled-system/types';
interface ImageOptions {
    /**
     * How the image to fit within its bounds.
     * It maps to css `object-fit` property.
     * @type SystemStyleObject["objectFit"]
     */
    fit?: SystemStyleObject['objectFit'] | undefined;
    /**
     * How to align the image within its bounds.
     * It maps to css `object-position` property.
     * @type SystemStyleObject["objectPosition"]
     */
    align?: SystemStyleObject['objectPosition'] | undefined;
}
export interface ImageProps extends HTMLStyledProps<'img'>, ImageOptions {
}
export declare const Image: import("react").ForwardRefExoticComponent<Omit<ImageProps, "ref"> & import("react").RefAttributes<HTMLImageElement>>;
export {};
//# sourceMappingURL=image.d.ts.map