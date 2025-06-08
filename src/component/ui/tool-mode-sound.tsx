import React from 'react'
import { cn } from '../../export'
import { useAppSelector, useAppDispatch } from '../../lib/castom-hook/redux'
import { swap } from '../../store/mode-sound'

interface Props {
    className?: string
}


export const ToolModeSound: React.FC<Props> = ({ className = 'w-[25px]' }: Props) => {
    const modeSound = useAppSelector((state) => state.modeSound)
    const dispatch = useAppDispatch()

    return (
        <div className={cn('cursor-pointer m-1', className)} onClick={() => dispatch(swap())}>
            <img src={'./svg/' + modeSound.mode + '.svg'} alt="" />
        </div>
    )
}
