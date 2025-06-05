import React from 'react'
import { cn } from '../../export'

interface Props {
    className?: string
}


export const Component: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('', className)}>
        </div>
    )
}