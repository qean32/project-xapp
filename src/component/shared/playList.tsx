import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
}


export const PlayList: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('flex gap-5 py-3 px-5 music transition03 cursor-pointer', className)}>
            <div className="small-ava"></div>
            <p className='text-nowrap pt-1 text-ellipsis overflow-hidden'>НАЗВАНИЕ НАЗВАНИЕ</p>
        </div>
    )
}
