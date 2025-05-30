import { getAuthHeaders } from ".."
import { axiosInstance } from "../../../export"

export const requestPatch = async <T>(path: string, body: T, file: boolean = false) => {
    try {

        return ((await axiosInstance.patch<T>(path, body, { headers: { ...getAuthHeaders(file) } })).data)
    } catch (error) {
        console.log(error)
    }
}