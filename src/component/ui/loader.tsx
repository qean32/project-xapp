import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
}


export const Loader: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('absolute flex justify-center items-center', className)} style={{ inset: '0 0', transform: 'translateY(-100px)' }}>
            <span className="loader w-[35px] h-[35px]"></span>
        </div>
    )
}
