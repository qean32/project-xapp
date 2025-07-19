import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MessageDto } from '../model'

type changeMessageSliceDto = MessageDto

const initialState: changeMessageSliceDto = { chatId: 0, hashMessage: '', id: 1, isView: false }

const changeMessageSlice = createSlice({
    name: 'change-message-window',
    initialState,
    reducers: {
        changeMessage: (state: changeMessageSliceDto, { payload }: PayloadAction<MessageDto>) => {
            state.chatId = payload.chatId
            state.hashMessage = payload.hashMessage
            state.id = payload.id
            state.isView = payload.isView
        },
        unsetMessage: (state: changeMessageSliceDto) => {
            state.isView = false
            state.hashMessage = ''
            state.id = 0
            state.chatId = 0
        }
    }
})

export const changeMessageReducer = changeMessageSlice.reducer
export const { changeMessage, unsetMessage } = changeMessageSlice.actions