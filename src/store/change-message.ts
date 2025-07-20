import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MessageDto } from '../model'

type changeMessageSliceDto = MessageDto

const initialState: changeMessageSliceDto = { chatId: 0, hashMessage: '', id: 1, isView: false, from: 0, to: 0, files: '' }

const changeMessageSlice = createSlice({
    name: 'change-message-window',
    initialState,
    reducers: {
        changeMessage: (state: changeMessageSliceDto, { payload }: PayloadAction<MessageDto>) => {
            state.chatId = payload.chatId
            state.hashMessage = payload.hashMessage
            state.id = payload.id
            state.isView = payload.isView
            state.from = payload.from
            state.to = payload.to
            state.files = payload.files
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