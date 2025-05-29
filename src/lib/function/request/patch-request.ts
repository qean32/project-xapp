import { getAuthHeaders } from ".."
import { axiosInstance } from "../../../export"

export const requestPath = async <T>(path: string, body: T) => {
    return ((await axiosInstance.patch<T>(path, body, { headers: { ...getAuthHeaders } })).data)
}