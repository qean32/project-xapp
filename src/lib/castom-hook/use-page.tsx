import { useNavigate } from "react-router-dom"
import React from "react"
import { getToken } from "../function"

export const usePage = () => {
    const navigate = useNavigate()

    React.useEffect(() => {
        if (!getToken()) {
            navigate('/auth')
        }
    }, [])
}