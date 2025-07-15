import { LeftNavigate } from "../component/general"
import { DftSETPage, GroupContainer } from "../component/hoc"
import { Music } from "../component/shared"
import { ResultSearch, Search } from "../component/ui"
import { testPlaylist } from "../export"
import { useAppDispatch } from "../lib/castom-hook/redux"
import { changeTitle, selectMusic } from "../lib/function"

export const Main = () => {
    changeTitle('главная')
    const dispatch = useAppDispatch()
    const selectFn = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => selectMusic(e, dispatch)

    return (
        <main>
            <LeftNavigate />
            <DftSETPage>
                <Search fn={() => { }} />
                <ResultSearch />

                <GroupContainer fn={selectFn}>
                    {testPlaylist && testPlaylist.map(item => {

                        return <Music music={item} key={item.link} />
                    })}
                </GroupContainer>

            </DftSETPage>
        </main >
    )
}