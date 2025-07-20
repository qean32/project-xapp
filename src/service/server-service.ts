import { requestGet } from "../lib/function/request"
const instance = 'http-message';

export const serverService = {
    server: () => {
        return requestGet(`${instance}/server`)
    },
}