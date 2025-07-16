import React from "react"
import { LeftNavigate } from "../component/general"
import { DftSETPage, GroupContainer } from "../component/hoc"
import { Music } from "../component/shared"
import { ResultSearch, Search } from "../component/ui"
import { useAppDispatch } from "../lib/castom-hook/redux"
import { changeTitle, selectMusic } from "../lib/function"

export const Main = () => {
    const dispatch = useAppDispatch()
    const selectFn = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => selectMusic(e, dispatch)
    changeTitle('главная')

    return (
        <main>
            <LeftNavigate />
            <DftSETPage>
                <Search fn={() => { }} />
                <ResultSearch />

                <GroupContainer
                    Component={Music}
                    clickHandler={selectFn}
                    fatchFn={() => { }}
                    search=""
                    componentPropsName="music"
                />
            </DftSETPage>
        </main >
    )
}