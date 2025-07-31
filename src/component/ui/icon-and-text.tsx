import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string
    text: string
    icon: string
    iconSize?: 'small' | 'medium' | 'big'
    dataId?: string
}


export const IconAndAText: React.FC<Props> = React.memo(({ className, text, icon, iconSize = 'small', dataId }: Props) => {
    return (
        <div data-id={dataId} className={cn('flex justify-center items-center gap-3 cursor-pointer', className)}>
            <img className={cn(iconSize, 'pointer-events-none')} src={icon} alt="" />
            <p className='h-100 adaptive-icon-and-text pointer-events-none'>{text}</p>
        </div >
    )
})