import React from 'react'
import { cn } from '../../lib/function'

interface Props {
    read: boolean
    className?: string
}


export const MessageRead: React.FC<Props> = ({ read, className }: Props) => {
    return (
        <>
            {read ?
                <img src="./svg/read-it.svg" alt="" className={cn("absolute right-3 bottom-3", className)} />
                :
                <img src="./svg/shipped.svg" alt="" className={cn("absolute right-3 bottom-3", className)} />
            }
        </>
    )
}
