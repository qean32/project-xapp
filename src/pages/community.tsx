import { LeftNavigate } from "../component/general"
import { DftSETPage, GroupContainerLink } from "../component/hoc"
import { User } from "../component/shared"
import { Search } from "../component/ui"

export const Community = () => {
    return (
        <main>
            <LeftNavigate />
            <DftSETPage>
                <Search className="my-5 pl-9" />
                <h2 className="pl-9 mb-5">РЕЗУЛЬТАТЫ ПОИСКА</h2>

                <GroupContainerLink Component={User} link="/chat/" />
            </DftSETPage >
        </main >
    )
}