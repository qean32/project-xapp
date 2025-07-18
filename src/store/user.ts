import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserDto } from '../model'

const initialState: UserDto = { id: 0, ava: '', name: '' }

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state: UserDto, payload: PayloadAction<UserDto>) => {
            state.ava = payload.payload.ava
            state.id = payload.payload.id
            state.name = payload.payload.name
        }
    }
})

export const UserReducer = UserSlice.reducer
export const { setUser } = UserSlice.actions