import { requestGet, requestPatch } from "../lib/function/request"
const instance = 'users'

export const userService = {
    getUsers: (skip: number, take: number, search: string) => {
        return requestGet(`${instance}?skip=${skip}&take=${take}&search=${search}`)
    },

    searchUser: (query: string) => {
        return requestGet(`${instance}/search${query}`)
    },

    updateUser: (body: {}) => {
        return requestPatch(`${instance}`, body)
    }
}