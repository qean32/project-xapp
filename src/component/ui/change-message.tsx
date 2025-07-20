import React from 'react'
import { cn } from '../../lib/function'
import { crossImg } from '../import'
import { useAppSelector } from '../../lib/castom-hook/redux'

interface Props {
    className?: string
    clickHandler: React.MouseEventHandler<HTMLImageElement>
}


export const ChangeMessage: React.FC<Props> = ({ className, clickHandler }: Props) => {
    const { hashMessage, files } = useAppSelector(state => state.changeMessage)

    return (
        <div className={cn('relative', className)}>
            {files?.split(', ').map(item => {
                return <div key={item} className='p-3'>{item}</div>
            })}
            <img src={crossImg} alt="" className="cursor-pointer absolute right-2 top-1" onClick={clickHandler} />
            <p className="p-1 px-3">{hashMessage}</p>
        </div>
    )
}
