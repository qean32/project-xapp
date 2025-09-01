import React from 'react'
import { CreatePlayList, PlayList } from '../../shared'
import { useRequest } from '../../../lib/castom-hook'
import { PlayListShortDto } from '../../../model'
import { useAppDispatch, useAppSelector } from '../../../lib/castom-hook/redux'
import { musicService } from '../../../service/music-service'
interface Props {
    fn?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, ...args: any) => void
}

export const PlayListModal: React.FC<Props> = ({ fn }: Props) => {
    const newPlaylist = useAppSelector(state => state.newPlaylist)
    const dispath = useAppDispatch()
    // @ts-ignore
    const fn_ = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => fn(e, dispath)

    React.useEffect(() => {
        if (newPlaylist.id) {
            setFinalData(prev => [...prev, newPlaylist])
        }
    }, [newPlaylist])
    const { finaldata, setFinalData } = useRequest<PlayListShortDto>(() => musicService.getPlayLists(), ['my-playlists']);

    return (
        <div className='relative w-100'>
            <div className="flex py-10 overflow-scroll   w-[100] pointer-events-auto flex-col justify-center items-center min-w-[400px]" onClick={fn_} >
                {finaldata && finaldata.map(item => {

                    return <PlayList playlist={item} key={item.id} />
                })}
            </div>

            <CreatePlayList />
        </div>
    )
}
