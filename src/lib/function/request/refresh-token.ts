import { authService } from "../../../service/auth-service"
import { setToken } from "../set-token"

export const refreshToken = () => {
    // @ts-ignore
    authService.refreshAuth().then(token => setToken(token))
}