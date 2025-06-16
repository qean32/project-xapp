import React from 'react'
import { cn } from '../../../lib/function'
import { PlayList } from '../../shared'

interface Props {
    className?: string
}


export const AddToPlayList: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('relative w-100', className)}>
            <div className="flex py-10 w-[100] pointer-events-auto flex-col justify-center items-center">
                <PlayList className='w-[400px]' />
                <PlayList className='w-[400px]' />
                <PlayList className='w-[400px]' />
                <PlayList className='w-[400px]' />
            </div>
        </div>
    )
}
