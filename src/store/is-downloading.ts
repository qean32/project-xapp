import { createSlice } from '@reduxjs/toolkit'

const initialState: { download: boolean } = { download: false }

const IsDownloadingSlice = createSlice({
    name: 'is-downloading',
    initialState,
    reducers: {
        swapDownload: (state: { download: boolean }) => {
            state.download = !state.download
        },
    }
})

export const IsDownloadingReducer = IsDownloadingSlice.reducer
export const { swapDownload } = IsDownloadingSlice.actions