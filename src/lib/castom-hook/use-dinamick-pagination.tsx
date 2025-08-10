import React from "react"
import { useQuery } from "react-query"
import { useBoolean, useHandlerScroll } from "."

export const useDinamickPagination = <T,>(fetch_: Function, RQkey: string[], skip_: number = 0, search: string) => {
    const { refHandler, refParent, boolean } = useHandlerScroll(150)

    const [skip, setSkip] = React.useState<number | string>(skip_)
    const [finaldata, setFinalData] = React.useState<T[]>([])
    const { boolean: loading, on, off } = useBoolean(true)
    const RQData = useQuery([...RQkey, skip, search], () => fetch_(skip), { keepPreviousData: false, refetchOnWindowFocus: false })

    React.useEffect(() => {
        search ? setSkip(0) : setFinalData([])
    }, [search])

    React.useEffect(() => {
        if (
            RQData.data
            && Array.isArray(RQData.data.data)
        ) {
            off();
            (search ?
                setFinalData((prev: T[]) => [...prev, ...RQData.data.data])
                :
                setFinalData(RQData.data.data)
            )
        }
    }, [RQData.data])

    React.useEffect(() => {
        console.log(RQData.data?.next)
        if (boolean && RQData.data.next) {
            on()
            setTimeout(() =>
                typeof RQData.data.next == 'string' ? setSkip(RQData.data.next) : setSkip((prev) => Number(prev) + 4)
                , 600)
        }
    }, [boolean])

    return { skip, finaldata, refHandler, refParent, setFinalData, loading }
}