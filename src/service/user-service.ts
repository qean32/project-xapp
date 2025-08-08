import { jwtDecode } from "jwt-decode"
import { requestGet, requestPatch } from "../lib/function/request"
import { getToken } from "../lib/function"
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
        // @ts-ignore
        return requestPatch(`${instance}/${jwtDecode(getToken()).id}/`, ava, true)
    }
}