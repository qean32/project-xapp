import React from 'react'
import { CreatePlayList, PlayList } from '../../shared'

interface Props {
    fn: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}


export const PlayListModal: React.FC<Props> = ({ fn }: Props) => {
    return (
        <div className='relative w-100'>
            <div className="flex py-10 w-[100] pointer-events-auto flex-col justify-center items-center" onClick={fn} >
                <PlayList />
                <PlayList />
                <PlayList />
                <PlayList />
            </div>

            <CreatePlayList />
        </div>
    )
}
