import React from 'react'
import { Shadow } from '../ui'
import { cn } from '../../lib/function'

interface Props {
    children: React.ReactNode
    fn: () => void
    className?: string
    className_?: string
}


export const ModalSET: React.FC<Props> = ({ children, fn, className, className_ }: Props) => {
    return (
        <div className={cn('flex fixed z-20 top-0', className)} style={{ inset: '0 0 0 0' }} >
            <div onClick={fn}>
                <Shadow />
            </div>

            <div className={cn("modal z-30", className_)} >
                {children}
            </div>
        </div>
    )
}
