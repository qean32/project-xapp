export const isTrueAudio = (url: string) => {
    if (url && url.split('.').at(-1) == 'mp3') {
        return url
    }

    return false
}