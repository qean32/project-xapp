import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
    text: string
    icon: string
    iconSize?: 'small' | 'medium' | 'big'
}


export const IconAndAText: React.FC<Props> = ({ className, text, icon, iconSize = 'small' }: Props) => {
    return (
        <div className={cn('flex justify-center items-center gap-3 cursor-pointer', className)}>
            <img className={iconSize} src={icon} alt="" />
            <p className='h-100 adaptive-icon-and-text'>{text}</p>
        </div >
    )
}