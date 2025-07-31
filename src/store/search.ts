import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type type = { search: string }
const initialState: type = { search: '' }

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state: type, payload: PayloadAction<type>) => {
            state.search = payload.payload.search
        }
    }
})

export const searchReducer = searchSlice.reducer
export const { setSearch } = searchSlice.actions