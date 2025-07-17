import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
}


export const User: React.FC<Props> = ({ className = 'music' }: Props) => {
    return (
        <div data-id={1} className={cn('w-100 flex justify-between items-center py-4 pr-8 pl-8 transition03 cursor-pointer', className)}>
            <div className='flex gap-5 overflow-hidden justify-center items-center'>
                <div className="small-ava"></div>
                <p className='text-nowrap overflow-hidden text-ellipsis'>НИКНЕЙМ</p>
            </div>
        </div>
    )
}
