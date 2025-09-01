import { createSlice } from '@reduxjs/toolkit'

type notificationSliceDto = { download: boolean, largeFile: boolean, added: boolean }
const initialState: notificationSliceDto = { download: false, largeFile: false, added: false }

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        swapDownloadFileNotification: (state: notificationSliceDto) => {
            state.download = !state.download
        },
        swapLargeFileNotification: (state: notificationSliceDto) => {
            state.largeFile = !state.largeFile
        },
        swapAddedNotification: (state: notificationSliceDto) => {
            state.added = !state.added
        },
    }
})

export const notificationReducer = notificationSlice.reducer
export const { swapDownloadFileNotification, swapLargeFileNotification, swapAddedNotification } = notificationSlice.actions