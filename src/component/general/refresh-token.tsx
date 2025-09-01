import React from "react"
import { refreshToken } from "../../lib/function/request"

export const RefreshToken: React.FC<{}> = () => {
    React.useEffect(() => {
        refreshToken()
    }, [])

    return <></>
}