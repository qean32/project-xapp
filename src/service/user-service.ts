import { requestGet, requestPatch } from "../lib/function/request"
const instance = 'users'

export const userService = {
    getUsers: (offset: number, take: number) => {
        return requestGet(`${instance}?offset=${offset}&take=${take}`)
    },

    searchUser: (query: string) => {
        return requestGet(`${instance}/search${query}`)
    },

    updateUser: (body: {}) => {
        return requestPatch(`${instance}`, body)
    }
}