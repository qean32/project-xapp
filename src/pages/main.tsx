import { LeftNavigate } from "../component/general"
import { DftSETPage, GroupContainer } from "../component/hoc"
import { Music } from "../component/shared"
import { Search } from "../component/ui"

export const Main = () => {
    return (
        <main>
            <LeftNavigate />
            <DftSETPage>
                <Search className="my-5 pl-9" />
                <h2 className="pl-9 mb-5">РЕЗУЛЬТАТЫ ПОИСКА</h2>

                <GroupContainer Component={Music} />
            </DftSETPage>
        </main >
    )
}