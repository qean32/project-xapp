import React from "react";

export const useHookScroll = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
    React.useEffect(() => {
        const fn = (e: React.EventHandler<HTMLDivElement | any> | any) => {
            if (ref.current)
                ref.current.scrollTop += (e.deltaY * .4);
        }
        window.addEventListener('mousewheel', fn);

        return () => {
            window.removeEventListener('mousewheel', fn)
        }
    }, [])
}