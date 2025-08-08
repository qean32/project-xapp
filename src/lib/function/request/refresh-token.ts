import { invalidTokenMessage, tokenStorage } from "../../../export"
import { authService } from "../../../service/auth-service"
import { getToken } from "../get-token"
import { setToken } from "../set-token"

export const refreshToken = () => {
    // @ts-ignore
    getToken() && authService.refreshAuth().then((token: string) => {
        if (token == invalidTokenMessage) {
            localStorage.removeItem(tokenStorage)
            return
        }

        setToken(token)
    })
}