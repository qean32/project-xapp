import { LeftNavigate } from "../component/general"
import { DftSETPage, GroupContainer } from "../component/hoc"
import { MusicPlayList } from "../component/shared"
import { ResultSearch, Search } from "../component/ui"
import { testPlaylist } from "../export"
import { changeTitle, selectMusic } from "../lib/function"
import { useSearch } from "../lib/castom-hook"
import { useAppDispatch } from "../lib/castom-hook/redux"


export const PlayList = () => {
    changeTitle('плейлист')
    const { results, searchFuncttion } = useSearch(testPlaylist, 'name', 'author')
    const dispatch = useAppDispatch()
    const selectFn = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => selectMusic(e, dispatch)

    return (
        <main>
            <LeftNavigate />
            <DftSETPage>
                <Search fn={searchFuncttion} />
                <ResultSearch />

                <GroupContainer fn={selectFn}>
                    {results && results.map(item => {

                        return <MusicPlayList music={item} key={item.link} />
                    })}
                </GroupContainer>
            </DftSETPage>
        </main >
    )
}