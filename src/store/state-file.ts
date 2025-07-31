import { createSlice } from '@reduxjs/toolkit'

const initialState: { download: boolean, bigFile: boolean } = { download: false, bigFile: false }

const stateFileSlice = createSlice({
    name: 'is-downloading',
    initialState,
    reducers: {
        swapDownloadFileNotification: (state: { download: boolean, bigFile: boolean }) => {
            state.download = !state.download
        },
        swapBigFileNotification: (state: { download: boolean, bigFile: boolean }) => {
            state.bigFile = !state.bigFile
        },
    }
})

export const stateFileReducer = stateFileSlice.reducer
export const { swapDownloadFileNotification, swapBigFileNotification } = stateFileSlice.actions