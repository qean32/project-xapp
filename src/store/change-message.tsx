import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MessageDto } from '../model'

type changeMessageSliceDto = MessageDto | null

const initialState: changeMessageSliceDto = null

const changeMessageSlice = createSlice({
    name: 'change-message-window',
    initialState,
    reducers: {
        changeMessage: (state: changeMessageSliceDto, payload: PayloadAction<MessageDto>) => {
            state = { ...payload.payload }
        },
        unsetMessage: (state: changeMessageSliceDto) => {
            state = null
        }
    }
})

export const changeMessageResucer = changeMessageSlice.reducer
export const { changeMessage, unsetMessage } = changeMessageSlice.actions