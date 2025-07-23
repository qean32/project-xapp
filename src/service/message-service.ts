import { jwtDecode } from "jwt-decode";
import { getToken } from "../lib/function";
import { requestGet } from "../lib/function/request"
const instance = 'http-message';

export const messageService = {
    getMessages: (skip: number, take: number = 10, to: number) => {
        return requestGet(`${instance}?skip=${skip}&take=${take}&to=${to}`)
    },

    getChats: () => {
        const { id }: { id: number } = jwtDecode(getToken());
        return requestGet(`${instance}/chats?id=${id}`)
    }
}