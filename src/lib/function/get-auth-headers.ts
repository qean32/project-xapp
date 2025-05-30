import { accessTokenWord, tokenStorage } from "../../export"

export const getAuthHeaders = (file: boolean = false) => {
    return file ?
        { 'Authorization': `${accessTokenWord} ${JSON.parse(localStorage.getItem(tokenStorage) as string).access}` }
        :
        {
            'Content-Type': 'application/json',
            'Authorization': `${accessTokenWord} ${JSON.parse(localStorage.getItem(tokenStorage) as string).access}`
        }
}