import React from 'react'
import { cn } from '../../export'

interface Props {
    className?: string
}


export const PlayList: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('flex gap-5 py-3', className)}>
            <div className="music-ava"></div>
            <p className='text-nowrap pt-1 text-ellipsis overflow-hidden'>НАЗВАНИЕ НАЗВАНИЕ</p>
        </div>
    )
}
