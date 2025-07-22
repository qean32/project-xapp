import React from "react"
import { LeftNavigate } from "../component/general"
import { DftSETPage, GroupContainer } from "../component/hoc"
import { Music, SearchGroup } from "../component/shared"
import { } from "../component/ui"
import { useAppDispatch } from "../lib/castom-hook/redux"
import { changeTitle, selectMusic } from "../lib/function"
import { usePage } from "../lib/castom-hook"
import { musicService } from "../service/music-service"

export const Main = () => {
    const dispatch = useAppDispatch();
    usePage();
    const selectFn = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => selectMusic(e, dispatch)
    changeTitle('главная')

    return (
        <main>
            <LeftNavigate />
            <DftSETPage>
                <SearchGroup />

                <GroupContainer
                    Component={Music}
                    clickHandler={selectFn}
                    fatchFn={musicService.searchMusic}
                    take={40}
                    componentPropsName="music"
                />
            </DftSETPage>
        </main >
    )
}