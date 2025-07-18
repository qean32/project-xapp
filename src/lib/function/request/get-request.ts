import { getAuthHeaders } from ".."
import { axiosInstance } from "../../../export"

export const requestGet = async <T>(path: string) => {
    return (await axiosInstance.get<T>(path, { headers: { ...getAuthHeaders() } })).data
}