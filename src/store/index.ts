import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { modeSoundReducer } from './mode-sound'
import { useDispatch } from 'react-redux'
import { rightClickMessageReducer } from './right-click-message-window'
import { changeMessageReducer } from './change-message'
import { createStateSyncMiddleware, initMessageListener, withReduxStateSync } from 'redux-state-sync'
import { musicReducer } from './music'
import { audioValueReducer } from './audio-value'
import { userReducer } from './user'
import { newPlaylistReducer } from './new-playlist'
import { searchReducer } from './search'


const rootReducer = withReduxStateSync(
    combineReducers({
        modeSound: modeSoundReducer,
        rightClickMessageWindow: rightClickMessageReducer,
        changeMessage: changeMessageReducer,
        music: musicReducer,
        audioValue: audioValueReducer,
        user: userReducer,
        newPlaylist: newPlaylistReducer,
        search: searchReducer,
    })
)

const config = {
    channel: 'my_broadcast_channel',
};

const middlewares = [
    createStateSyncMiddleware(config),
];

export const store = configureStore({
    reducer: rootReducer,
    // @ts-ignore
    middleware: () => middlewares
},)

initMessageListener(store);

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()