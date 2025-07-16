import React from "react";
import { useBoolean } from "./use-boolean";

export function useTrotlle(fn: () => void, daley: number = 400) {
    const { bool, off, on } = useBoolean(true)

    const returnFn = () => {
        React.useEffect(() => {
            if (bool) {
                fn()
                off()
            }

            const timeOut = setTimeout(() => {
                on()
            }, daley)

            return () => clearTimeout(timeOut)
        }, [fn, daley])
    }

    return returnFn
}