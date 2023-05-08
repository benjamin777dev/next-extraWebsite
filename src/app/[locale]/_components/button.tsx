import {PropsWithChildren} from "react";

export type ButtonProps = PropsWithChildren<{
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}>;

export default function Button({className, children, onClick, disabled}: ButtonProps) {
    return (
        <button
            className={`rounded-full font-display font-bold text-2xl text-primary-500 hover:text-white py-4 px-8
                hover:bg-primary-500 bg-primary-100 transition-colors active:bg-primary-400 duration-300 ease-in-out 
                active:text-white disabled:opacity-50 disabled:pointer-events-none ${className || ""}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}