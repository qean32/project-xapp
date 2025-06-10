import { HashRouter, Route, Routes } from "react-router-dom"
import * as _ from './pages'
import { store } from './store'
import { Provider } from 'react-redux'

export const Router = () => {
    return (
        <HashRouter>
            <Provider store={store} >

                <Routes>

                    <Route path="/" element={_.Home()} />
                    <Route path="/auth" element={_.Auth()} />
                    <Route path="/test" element={_.Test()} />
                    <Route path="/overlay" element={_.Overlay()} />
                </Routes>
            </Provider>
        </HashRouter>
    )
}