import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { modeSoundReducer } from './mode-sound'
import { useDispatch } from 'react-redux'
import { RightClickMessageReducer } from './right-click-message-window'
import { changeMessageResucer } from './change-message'
import { createStateSyncMiddleware, initMessageListener, withReduxStateSync } from 'redux-state-sync'


const rootReducer = withReduxStateSync(
    combineReducers({
        modeSound: modeSoundReducer,
        rightClickMessageWindow: RightClickMessageReducer,
        changeMessage: changeMessageResucer
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