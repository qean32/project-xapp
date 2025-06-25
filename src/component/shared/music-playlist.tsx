import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
}


export const MusicPlayList: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('w-100 flex justify-between items-center py-3 pr-8 pl-5 music transition03 cursor-pointer', className)}>
            <div className='flex gap-5 overflow-hidden justify-center items-center'>
                <div className="small-ava"></div>
                <div className="flex flex-col justify-between p-1 max-w-[200px] overflow-hidden">
                    <p className='text-nowrap overflow-hidden text-ellipsis'>АРТИСТ</p>
                    <p className='text-nowrap overflow-hidden text-ellipsis'>НАЗВАНИЕ</p>
                </div>
            </div>
            <div className='flex gap-3 pl-5'>
                <img className='cursor-pointer' title='удалить из плейлиста' src="./svg/trash.svg" alt="" />
            </div>
        </div>
    )
}
