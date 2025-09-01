import { requestGet, requestPost } from "../lib/function/request"
const instance = 'music';

export const musicService = {
    searchMusic: (page: number, take: number, search: string) => {
        return requestGet(`${instance}/search?search=${search.split(' ').join('+')}&page=${page}`)
        take
    },

    createPlayList: (data: {
        name: string
    }) => {
        return requestPost(`${instance}/create-playlist`, data)
    },

    getPlayLists: () => {
        return requestGet(`${instance}/playlists`)
    },

    getPlayList: (id: string) => {
        return requestGet(`${instance}/playlist?id=${id}`)
    },

    addToPlayList: (data: {
        playlistId: number
        ava: string
        name: string
        link: string
    }
    ) => {
        return requestPost(`${instance}/add-to-playlist`, data)
    },

    removeFromPlayList: (data: {
        playlistId: number
        ava: string
        name: string
        link: string
    }
    ) => {
        return requestPost(`${instance}/remove-from-playlist`, data)
    }
}