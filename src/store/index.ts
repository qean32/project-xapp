import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { modeSoundReducer } from './mode-sound'
import { useDispatch } from 'react-redux'

const rootReducer = combineReducers({ modeSound: modeSoundReducer })

export const store = configureStore({
    reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()