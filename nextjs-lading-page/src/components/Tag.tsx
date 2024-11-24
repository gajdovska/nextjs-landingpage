import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
const Tag = (props: HTMLAttributes<HTMLDivElement>) => {
    const { className, children, ...otherProps } = props;
    return (
        <div
            className={twMerge(
                "inline-flex border border-lime-400 gap-2 rounded-full px-3 py-1 uppercase items-center mb-12"
            )}
            {...otherProps}
        >
            <span className="text-lime-400">&#10038;</span>
            <span className="text-sm text-lime-400">{children}</span>
        </div>
    );
};

export default Tag;
