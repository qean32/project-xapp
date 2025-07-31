import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
    children: React.ReactNode
}


export const DefaultContiner: React.FC<Props> = ({ className, children }: Props) => {
    return (
        <div className={cn('dft-container', className)}>
            {children}
        </div>
    )
}
