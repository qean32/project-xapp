import React from "react";

export const useHookScroll = (ref: React.MutableRefObject<HTMLDivElement | null> | null) => {
    React.useEffect(() => {
        if (ref) {
            const fn = (e: React.EventHandler<HTMLDivElement | any> | any) => {
                if (ref.current)
                    ref.current.scrollTop += (e.deltaY * .5);
            }
            window.addEventListener('mousewheel', fn);

            return () => {
                window.removeEventListener('mousewheel', fn)
            }
        }
    }, [])
}