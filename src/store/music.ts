import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MusicDto } from '../model'

type MusicSliceDto = {
    current: MusicDto,
    playList: MusicDto[]
}

const initialState: MusicSliceDto = {
    current: {
        link: 'https://cdn15.deliciousoranges.com/s1/get/music/20210219/Serega_pirat_-_dead_inside_72716179.mp3',
        author: 'Serega Pirat',
        ava: 'https://i.pinimg.com/1200x/f0/59/98/f059981655a772f50670ae134e348a55.jpg',
        name: 'dead inside'
    },
    playList: [{
        link: "https://cdn8.deliciousoranges.com/s1/get/cuts/8d/a0/8da055bc2698e2d3f2fcebefc72c445d/67056433/Serega_pirat_-_am_fp_b128f0d165.mp3",
        author: 'Serega Pirat',
        ava: 'https://i.pinimg.com/736x/ac/c7/7f/acc77fc9e4be6f7f83de39486ff221f0.jpg',
        name: 'fp am'
    },
    {
        link: 'https://cdn15.deliciousoranges.com/s1/get/music/20210219/Serega_pirat_-_dead_inside_72716179.mp3',
        author: 'Serega Pirat',
        ava: 'https://i.pinimg.com/736x/33/45/40/334540eeb773f3c2a192f9cfcd37e78c.jpg',
        name: 'dead inside'
    },
    {
        link: 'https://cdn2.deliciousoranges.com/s1/get/cuts/d4/87/d4870c957a77b4f9ce597548a2ebfbb6/73433358/Serega_pirat_-_Masha_b128f0d151.mp3',
        author: 'Serega Pirat',
        ava: 'https://i.pinimg.com/1200x/d3/99/bc/d399bc4b020f56d316e4c3de3702e2cb.jpg',
        name: 'Masha'
    }]
}

const MusicSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {
        swap: (state: MusicSliceDto, payload: PayloadAction<MusicSliceDto>) => {
            state.current = payload.payload.current
            state.playList = payload.payload.playList
        },
        swapOnlyCurrent: (state: MusicSliceDto, payload: PayloadAction<MusicDto>) => {
            console.log(payload)
            state.current.progress = payload.payload.progress
            state.current.length = payload.payload.length
            state.current.author = payload.payload.author
            state.current.ava = payload.payload.ava
            state.current.link = payload.payload.link
            state.current.name = payload.payload.name
        }
    }
})

export const MusicResucer = MusicSlice.reducer
export const { swap, swapOnlyCurrent } = MusicSlice.actions