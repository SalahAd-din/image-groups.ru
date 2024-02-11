import React, { ReactNode, HTMLAttributes } from "react";

interface ContentProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    /**
     * Determines if vertical padding should be applied.
     * Default value: true
     */
    verticalPadding?: boolean;
}

export const Content = ({
    children,
    className,
    verticalPadding = true,
    ...props
}: ContentProps): JSX.Element => {
    const verticalPaddingClass = verticalPadding ? "py-12 sm:py-32" : "";

    return (
        <div
            {...props}
            className={` mx-auto w-full max-w-[1528px] px-5 sm:px-8 md:px-16 ${verticalPaddingClass} ${className}`}
        >
            {children}
        </div>
    );
};
