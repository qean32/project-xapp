import { createSlice } from '@reduxjs/toolkit'

type notificationSliceDto = { download: boolean, bigFile: boolean, added: boolean }
const initialState: notificationSliceDto = { download: false, bigFile: false, added: false }

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        swapDownloadFileNotification: (state: notificationSliceDto) => {
            state.download = !state.download
        },
        swapBigFileNotification: (state: notificationSliceDto) => {
            state.bigFile = !state.bigFile
        },
        swapAddedNotification: (state: notificationSliceDto) => {
            state.added = !state.added
        },
    }
})

export const notificationReducer = notificationSlice.reducer
export const { swapDownloadFileNotification, swapBigFileNotification, swapAddedNotification } = notificationSlice.actions