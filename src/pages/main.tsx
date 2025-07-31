import React from "react"
import { LeftNavigate } from "../component/general"
import { DftSETPage, GroupContainer } from "../component/hoc"
import { Music, SearchGroup } from "../component/shared"
import { } from "../component/ui"
import { useAppDispatch } from "../lib/castom-hook/redux"
import { changeTitle, isTrueAudio, selectMusic } from "../lib/function"
import { usePage } from "../lib/castom-hook"
import { musicService } from "../service/music-service"
import { MusicDto } from "../model"
import { swapDownloadFileNotification } from "../store/state-file"

export const Main = () => {
    const dispatch = useAppDispatch();
    usePage();
    const selectFn = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, array: MusicDto[]) => {
        // @ts-ignore
        if (e.target.children[1] && typeof (isTrueAudio(e.target.children[1].children[1].href)) != 'string')
            dispatch(swapDownloadFileNotification())
        selectMusic(e, dispatch, array)
    }
    changeTitle('главная')

    return (
        <main>
            <LeftNavigate />
            <DftSETPage>
                <SearchGroup />

                <GroupContainer
                    RQkey="music"
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