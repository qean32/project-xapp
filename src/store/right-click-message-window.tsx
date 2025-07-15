import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MessageDto, positionDto } from '../model'

const initialState: RightClickMessageWindowDto = {
    message: { chatId: 0, hashMessage: '', id: 0, isView: false },
    position: { top: '0px', left: '0px' },
    view: false
}

type RightClickMessageWindowDto = {
    message: MessageDto,
    position: positionDto,
    view: boolean
}

const RightClickMessageSlice = createSlice({
    name: 'change-message-window',
    initialState,
    reducers: {
        setSelectMessage: (state: RightClickMessageWindowDto, payload: PayloadAction<{ message: MessageDto, position: positionDto }>) => {
            if (state.message?.id == payload.payload.message?.id) {
                state.view = false
                return
            }
            console.log(state.message.id)
            console.log(payload.payload.message.id)

            state.view = true
            state.position = payload.payload.position
            state.message = payload.payload.message
        }
    }
})

export const RightClickMessageReducer = RightClickMessageSlice.reducer
export const { setSelectMessage } = RightClickMessageSlice.actions