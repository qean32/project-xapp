import React from 'react'
import { cn } from '../../lib/function'
import { Music } from './music'
import { ToolMusic } from './tool-music'


interface Props {
    className?: string
}


export const BottomTool: React.FC<Props> = ({ className }: Props) => {

    return (
        <>
            <div className={cn('fixed bottom-0 h-[90px] w-100 z-10 flex justify-center bg-color-dark', className)}>
                <div className="flex justify-between w-[770px]">
                    <Music className='pl-5' />
                    <ToolMusic />
                </div>
            </div>
        </>
    )
}