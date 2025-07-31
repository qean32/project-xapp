import { requestGet, requestPost } from "../lib/function/request"
const instance = 'music';

export const musicService = {
    // @ts-ignore
    searchMusic: (skip: number, take: number, search: string) => {
        return requestGet(`${instance}/search?search=${search.split(' ').join('+')}&page=${skip}`)
    },

    createPlayList: (body: {
        name: string
    }) => {
        return requestPost(`${instance}/create-playlist`, body)
    },

    getPlayLists: () => {
        return requestGet(`${instance}/playlists`)
    },

    getPlayList: (id: string) => {
        return requestGet(`${instance}/playlist?id=${id}`)
    },

    addToPlayList: (body: {
        playlistId: number
        urlMusic: string
    }
    ) => {
        return requestPost(`add-to-playlist`, body)
    }
}