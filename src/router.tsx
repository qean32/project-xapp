import {
    BrowserRouter,
    // HashRouter,
    Route, Routes
} from "react-router-dom"
import * as _ from './pages'
import { store } from './store'
import { Provider } from 'react-redux'
import { BottomTool, TopMenu } from "./component/shared"
import { IsDownloading } from "./component/ui"

export const Router = () => {
    return (
        // <HashRouter>
        <BrowserRouter>
            <Provider store={store} >
                <BottomTool />
                <TopMenu />
                <IsDownloading />
                <Routes>

                    <Route path="" element={<_.Main />} />
                    <Route path="playlist/:id" element={<_.PlayList />} />
                    <Route path="community" element={<_.Community />} />
                    <Route path="chat/:id" element={<_.Chat />} />
                    <Route path="chats" element={<_.Chats />} />
                    <Route path="auth" element={<_.Auth />} />
                    <Route path="overlay" element={<_.Overlay />} />
                    <Route path="*" element={<_.P404 />} />
                </Routes>
            </Provider>
        </BrowserRouter>
        // </HashRouter>
    )
}