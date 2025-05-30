import { axiosInstance } from "../../../export"

export const requestGet = async <T>(path: string) => {
    try {

        return ((await axiosInstance.get<T>(path)).data)
    } catch (error) {
        console.error(error)
    }
}