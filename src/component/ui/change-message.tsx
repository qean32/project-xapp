import React from 'react'
import { cn } from '../../lib/function'
import { crossImg } from '../import'
import { useAppSelector } from '../../lib/castom-hook/redux'

interface Props {
    className?: string
    clickHandler: React.MouseEventHandler<HTMLImageElement>
}


export const ChangeMessage: React.FC<Props> = ({ className, clickHandler }: Props) => {
    const { hashMessage } = useAppSelector(state => state.changeMessage)

    return (
        <div className={cn('relative', className)}>
            <img src={crossImg} alt="" className="cursor-pointer absolute right-1 top-1" onClick={clickHandler} />
            <p className="p-1">{hashMessage}</p>
        </div>
    )
}
