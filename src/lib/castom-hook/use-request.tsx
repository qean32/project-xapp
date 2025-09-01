import React from "react"
import { useQuery } from "react-query"

export function useRequest<T>(fetch_: any, RQkey: string[]) {
    const [finaldata, setFinalData] = React.useState<T[]>([])
    const RQData: any = useQuery(RQkey, fetch_, { keepPreviousData: true, refetchOnWindowFocus: false })

    React.useEffect(() => {
        if (RQData.data?.response) {
            setFinalData([RQData.data?.response])
        }
        RQData.data &&
            Array.isArray(RQData.data) &&
            setFinalData(RQData.data)
    }, [RQData.data])

    return { finaldata, setFinalData, count: RQData?.data?.count }
}