import { LeftNavigate } from "../component/general"
import { DftSETPage, GroupContainerLink } from "../component/hoc"
import { User } from "../component/shared"
import { ResultSearch, Search } from "../component/ui"
import { changeTitle } from "../lib/function"

export const Community = () => {
    changeTitle('сообщество')

    return (
        <main>
            <LeftNavigate />
            <DftSETPage>
                <Search />
                <ResultSearch />

                <GroupContainerLink Component={User} link="/chat/" />
            </DftSETPage >
        </main >
    )
}