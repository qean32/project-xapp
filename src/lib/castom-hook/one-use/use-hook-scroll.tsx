import React from "react";

export const useHookScroll = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
    React.useEffect(() => {
        const fn = (e: React.EventHandler<HTMLDivElement | any> | any) => {
            if (ref)
                // @ts-ignore
                ref.current.scrollTop += e.deltaY;
        }
        window.addEventListener('mousewheel', fn);

        return () => {
            window.removeEventListener('mousewheel', fn)
        }
    }, [])
}