import React from "react";
import { useBoolean } from ".";

export const useHandlerScroll = (ref: any, daley: number = 200) => {
    const { bool, on, off } = useBoolean(false)
    const controller = new AbortController

    React.useEffect(() => {
        const node: HTMLElement = ref.current

        const fn = () => {
            node.getBoundingClientRect().top < window.innerHeight + daley ?
                on
                :
                off
        }

        window.addEventListener('scroll', fn, { signal: controller.signal })

        return function () {
            controller.abort()
        }

    }, [])

    return bool
}