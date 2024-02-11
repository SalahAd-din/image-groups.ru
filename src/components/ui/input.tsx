//@ts-nocheck
import * as React from "react";

import { cn } from "@/src/lib/utils";
import { IMaskInput } from "react-imask";
export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

const classes =
    "flex h-10 w-full  border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(classes, className)}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = "Input";

const MaskedInput = React.forwardRef<IMaskInput, InputProps>(
    (props, inputRef) => {
        const { className, onChange, mask, ...other } = props;
        const ref = React.createRef();

        return (
            <IMaskInput
                className={cn(classes, className)}
                {...other}
                inputRef={inputRef as React.RefCallback<IMaskInput>}
                ref={ref}
                mask={mask}
                // unmask={true}
                onAccept={(value: any) => {
                    onChange({ target: { name: other.name, value } });
                }}
            />
        );
    }
);
MaskedInput.displayName = "MaskedInput";

export { Input, MaskedInput };
