import React from "react"
import { useQuery } from "react-query"
import { useHandlerScroll } from "../use-handler-scroll"
import { useBoolean } from "../use-boolean"

export const useDinamickPaginationChat = <T,>(fetch_: Function, RQkey: string[], skip_: number = 0) => {
    const { refHandler, refParent, bool } = useHandlerScroll(70, "bottom")

    const [skip, setSkip] = React.useState<number>(skip_)
    const { swap, bool: trigger } = useBoolean()
    const [finaldata, setFinalData] = React.useState<T[]>([])
    const RQData = useQuery([...RQkey], () => fetch_(skip), { keepPreviousData: true, refetchOnWindowFocus: false })

    React.useEffect(() => {
        RQData.data?.data &&
            Array.isArray(RQData.data.data) && setFinalData((prev: T[]) => {
                // console.log(prev, RQData.data);
                return [...prev, ...RQData.data.data]
            })
    }, [RQData.data?.data])

    React.useEffect(() => {
        if (bool && RQData.data.next) {
            setTimeout(() => {
                setSkip((prev: number) => prev + 10);
                swap()
            }, 1000)
        }
    }, [bool])
    React.useEffect(() => {
        RQData.refetch()
    }, [trigger])
    React.useEffect(() => {
        console.log(skip)
    }, [skip])

    return { RQData, skip, finaldata, refHandler, refParent, setFinalData, setSkip }
}