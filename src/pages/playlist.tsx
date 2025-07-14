import { LeftNavigate } from "../component/general"
import { DftSETPage, GroupContainer } from "../component/hoc"
import { MusicPlayList } from "../component/shared"
import { ResultSearch, Search } from "../component/ui"
import { changeTitle } from "../lib/function"

export const PlayList = () => {
    changeTitle('плейлист')

    return (
        <main>
            <LeftNavigate />
            <DftSETPage>
                <Search />
                <ResultSearch />

                <GroupContainer Component={MusicPlayList} />
            </DftSETPage>
        </main >
    )
}