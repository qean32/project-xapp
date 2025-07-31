import { LeftNavigate } from "../component/general"
import { DftSETPage, GroupContainerAllData } from "../component/hoc"
import { MusicPlayList, SearchGroup } from "../component/shared"
import { changeTitle, selectMusic } from "../lib/function"
import { usePage, useRequest, useSearch } from "../lib/castom-hook"
import { useAppDispatch } from "../lib/castom-hook/redux"
import { musicService } from "../service/music-service"
import { useParams } from "react-router-dom"
import { MusicDto, PlayListDto } from "../model"


export const PlayList = () => {
    changeTitle('плейлист');
    usePage();
    const { id } = useParams()
    const { finaldata } = useRequest<PlayListDto>(() => musicService.getPlayList(id ?? ''), [`playlist${id}`])
    const { results } = useSearch<MusicDto>(JSON.parse(finaldata[0]?.urlMusicArray ?? false) ? JSON.parse(finaldata[0]?.urlMusicArray ?? false) : [], 'name');
    const dispatch = useAppDispatch();
    const selectFn = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        selectMusic(e, dispatch, results)
    }

    return (
        <main>
            <LeftNavigate />
            <DftSETPage>
                <SearchGroup />

                <GroupContainerAllData
                    clickHandler={selectFn}
                    Component={MusicPlayList}
                    array={results}
                    componentPropsName="music"
                />
            </DftSETPage>
        </main >
    );
}