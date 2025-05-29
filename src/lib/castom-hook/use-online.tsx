import React from "react";
import { useBoolean } from "./";

export const useOnline = () => {
    const { bool, on, off } = useBoolean()
    const controller = new AbortController

    React.useEffect(() => {
        window.addEventListener('online', () => on, { signal: controller.signal })
        window.addEventListener('offline', () => off, { signal: controller.signal })

        return () => {
            controller.abort()
        }
    }, [])

    return bool
}