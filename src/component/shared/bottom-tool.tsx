import React from 'react'
import { cn } from '../../lib/function'
import { Music, ToolMusic } from './'
import { useAppDispatch, useAppSelector } from '../../lib/castom-hook/redux'
import { swapOnlyCurrent } from '../../store/music'
import { useBoolean, useDebounceFunction } from '../../lib/castom-hook'

interface Props {
    className?: string
}


export const BottomTool: React.FC<Props> = ({ className }: Props) => {
    const { current } = useAppSelector(state => state.music)
    const dispath = useAppDispatch()
    const { bool, on, off } = useBoolean(false)
    const clickHandler = (e: any) => {
        if (current.length) {
            dispath(swapOnlyCurrent({ ...current, currentTime: (e.pageX / e.target.offsetWidth) * current.length }))
        }
    }

    const changeHandler = useDebounceFunction(clickHandler, 20)
    React.useEffect(() => {
        console.log('change')
    }, [changeHandler, clickHandler])

    return (
        <>
            <div
                className={cn('fixed bottom-0 h-[85px] w-100 z-20 flex justify-center bg-color-dark', className)}>
                <div className="flex justify-between w-[770px] adaptive-bottom-tool z-10 pointer-events-none">
                    <Music className='pl-2 pointer-events-none' music={current} />
                    <ToolMusic />
                </div>

                <div
                    className='absolute bottom-0 w-100 h-100 left-0 z-0 cursor-pointer'
                    onClick={clickHandler}
                    onMouseUp={off}
                    onMouseDown={on}
                    onMouseMove={(e) => bool && changeHandler(e)} >
                    <div className="bg-color w-0 h-100 transition01 pointer-events-none" style={{ width: `${current?.progress + "%"}` }} ></div>
                </div>
            </div>
        </>
    )
}