import { requestGet, requestPost } from "../lib/function/request"
const instance = 'music';

export const musicService = {
    searchMusic: (query: string) => {
        requestGet(`${instance}/search/${query}`)
    },

    createPlayList: (body: {
        name: string
    }) => {
        return requestPost(`${instance}/create-playlist`, body)
    },

    getPlayLists: () => {
        return requestGet(`${instance}/playlists`)
    },

    addToPlayList: (body: {
        playlistId: number
        urlMusic: string
    }
    ) => {
        requestPost(`add-to-playlist`, body)
    }
}