import { useNavigate } from "react-router-dom"
import React from "react"
import { getToken } from "../function"
import { serverService } from "../../service/server-service"
import { useQuery } from "react-query"

export const usePage = () => {
    const navigate = useNavigate()
    const RQData: any = useQuery(['server'], () => serverService.server(), { keepPreviousData: true, refetchOnWindowFocus: false })

    React.useEffect(() => {
        if (!RQData.data?.response && RQData.failureCount) {
            navigate('/*')
        }
    }, [RQData])

    React.useEffect(() => {
        if (!getToken()) {
            navigate('/auth')
        }
    }, [])
}