import {
    BrowserRouter,
    // HashRouter,
    Route, Routes
} from "react-router-dom"
import * as _ from './pages'
import { store } from './store'
import { Provider } from 'react-redux'

export const Router = () => {
    return (
        // <HashRouter>
        <BrowserRouter>
            <Provider store={store} >

                <Routes>

                    <Route path="/" element={_.Main()} />
                    <Route path="playlist/:id" element={_.PlayList()} />
                    <Route path="community" element={_.Community()} />
                    <Route path="chat/:id" element={_.Chat()} />
                    <Route path="chats" element={_.Chats()} />
                    <Route path="auth" element={_.Auth()} />
                    <Route path="overlay" element={_.Overlay()} />
                </Routes>
            </Provider>
        </BrowserRouter>
        // </HashRouter>
    )
}