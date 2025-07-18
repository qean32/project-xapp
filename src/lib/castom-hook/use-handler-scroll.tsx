import React from "react";
import { useBoolean } from ".";

export const useHandlerScroll = (daley: number = 100, direction: 'top' | 'bottom' = 'top') => {
    const { on, off, bool } = useBoolean(false);
    const refParent = React.useRef<HTMLDivElement | null>(null)
    const refHandler = React.useRef<HTMLDivElement | null>(null)
    const controller = new AbortController

    React.useEffect(() => {
        const nodeParent = refParent.current
        const nodeHandler = refHandler.current

        if (nodeHandler && nodeParent) {
            const fn = () => {
                console.log(nodeHandler.getBoundingClientRect()[direction], nodeParent?.getBoundingClientRect().height + daley)
                nodeHandler.getBoundingClientRect()[direction] < nodeParent?.getBoundingClientRect().height + daley
                    ||
                    (nodeHandler.getBoundingClientRect()[direction] > daley && direction == "bottom") ?
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

    return { bool, refHandler, refParent }
}
