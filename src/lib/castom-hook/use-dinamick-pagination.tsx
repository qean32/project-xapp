import React from "react"
import { useQuery } from "react-query"
import { useHandlerScroll } from "."

export const useDinamickPagination = (fetch_: Function, ref: any, RQkey: string[], step: number = 4, offset_: number = 0) => {
    const HandlerScroll = useHandlerScroll(ref)

    const [offset, setOffset] = React.useState<any>(offset_)
    const [finaldata, setFinalData] = React.useState<any[]>([])
    const RQData: any = useQuery([...RQkey, offset], () => fetch_(offset), { keepPreviousData: true, refetchOnWindowFocus: false })


    React.useEffect(() => {
        RQData.data &&
            Array.isArray(RQData.data?.results) &&
            setFinalData((prev: any) => [...prev, ...RQData.data?.results])
    }, [RQData.data])

    React.useEffect(() => {
        if (HandlerScroll && RQData?.data?.next) {
            setTimeout(() =>
                setOffset((prev: number) => prev + step)
                , 600)
        }
    }, [HandlerScroll])

    return { RQData, offset, finaldata }
}