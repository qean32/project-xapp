import React from "react"
import { LeftNavigate } from "../component/general"
import { DftSETPage, GroupContainer } from "../component/hoc"
import { Music } from "../component/shared"
import { ResultSearch, Search } from "../component/ui"
import { testPlaylist } from "../export"
import { useBoolean } from "../lib/castom-hook"
import { useAppDispatch } from "../lib/castom-hook/redux"
import { changeTitle, selectMusic } from "../lib/function"

export const Main = () => {
    changeTitle('главная')
    const { bool, swap } = useBoolean(true)
    const [testPlaylist_, settestPlaylist] = React.useState(testPlaylist)

    React.useEffect(() => {
        if (bool)
            settestPlaylist(prev => [...prev, ...prev])
    }, [bool])

    const dispatch = useAppDispatch()
    const selectFn = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => selectMusic(e, dispatch)

    return (
        <main>
            <LeftNavigate />
            <DftSETPage>
                <Search fn={() => { }} />
                <ResultSearch />

                <GroupContainer swap={swap} fn={selectFn}>
                    {testPlaylist_ && testPlaylist_.map((item, i) => {

                        return <Music music={item} key={i} />
                    })}
                </GroupContainer>
            </DftSETPage>
        </main >
    )
}