import { createSlice } from '@reduxjs/toolkit'

export type ModeSoundDto = { mode: 'repeat-playList' | 'repeat-music' | 'compilation' | 'random'; }
const initialState: ModeSoundDto = { mode: 'repeat-playList' }

export const mapModeSound = new Map([
    ['repeat-playList', 'repeat-music'],
    ['repeat-music', 'compilation'],
    ['compilation', 'random'],
    ['random', 'repeat-playList'],
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