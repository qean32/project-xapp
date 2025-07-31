import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MessageDto, positionDto } from '../model'

export const fakeMessage = { chatId: 0, hashMessage: '', id: 0, isView: false, from: 0, to: 0, files: '', createdAt: '', fromId: { ava: '', id: 1, name: '' } }
const fakePosition = { top: '0px', left: '0px' }
const initialState: RightClickMessageWindowDto = {
    message: fakeMessage,
    position: fakePosition,
    view: false
}

type RightClickMessageWindowDto = {
    message: MessageDto,
    position: positionDto,
    view: boolean
}

const rightClickMessageSlice = createSlice({
    name: 'change-message-window',
    initialState,
    reducers: {
        setSelectMessage: (state: RightClickMessageWindowDto, payload: PayloadAction<{ message: MessageDto, position: positionDto }>) => {
            state.position = payload.payload.position
            if (state.message?.id == payload.payload.message?.id && !state.view) {
                state.view = true
                return
            }
            if (state.message?.id == payload.payload.message?.id) {
                state.view = false
                return
            }

            state.view = true
            state.message = payload.payload.message
        },
        unsetSelectMessage: (state: RightClickMessageWindowDto) => {
            state.message = fakeMessage
            state.position = fakePosition
            state.view = false
        }
    }
})

export const rightClickMessageReducer = rightClickMessageSlice.reducer
export const { setSelectMessage, unsetSelectMessage } = rightClickMessageSlice.actions