import React from "react"
import { useQuery } from "react-query"
import { useHandlerScroll } from "../use-handler-scroll"
import { useBoolean } from "../use-boolean"

export const useChatDinamickPagination = <T,>(fetch_: Function, RQkey: string[], skip_: number = 0) => {
    const { refHandler, refParent, boolean } = useHandlerScroll(70, "bottom")

    const [skip, setSkip] = React.useState<number>(skip_)
    const { swap, boolean: trigger } = useBoolean()
    const [finaldata, setFinalData] = React.useState<T[]>([])
    const RQData = useQuery([...RQkey], () => fetch_(skip), { keepPreviousData: true, refetchOnWindowFocus: false })

    React.useEffect(() => {
        RQData.data?.data &&
            Array.isArray(RQData.data.data) &&
            setFinalData((prev: T[]) => [...prev, ...RQData.data.data])
    }, [RQData.data?.data])

    React.useEffect(() => {
        if (boolean && RQData.data.next) {
            setTimeout(() => {
                setSkip((prev: number) => prev + 10);
                swap()
            }, 600)
        }
    }, [boolean])
    React.useEffect(() => {
        RQData.refetch()
    }, [trigger])

    return { skip, finaldata, refHandler, refParent, setFinalData, setSkip }
}