import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
}


export const Loader: React.FC<Props> = ({ className = 'absolute' }: Props) => {
    return (
        <div className={cn('flex justify-center items-center', className)} style={{ inset: '0' }}>
            <span className="loader w-[35px] h-[35px]"></span>
        </div>
    )
}
