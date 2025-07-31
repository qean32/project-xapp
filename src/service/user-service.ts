import { requestGet, requestPatch } from "../lib/function/request"
const instance = 'users'

export const userService = {
    getUsers: (skip: number, take: number, search: string) => {
        return requestGet(`${instance}?skip=${skip}&take=${take}&search=${search}`)
    },

    getUser: (id: string) => {
        return requestGet(`${instance}/id/?id=${id}`)
    },

    searchUser: (query: string) => {
        return requestGet(`${instance}/search${query}`)
    },

    updateUser: (ava: any) => {
        return requestPatch(`${instance}/2/`, ava, true)
    }
}