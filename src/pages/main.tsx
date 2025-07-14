import { LeftNavigate } from "../component/general"
import { DftSETPage, GroupContainer } from "../component/hoc"
import { Music } from "../component/shared"
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

                <GroupContainer Component={Music} />
            </DftSETPage>
        </main >
    )
}