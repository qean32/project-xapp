import React from 'react'
import { PlayList } from '../../shared'

interface Props {
}


export const SelectPlayList: React.FC<Props> = ({ }: Props) => {
    return (
        <div className='relative w-100'>
            <div className="flex py-10 w-[100] pointer-events-auto flex-col justify-center items-center">
                <PlayList />
                <PlayList />
                <PlayList />
                <PlayList />
            </div>
        </div>
    )
}
