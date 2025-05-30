import { requestPost } from "../lib/function/request"
import { Auth, Registration } from "../model"
const instance = 'auth'

export const authService = {
    login: async (body: Auth) => {
        return requestPost(`${instance}`, body)
    },

    registration: async (body: Registration) => {
        return requestPost(`${instance}/registration`, body)
    }
}