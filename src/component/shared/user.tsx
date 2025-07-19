import React from 'react'
import { cn } from '../../lib/function'
import { UserDto } from '../../model'

interface Props {
    className?: string
    user: UserDto
}


export const User: React.FC<Props> = ({ className = 'music', user }: Props) => {
    return (
        <div data-id={user.id} className={cn('w-100 flex justify-between items-center py-4 pr-8 pl-8 transition03 cursor-pointer', className)}>
            <div
                className='flex gap-5 overflow-hidden justify-center items-center'
                style={{ paddingBlock: '200px' }}
            >
                <div className="small-ava" style={{ backgroundImage: `url(${user.ava})` }} ></div>
                <p className='text-nowrap overflow-hidden text-ellipsis'>{user.name}</p>
            </div>
        </div>
    )
}
