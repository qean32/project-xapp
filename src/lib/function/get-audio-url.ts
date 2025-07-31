import { getAudioRequest } from "./request"

export const getAudioUrl = async (link: string) => {
    // @ts-ignore
    return (await (getAudioRequest(link.split('/').at(-1)))).url
}