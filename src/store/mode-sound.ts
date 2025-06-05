import { createSlice } from '@reduxjs/toolkit'

type ModeSoundDto = 'repeat-playList' | 'repeat-music' | 'compilation' | 'random';
const initialState: ModeSoundDto = 'repeat-playList'

const map = new Map([
    ['repeat-playList',      'repeat-music'],
    ['repeat-music',         'compilation'],
    ['compilation',          'random'],
    ['random',               'repeat-playList'],
])

export const modeSound: any = createSlice({
    name: 'mode-sound',
    initialState,
    reducers: {
        swap: (state: ModeSoundDto) => {
            // @ts-ignore
            state = map.get(state)
        }
    }
})

export const { swap } = modeSound.actions