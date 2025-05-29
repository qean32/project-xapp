import { axiosInstance } from "../../../export"

export const requestDelete = async <T>(path: string) => {
    return ((await axiosInstance.delete<T>(path)).data)
}