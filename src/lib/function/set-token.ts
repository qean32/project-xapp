import { tokenStorage } from "../../export"

export const setToken = (token: string) => {
    if (token)
        localStorage.setItem(tokenStorage, JSON.stringify({ 'access': token }))
}