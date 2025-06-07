import React from 'react'
import { cn } from '../../export'
import { useAppSelector, useAppDispatch } from '../../lib/castom-hook/redux'
import { swap } from '../../store/mode-sound'

interface Props {
    className?: string
}


export const ToolModeSound: React.FC<Props> = ({ className }: Props) => {
    const modeSound = useAppSelector((state) => state.modeSound)
    const dispatch = useAppDispatch()
    console.log(modeSound)

    return (
        // @ts-ignore
        <div className={cn('', className)} onClick={() => dispatch(swap())}>
            zxczxc
        </div>
    )
}
