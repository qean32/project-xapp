import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type AudioValueDto = { value: number }
const initialState: AudioValueDto = { value: 1 }

const audioValueSlice = createSlice({
    name: 'audio-value',
    initialState,
    reducers: {
        change: (state: AudioValueDto, payload: PayloadAction<AudioValueDto>) => {
            console.log(payload.payload.value)
            if (payload.payload.value != 0)
                state.value = payload.payload.value
        }
    }
})

export const audioValueReducer = audioValueSlice.reducer
export const { change } = audioValueSlice.actions