import React from 'react'
import { cn } from '../../../lib/function'
import { PlayList } from '../../shared'

interface Props {
    className?: string
}


export const AddToPlayList: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('relative w-100', className)}>
            <div className="flex p-0 w-[100] pointer-events-auto h-[200px] justify-center items-center">
                <PlayList />
                <PlayList />
                <PlayList />
                <PlayList />
            </div>
        </div>
    )
}
