import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PlayListShortDto } from '../model'

const initialState: PlayListShortDto = { ava: '', id: 0, name: '' }

const newPlaylistSlice = createSlice({
    name: 'change-message-window',
    initialState,
    reducers: {
        setNewPLaylist: (state: PlayListShortDto, { payload }: PayloadAction<PlayListShortDto>) => {
            state.ava = payload.ava
            state.id = payload.id
            state.name = payload.name
        },
    }
})

export const newPlaylistResucer = newPlaylistSlice.reducer
export const { setNewPLaylist } = newPlaylistSlice.actions