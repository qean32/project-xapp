import { accessTokenWord, tokenStorage } from "../../export"
import { getToken } from "./get-token"

export const getAuthHeaders = (file: boolean = false) => {
    return file ?
        { 'Authorization': `${accessTokenWord} ${JSON.parse(localStorage.getItem(tokenStorage) as string).access}` }
        :
        (getToken() ?
            {
                'Content-Type': 'application/json',
                'Authorization': `${accessTokenWord} ${JSON.parse(localStorage.getItem(tokenStorage) as string).access}`
            }
            :
            {
                'Content-Type': 'application/json',
            }
        )
}