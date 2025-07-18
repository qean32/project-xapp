import React from 'react'
import { PlayListShortDto } from '../../model'

interface Props {
    playlist: PlayListShortDto
}


export const PlayList: React.FC<Props> = ({ playlist }: Props) => {
    return (
        <div className='flex gap-5 py-3 px-5 music transition03 cursor-pointer w-[400px]' data-id={playlist.id} >
            <div className="small-ava pointer-events-none" style={{ backgroundImage: `url(${playlist.ava})` }} ></div>
            <p className='text-nowrap pt-1 text-ellipsis overflow-hidden pointer-events-none'>{playlist.name}</p>
        </div>
    )
}
