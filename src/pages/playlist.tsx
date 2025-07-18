import { LeftNavigate } from "../component/general"
import { DftSETPage, GroupContainerAllData } from "../component/hoc"
import { MusicPlayList } from "../component/shared"
import { ResultSearch, Search } from "../component/ui"
import { testPlaylist } from "../export"
import { changeTitle, selectMusic } from "../lib/function"
import { usePage, useSearch } from "../lib/castom-hook"
import { useAppDispatch } from "../lib/castom-hook/redux"


export const PlayList = () => {
    changeTitle('плейлист')
    usePage();

    const { results, searchFuncttion } = useSearch(testPlaylist, 'name', 'author')
    const dispatch = useAppDispatch()
    const selectFn = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => selectMusic(e, dispatch)

    return (
        <main>
            <LeftNavigate />
            <DftSETPage>
                <Search fn={searchFuncttion} />
                <ResultSearch />

                <GroupContainerAllData
                    clickHandler={selectFn}
                    Component={MusicPlayList}
                    array={results}
                    componentPropsName="music"
                />
            </DftSETPage>
        </main >
    )
}