import React from "react";

export const useDebounceFunction = (func: Function, delay: number) => {
    const ref: any = React.useRef(null);

    return (...args: any) => {
        clearTimeout(ref.current);
        ref.current = setTimeout(() => func(...args), delay);
    };
}