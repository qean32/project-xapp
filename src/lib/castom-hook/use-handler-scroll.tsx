import React from "react";
import { useBoolean } from ".";

export const useHandlerScroll = (daley: number = 100) => {
    const { on, off, bool } = useBoolean(false);
    const refParent = React.useRef<HTMLDivElement | null>(null)
    const refHandler = React.useRef<HTMLDivElement | null>(null)
    const controller = new AbortController

    React.useEffect(() => {
        const nodeParent = refParent.current
        const nodeHandler = refHandler.current

        if (nodeHandler && nodeParent) {
            const fn = () => {
                // @ts-ignore
                nodeHandler.getBoundingClientRect().top < nodeParent?.getBoundingClientRect().height + daley ?
                    on()
                    :
                    off()
            }
            // @ts-ignore
            nodeParent.addEventListener('scroll', fn, { signal: controller.signal })

            return function () {
                controller.abort()
            }
        }
    }, [])

    return { bool, refHandler, refParent }
}









// export const useHandlerScroll = (ref: any, daley: number = 200) => {
//     const { bool, on, off } = useBoolean(false)
//     const controller = new AbortController

//     React.useEffect(() => {
//         const node: HTMLElement = ref.current

//         const fn = () => {
//             node.getBoundingClientRect().top < window.innerHeight + daley ?
//                 on()
//                 :
//                 off()
//         }

//         window.addEventListener('scroll', fn, { signal: controller.signal })

//         return function () {
//             controller.abort()
//         }

//     }, [])

//     return bool
// }