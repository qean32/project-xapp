import { getAuthHeaders } from ".."
import { axiosInstance } from "../../../export"

export const requestPatch = async <T>(path: string, body: T) => {
    try {

        return ((await axiosInstance.patch<T>(path, body, { headers: { ...getAuthHeaders } })).data)
    } catch (error) {
        console.log(error)
    }
}