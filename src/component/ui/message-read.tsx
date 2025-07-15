import React from 'react'
import { cn } from '../../lib/function'
import { readitImg, shippedImg } from './img'

interface Props {
    read: boolean
    className?: string
}


export const MessageRead: React.FC<Props> = ({ read, className }: Props) => {
    return (
        <>
            {read ?
                <img src={readitImg} alt="" className={cn("absolute right-3 bottom-3", className)} />
                :
                <img src={shippedImg} alt="" className={cn("absolute right-3 bottom-3", className)} />
            }
        </>
    )
}
