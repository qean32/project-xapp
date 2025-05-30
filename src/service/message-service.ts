import { requestGet } from "../lib/function/request"
const instance = 'message';

export const messageService = {
    getMessages: (offset: number, take: number = 10) => {
        return requestGet(`${instance}/${offset}/${take}`)
    }
}