import { tokenStorage } from "../../export"

export const getAuthHeaders = (file: boolean = false) => {
    return file ?
        { 'Authorization': `JWT ${JSON.parse(localStorage.getItem(tokenStorage) as string).access}` }
        :
        {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${JSON.parse(localStorage.getItem(tokenStorage) as string).access}`
        }
}