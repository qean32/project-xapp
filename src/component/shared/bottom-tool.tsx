import React from 'react'
import { cn } from '../../lib/function'
import { Music, ToolMusic } from './'

interface Props {
    className?: string
}


export const BottomTool: React.FC<Props> = ({ className }: Props) => {

    return (
        <>
            <div className={cn('fixed bottom-0 h-[90px] w-100 z-10 flex justify-center bg-color-dark', className)}>
                <div className="flex justify-between w-[770px] adaptive-bottom-tool">
                    <Music className='pl-2' />
                    <ToolMusic />
                </div>
            </div>
        </>
    )
}