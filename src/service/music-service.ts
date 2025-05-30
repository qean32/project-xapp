import { requestDelete, requestGet, requestPost } from "../lib/function/request"
const instance = 'music';

export const musicService = {
    searchMusic: (query: string) => {
        requestGet(`${instance}/search/${query}`)
    },

    createPlayList: (body: {
        user: number
        urlMusic: string
    }) => {
        requestPost(`${instance}/create-playlist`, body)
    },

    createLike: (body: {
        user: number
        urlMusic: string
    }
    ) => {
        requestPost(`create-like`, body)
    },

    removeLike: (id: number) => {
        requestDelete(`remove-like/${id}`)
    },

    addToPlayList: (body: {
        playlistId: number
        urlMusic: string
    }
    ) => {
        requestPost(`add-to-playlist`, body)
    }
}