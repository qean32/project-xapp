import { requestGet, requestPatch } from "../lib/function/request"
const instance = 'users'

export const userService = {
    getUsers: (offset: number) => {
        return requestGet(`${instance}?offset=${offset}&take=${5}`)
    },

    searchUser: (query: string) => {
        return requestGet(`${instance}/search${query}`)
    },

    updateUser: (body: {}) => {
        return requestPatch(`${instance}`, body)
    }
}