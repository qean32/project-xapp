import { tokenStorage } from "../../export"
import { TokenStorageDto } from "../../model"

export const getToken = () => {
    return (JSON.parse(localStorage.getItem(tokenStorage) as string) as TokenStorageDto)?.access
}