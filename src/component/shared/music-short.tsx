import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
}


export const MusicShort: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('w-100 flex justify-between items-center py-3 pr-8 pl-5 music transition03', className)}>
            <div className='flex gap-5 overflow-hidden justify-center items-center'>
                <div className="music-ava"></div>
                <div className="flex flex-col justify-between p-1 max-w-[100px]">
                    <p className='text-nowrap overflow-hidden text-ellipsis'>АРТИСТ</p>
                    <p className='text-nowrap overflow-hidden text-ellipsis'>НАЗВАНИЕ НАЗВАНИЕ</p>
                </div>
            </div>
            <div className='flex gap-3 pl-5'>
                <img className='cursor-pointer' src="./svg/trash.svg" alt="" />
                <img className='cursor-pointer' src="./svg/like.svg" alt="" />
            </div>
        </div>
    )
}
