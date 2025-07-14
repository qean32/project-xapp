import { LeftNavigate } from "../component/general"
import { DftSETPage, GroupContainer } from "../component/hoc"
import { MusicPlayList } from "../component/shared"
import { ResultSearch, Search } from "../component/ui"
import { changeTitle } from "../lib/function"

export const Main = () => {
    changeTitle('главная')

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