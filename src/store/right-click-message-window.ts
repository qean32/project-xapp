import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MessageDto, positionDto } from '../model'

const initialState: RightClickMessageWindowDto = {
    message: { chatId: 0, hashMessage: '', id: 0, isView: false, from: 0, to: 0, files: '' },
    position: { top: '0px', left: '0px' },
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
            state.message = { chatId: 0, hashMessage: '', id: 0, isView: false, from: 0, to: 0, files: '' }
            state.position = { top: '0px', left: '0px' }
            state.view = false
        }
    }
})

export const rightClickMessageReducer = rightClickMessageSlice.reducer
export const { setSelectMessage, unsetSelectMessage } = rightClickMessageSlice.actions