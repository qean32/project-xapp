import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    className?: string,
    children: React.ReactNode
    view: boolean
}


export const NotificationHoc: React.FC<Props> = ({ className, children, view }: Props) => {
    return (
        <>
            {view &&
                <div className={cn('fixed top-11 left-1/2 bg-color z-50 p-5 rounded-lg px-7', view && 'is-downloading-anim', className)} >
                    {children}
                </div>
            }
        </>
    )
}
