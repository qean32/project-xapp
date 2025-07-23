import React from 'react'
import { cn } from '../../lib/function'
import { MessageRead } from '../ui'
import { useUserInfo } from '../../lib/castom-hook'
import { ChatDto } from '../../model'

interface Props {
    className?: string
    chat: ChatDto
}



export const Chat: React.FC<Props> = ({ className = 'music', chat }: Props) => {
    const { id } = useUserInfo()
    const user = chat.fromId.id == id ? chat.toId : chat.fromId

    return (
        <div data-id={user.id} className={cn('w-100 flex justify-between items-center py-4 pr-6 pl-8 transition03 cursor-pointer relative children-no-events', className)}>
            <MessageRead read={chat.isView} className='right-6' />
            <div className='flex gap-5 overflow-hidden justify-center items-center'>
                <div className="small-ava" style={{ backgroundImage: `url(${user.ava})` }} ></div>
                <div className="flex flex-col justify-between p-1 max-w-[80%]">
                    <p className='text-nowrap text-ellipsis abaptive-text-music overflow-hidden'>{user.name}</p>
                    <p className='text-nowrap text-ellipsis abaptive-text-music overflow-hidden'>{chat.hashMessage}</p>
                </div>
            </div>
            <div className='flex gap-3 pl-5'>
                <p>{chat.updateadAt}</p>
            </div>
        </div>
    )
}
