import React from 'react'
import { ToolModeSound } from '../ui'
import { cn } from '../../lib/function'

interface Props {
    className?: string
    left?: boolean
}


export const ToolMusic: React.FC<Props> = ({ className, left = true }: Props) => {
    return (
        <div className={cn('flex gap-1 p-5 items-end', className)}>
            {left && <ToolModeSound className='w-[25px] trans-5' />}

            <div className='flex gap-5'>
                <img className='cursor-pointer w-7' src="./svg/next.svg" alt="" style={{ transform: 'scaleX(-1)' }} />
                <img className='cursor-pointer w-7' src="./svg/pouse.svg" alt="" />
                <img className='cursor-pointer w-7' src="./svg/next.svg" alt="" />
            </div>

            {!left && <ToolModeSound className='w-[25px] trans-5' />}
        </div>
    )
}