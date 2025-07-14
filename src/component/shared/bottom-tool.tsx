import React from 'react'
import { cn } from '../../lib/function'
import { Music, ToolMusic } from './'
import { useAppSelector } from '../../lib/castom-hook/redux'

interface Props {
    className?: string
}


export const BottomTool: React.FC<Props> = ({ className }: Props) => {
    const { current } = useAppSelector(state => state.music)
    React.useEffect(() => {
        console.log(current)
    }, [current])

    return (
        <>
            <div
                className={cn('fixed bottom-0 h-[90px] w-100 z-20 flex justify-center bg-color-dark', className)}>
                <div className="flex justify-between w-[770px] adaptive-bottom-tool z-10">
                    <Music className='pl-2' music={current} />
                    <ToolMusic />
                </div>
                <div className="absolute bg-color bottom-0 w-0 h-100 left-0 z-0 transition01" style={{ width: `${current?.progress + "%"}` }}></div>
            </div>
        </>
    )
}