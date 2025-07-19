import React from "react"
import { useQuery } from "react-query"
import { useHandlerScroll } from "."

export const useDinamickPagination = <T,>(fetch_: Function, RQkey: string[], offset_: number = 0, search: string) => {
    const { refHandler, refParent, bool } = useHandlerScroll(150)

    const [offset, setOffset] = React.useState<number>(offset_)
    const [finaldata, setFinalData] = React.useState<T[]>([])
    const RQData = useQuery([...RQkey, offset, search], () => fetch_(offset), { keepPreviousData: true, refetchOnWindowFocus: false })

    React.useEffect(() => {
        search ? setOffset(0) : setFinalData([])
    }, [search])

    React.useEffect(() => {
        RQData.data &&
            Array.isArray(RQData.data.data)
            &&
            (!search ?
                setFinalData((prev: T[]) => [...prev, ...RQData.data.data])
                :
                setFinalData(RQData.data.data)
            )
    }, [RQData.data])

    React.useEffect(() => {
        if (bool && RQData.data.next) {
            setTimeout(() =>
                setOffset((prev: number) => prev + 4)
                , 600)
        }
    }, [bool])

    return { RQData, offset, finaldata, refHandler, refParent }
}