import React from 'react'
import { cn } from '../../export'

interface Props {
    className?: string
}


export const MusicShort: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('w-100 flex justify-between items-center py-2', className)}>
            <div className='flex gap-5 overflow-hidden'>
                <div className="music-ava"></div>
                <div className="flex flex-col justify-between p-1">
                    <p className='text-nowrap'>АРТИСТ</p>
                    <p className='text-nowrap'>НАЗВАНИЕ НАЗВАНИЕ</p>
                </div>
            </div>
            <div className='flex gap-3 pl-5'>
                <img className='cursor-pointer' src="./svg/trash.svg" alt="" />
                <img className='cursor-pointer' src="./svg/like.svg" alt="" />
            </div>
        </div>
    )
}
