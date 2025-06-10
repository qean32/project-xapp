import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
}


export const Music: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('w-100 flex justify-between items-center py-3 pr-8 pl-10 music cursor-pointer transition03', className)}>
            <div className='flex gap-5 overflow-hidden justify-center items-center'>
                <div className="music-ava"></div>
                <div className="flex flex-col justify-between p-1 max-w-[85%]">
                    <p className='text-nowrap overflow-hidden text-ellipsis'>АРТИСТ</p>
                    <p className='text-nowrap overflow-hidden text-ellipsis'>НАЗВАНИЕ НАЗВАНИЕ</p>
                </div>
            </div>
            <div className='flex gap-3 pl-5'>
                <img className='cursor-pointer' src="./svg/playlist.svg" alt="" />
                <img className='cursor-pointer' src="./svg/download.svg" alt="" />
                <img className='cursor-pointer' src="./svg/like.svg" alt="" />
            </div>
        </div>
    )
}
