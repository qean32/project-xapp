import React from 'react'
import { cn } from '../../export'

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
