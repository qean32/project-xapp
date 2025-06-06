import React from 'react'
import { cn } from '../../export'

interface Props {
    className?: string
    text: string
    icon?: string
}


export const IconAndAText: React.FC<Props> = ({ className, text, icon }: Props) => {
    return (
        <div className={cn('flex', className)}>
            <img src={icon} alt="" />
            <p>{text}</p>
            <p>{text}</p>
        </div>
    )
}
