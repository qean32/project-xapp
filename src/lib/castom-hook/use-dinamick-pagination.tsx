import React from "react"
import { useQuery } from "react-query"
import { useHandlerScroll } from "."

export const useDinamickPagination = <T,>(fetch_: Function, RQkey: string[], offset_: number = 0) => {
    const { refHandler, refParent, bool } = useHandlerScroll()

    const [offset, setOffset] = React.useState<number>(offset_)
    const [finaldata, setFinalData] = React.useState<T[]>([])
    const RQData = useQuery([...RQkey, offset], () => fetch_(offset), { keepPreviousData: true, refetchOnWindowFocus: false })


    React.useEffect(() => {
        RQData.data &&
            Array.isArray(RQData.data)
            &&
            setFinalData((prev: any) => [...prev, ...RQData.data])
    }, [RQData.data])

    React.useEffect(() => {
        console.log(bool)
        if (bool) {
            setTimeout(() =>
                setOffset((prev: number) => prev + 4)
                , 600)
        }
    }, [bool])

    return { RQData, offset, finaldata, refHandler, refParent }
}