import { LeftNavigate } from "../component/general"
import { DftSETPage, GroupContainer } from "../component/hoc"
import { MusicPlayList } from "../component/shared"
import { ResultSearch, Search } from "../component/ui"
import { testPlaylist } from "../export"
import { changeTitle } from "../lib/function"
import { useAppDispatch } from "../store"
import { swapMusic } from "../store/music"

export const PlayList = () => {
    changeTitle('плейлист')
    const dispath = useAppDispatch()
    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        dispath(swapMusic({
            current: {
                // @ts-ignore
                ava: (e.target.children[0].children[0].style.backgroundImage).toString().slice(5, -2),
                // @ts-ignore
                author: e.target.children[0].children[1].children[0].textContent,
                // @ts-ignore
                name: e.target.children[0].children[1].children[1].textContent,
                // @ts-ignore
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

                <GroupContainer Component={MusicPlayList} fn={clickHandler} />
            </DftSETPage>
        </main >
    )
}