import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
    path: string
}


export const SmallAva: React.FC<Props> = ({ className, path }: Props) => {
    return (
        <div className={cn('small-ava', className)} style={{ backgroundImage: `url(${!path.includes('http') ? 'http://localhost:3000/' + path : path})` }} ></div>
    )
}
