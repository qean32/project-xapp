import { BrowserRouter, Route, Routes } from "react-router-dom"
import * as _ from './pages'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={_.Home()} />
                <Route path="/auth" element={_.Auth()} />
                <Route path="/test" element={_.Test()} />
                <Route path="/overlay" element={_.Overlay()} />
            </Routes>
        </BrowserRouter>
    )
}