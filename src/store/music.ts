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
        link: 'https://cdn15.deliciousoranges.com/s1/get/music/20210219/Serega_pirat_-_dead_inside_72716179.mp3',
        author: 'Serega Pirat',
        ava: 'https://i.pinimg.com/1200x/f0/59/98/f059981655a772f50670ae134e348a55.jpg',
        name: 'dead inside'
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
            console.log(payload.payload.current)
            state.isNewAudio = payload.payload.isNewAudio
            state.current = payload.payload.current
            state.playList = payload.payload.playList
            state.primePlayList = payload.payload.primePlayList
        },
        swapOnlyCurrent: (state: MusicSliceDto, payload: PayloadAction<MusicDto>) => {
            state.current = payload.payload
        }
    }
})

export const musicReducer = musicSlice.reducer
export const { swapMusic, swapOnlyCurrent } = musicSlice.actions