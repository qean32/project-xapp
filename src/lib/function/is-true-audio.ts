import { largeFileMessage } from "../../export"

export const isTrueAudio = (url: string) => {
    if (url && url.split('.').at(-1) == 'mp3') {
        return url
    }

    if (url == largeFileMessage) {
        return largeFileMessage
    }

    return false
}