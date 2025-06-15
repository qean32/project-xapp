import React from 'react'
import { cn } from '../../lib/function'
import { Ava } from '../shared'

interface Props {
    className?: string
    playList?: boolean
}


export const RightSide: React.FC<Props> = React.memo(({ className }: Props) => {
    return (
        <div className={cn('mt-8 min-w-[280px]', className)}>
            <div className="flex justify-between mb-8">
                <h2>НИКНЕЙМ</h2>
                <Ava />
            </div>
        </div>
    )
}
)