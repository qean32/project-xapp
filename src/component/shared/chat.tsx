import React from 'react'
import { cn } from '../../lib/function'
import { MessageRead } from '../ui'

interface Props {
    className?: string
}


export const Chat: React.FC<Props> = ({ className = 'music' }: Props) => {
    return (
        <div data-id={'1'} className={cn('w-100 flex justify-between items-center py-4 pr-6 pl-8 transition03 cursor-pointer relative children-no-events', className)}>
            <MessageRead read={false} className='right-6' />
            <div className='flex gap-5 overflow-hidden justify-center items-center'>
                <div className="small-ava"></div>
                <div className="flex flex-col justify-between p-1 max-w-[85%]">
                    <p className='text-nowrap overflow-hidden text-ellipsis'>НИКНЕЙМ</p>
                    <p className='text-nowrap overflow-hidden text-ellipsis messagecontent'>ПОСЛЕДНЕЕ СООБЩЕНИЕ</p>
                </div>
            </div>
            <div className='flex gap-3 pl-5'>
                <p>20.06.25</p>
            </div>
        </div>
    )
}
