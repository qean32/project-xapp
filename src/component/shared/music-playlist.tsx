import React from 'react'
import { cn } from '../../lib/function'
import { downloadImg, trashImg } from '../ui/img'

interface Props {
    className?: string
}


export const MusicPlayList: React.FC<Props> = ({ className = 'music pl-9' }: Props) => {
    return (
        <>
            <div className={cn('flex justify-between items-center py-3 pr-7 cursor-pointer transition03', className)}>
                <div className='flex gap-5 overflow-hidden justify-center items-center'>
                    <div className="small-ava"></div>
                    <div className="flex flex-col justify-between p-1 max-w-[85%]">
                        <p className='text-nowrap text-ellipsis'>АРТИСТ</p>
                        <p className='text-nowrap text-ellipsis'>НАЗВАНИЕ НАЗВАНИЕ</p>
                    </div>
                </div>
                <div className='flex gap-3 pl-5'>
                    <img className='cursor-pointer' src={trashImg} alt="" />
                    <img className='cursor-pointer' src={downloadImg} alt="" />
                </div>
            </div>
        </>
    )
}
