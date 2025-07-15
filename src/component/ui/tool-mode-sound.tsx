import React from 'react'
import { useAppSelector, useAppDispatch } from '../../lib/castom-hook/redux'
import { swap } from '../../store/mode-sound'
import { cn } from '../../lib/function'
import { randomplayImg, repeatImg, repeatmusicImg } from './img'

interface Props {
    className?: string
}

const modeConnectImg = new Map([
    ['repeat', repeatImg],
    ['repeat-music', repeatmusicImg],
    ['random-play', randomplayImg],
])

export const ToolModeSound: React.FC<Props> = ({ className = 'w-[25px]' }: Props) => {
    const { mode } = useAppSelector((state) => state.modeSound)
    const dispatch = useAppDispatch()

    return (
        <div className={cn('cursor-pointer m-1', className)} onClick={() => dispatch(swap())}>
            {/* @ts-ignore */}
            <img src={modeConnectImg.get(mode)} alt="" />
        </div>
    )
}
