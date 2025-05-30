import { axiosInstance } from "../../../export"
import { getAuthHeaders } from ".."

export const requestPost = async <T>(path: string, body: T, file: boolean = false) => {
    try {

        return ((await axiosInstance.post<T>(path, body, { headers: { ...getAuthHeaders(file) } })).data)
    } catch (error) {
        console.error(error)
    }
}