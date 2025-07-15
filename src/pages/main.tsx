// @ts-nocheck

import { LeftNavigate } from "../component/general"
import { DftSETPage, GroupContainer } from "../component/hoc"
import { Music } from "../component/shared"
import { ResultSearch, Search } from "../component/ui"
import { testPlaylist } from "../export"
import { useAppDispatch } from "../lib/castom-hook/redux"
import { changeTitle } from "../lib/function"
import { swapMusic } from "../store/music"

export const Main = () => {
    changeTitle('главная')
    const dispath = useAppDispatch()
    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        dispath(swapMusic({
            current: {
                ava: (e.target.children[0].children[0].style.backgroundImage).toString().slice(5, -2),
                author: e.target.children[0].children[1].children[0].textContent,
                name: e.target.children[0].children[1].children[1].textContent,
                link: e.target.children[1].children[1].href,
            },
            playList: testPlaylist,
            primePlayList: testPlaylist,
        }))
    }

    return (
        <main>
            <LeftNavigate />
            <DftSETPage>
                <Search />
                <ResultSearch />

                <GroupContainer Component={Music} fn={clickHandler} />
            </DftSETPage>
        </main >
    )
}