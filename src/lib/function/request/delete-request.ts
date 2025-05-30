import { axiosInstance } from "../../../export"

export const requestDelete = async <T>(path: string) => {
    try {
        return ((await axiosInstance.delete<T>(path)).data)
    } catch (error) {
        console.error(error)
    }
}