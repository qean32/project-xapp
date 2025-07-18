import { tokenStorage } from "../../export"

export const saveUser = (token: string) => {
    if (token)
        localStorage.setItem(tokenStorage, JSON.stringify({ 'access': token }))
}