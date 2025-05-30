import { requestGet, requestPatch } from "../lib/function/request"
const instance = 'users'

export const userService = {
    getUsers: (offset: number, take: number) => {
        requestGet(`${instance}?offset=${offset}&take=${take}`)
    },

    searchUser: (query: string) => {
        requestGet(`${instance}/search/${query}`)
    },

    updateUser: (body: {}) => {
        requestPatch(`${instance}`, body)
    }
}