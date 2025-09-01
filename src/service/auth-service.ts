import { requestPost } from "../lib/function/request"
import { AuthFormDto, RegistrationFormDto } from "../model/schema"
const instance = 'auth'

export const authService = {
    login: async (body: AuthFormDto) => {
        return requestPost(`${instance}`, body)
    },

    registration: async (body: RegistrationFormDto) => {
        return requestPost(`${instance}/registration`, body)
    },

    refreshAuth: async () => {
        return requestPost(`${instance}/refresh-auth`, {})
    }
}