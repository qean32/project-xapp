import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MusicDto } from '../model'

type MusicSliceDto = {
    current: MusicDto,
    playList: MusicDto[]
    primePlayList: MusicDto[]
    isNewAudio: boolean
}

const initialState: MusicSliceDto = {
    current: {
        link: 'https://lmusic.kz/api/stream/101416',
        author: 'Serega Pirat',
        ava: 'https://avatars.mds.yandex.net/get-yapic/51381/n9bJBaaJjuLnCl0Jykl6Ri0UNc-1/orig',
        name: '5IVE'
    },
    isNewAudio: false,
    playList: [],
    primePlayList: []
}

const musicSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {
        swapMusic: (state: MusicSliceDto, payload: PayloadAction<MusicSliceDto>) => {
            state.isNewAudio = payload.payload.isNewAudio
            state.current = payload.payload.current
            state.playList = payload.payload.playList
            state.primePlayList = payload.payload.primePlayList
        },
        swapOnlyCurrent: (state: MusicSliceDto, payload: PayloadAction<MusicDto>) => {
            state.current = payload.payload
            state.playList = state.playList.map(item => {
                if (item.name == payload.payload.name) {
                    return { ...item, link: payload.payload.link }
                }
                return item
            })
            state.primePlayList = state.primePlayList.map(item => {
                if (item.name == payload.payload.name) {
                    return { ...item, link: payload.payload.link }
                }
                return item
            })
        },
        swapCurrent: (state: MusicSliceDto, payload: PayloadAction<MusicDto>) => {
            state.current = payload.payload
        }
    }
})

export const musicReducer = musicSlice.reducer
export const { swapMusic, swapOnlyCurrent, swapCurrent } = musicSlice.actions