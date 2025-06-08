import { createSlice } from '@reduxjs/toolkit'

export type ModeSoundDto = { mode: 'repeat' | 'repeat-music' | 'random-play'; }
const initialState: ModeSoundDto = { mode: 'repeat' }

export const mapModeSound = new Map([
    ['repeat', 'repeat-music'],
    ['repeat-music', 'random-play'],
    ['random-play', 'repeat'],
])

const modeSound = createSlice({
    name: 'mode-sound',
    initialState,
    reducers: {
        swap: (state: ModeSoundDto) => {
            // @ts-ignore
            state.mode = mapModeSound.get(state.mode)
        }
    }
})

export const modeSoundReducer = modeSound.reducer
export const { swap } = modeSound.actions