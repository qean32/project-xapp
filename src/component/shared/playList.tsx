import React from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
}


export const PlayList: React.FC<Props> = ({ }: Props) => {
    const navigate = useNavigate()

    return (
        <div className='flex gap-5 py-3 px-5 music transition03 cursor-pointer w-[400px]' onClick={() => navigate('/playlist')} >
            <div className="small-ava"></div>
            <p className='text-nowrap pt-1 text-ellipsis overflow-hidden'>НАЗВАНИЕ НАЗВАНИЕ</p>
        </div>
    )
}
