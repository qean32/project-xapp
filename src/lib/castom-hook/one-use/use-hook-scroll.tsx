import React from "react";

export const useHookScroll = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
    React.useEffect(() => {
        window.addEventListener('mousewheel', function (e) {
            if (ref)
                // @ts-ignore
                ref.current.scrollTop += e.deltaY;
        });
    }, [])
}