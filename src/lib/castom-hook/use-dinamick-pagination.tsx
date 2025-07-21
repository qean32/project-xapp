import React from "react"
import { useQuery } from "react-query"
import { useHandlerScroll } from "."

export const useDinamickPagination = <T,>(fetch_: Function, RQkey: string[], skip_: number = 0, search: string) => {
    const { refHandler, refParent, boolean } = useHandlerScroll(150)

    const [skip, setSkip] = React.useState<number>(skip_)
    const [finaldata, setFinalData] = React.useState<T[]>([])
    const RQData = useQuery([...RQkey, skip, search], () => fetch_(skip), { keepPreviousData: true, refetchOnWindowFocus: false })

    React.useEffect(() => {
        search ? setSkip(0) : setFinalData([])
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
        if (boolean && RQData.data.next) {
            setTimeout(() =>
                setSkip((prev: number) => prev + 4)
                , 600)
        }
    }, [boolean])

    return { RQData, skip, finaldata, refHandler, refParent }
}