import React from "react";
import { useBoolean } from ".";

export const useHandlerScroll = (daley: number = 100, direction: 'top' | 'bottom' = 'top') => {
    const { on, off, boolean } = useBoolean(false);
    const refParent = React.useRef<HTMLDivElement | null>(null)
    const refHandler = React.useRef<HTMLDivElement | null>(null)
    const controller = new AbortController

    React.useEffect(() => {
        const nodeParent = refParent.current
        const nodeHandler = refHandler.current

        if (nodeHandler && nodeParent) {
            const fn = () => {
                (direction == 'top' && nodeHandler.getBoundingClientRect()[direction] < nodeParent?.getBoundingClientRect().height + daley)
                    ||
                    (direction == "bottom" && nodeHandler.getBoundingClientRect()[direction] > daley) ?
                    on()
                    :
                    off()
            }
            nodeParent.addEventListener('scroll', fn, { signal: controller.signal })

            return function () {
                controller.abort()
            }
        }
    }, [])

    return { boolean, refHandler, refParent }
}
