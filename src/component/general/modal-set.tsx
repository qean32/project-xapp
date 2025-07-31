import React from 'react'
import { Shadow } from '../ui'
import { cn } from '../../lib/function'

interface Props {
    children: React.ReactNode
    fn: () => void
    className?: string
    classNameWindow?: string
}


export const ModalSET: React.FC<Props> = ({ children, fn, className, classNameWindow }: Props) => {
    return (
        <div className={cn('flex fixed z-20 top-0', className)} style={{ inset: '0 0 0 0' }} >
            <div onClick={fn}>
                <Shadow />
            </div>

            <div className={cn("modal z-30", classNameWindow)} >
                {children}
            </div>
        </div>
    )
}
