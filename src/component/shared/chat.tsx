import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
}


export const Chat: React.FC<Props> = ({ className = 'music' }: Props) => {
    return (
        <div className={cn('w-100 flex justify-between items-center py-3 pr-8 pl-10 transition03 cursor-pointer', className)}>
            <div className='flex gap-5 overflow-hidden justify-center items-center'>
                <div className="small-ava"></div>
                <div className="flex flex-col justify-between p-1 max-w-[85%]">
                    <p className='text-nowrap overflow-hidden text-ellipsis'>НИКНЕЙМ</p>
                    <p className='text-nowrap overflow-hidden text-ellipsis'>ПОСЛЕДНЕЕ СООБЩЕНИЕ</p>
                </div>
            </div>
            <div className='flex gap-3 pl-5'>
                <p>ДАТА</p>
            </div>
        </div>
    )
}
