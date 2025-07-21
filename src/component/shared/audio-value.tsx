import React from 'react'
import { cn } from '../../lib/function'
import { useAppDispatch, useAppSelector } from '../../lib/castom-hook/redux'
import { change } from '../../store/audio-value'
import { useBoolean, useDebounceFunction } from '../../lib/castom-hook'
import { soundvalue_img } from '../import'

interface Props {
    className?: string
}


export const AudioValue: React.FC<Props> = ({ className }: Props) => {
    const dispatch = useAppDispatch();
    const { value } = useAppSelector(state => state.audioValue);
    const { boolean, on, off } = useBoolean(false)
    const change_ = (e: any) => {
        dispatch(change({ value: e.target.value / 100 }))
    }
    const changeHandler = useDebounceFunction(change_, 10)

    return (
        // <div className={cn('absolute -left-6 top-8 flex items-center pointer-events-auto w-[50px]', className)}>
        //     <input type="range" id='p-0' style={{ transform: 'rotate(-90deg)' }} onChange={changeHandler} defaultValue={100} />
        // </div>

        <div className={cn('pointer-events-auto', className)}>
            <img src={
                value ?
                    soundvalue_img
                    :
                    soundvalue_img
            } alt=""
                className='cursor-pointer mb-1'
                width={21}
                onMouseEnter={on} onMouseLeave={off} />
            <div className={cn('absolute w-[130px] bg-color p-4 -top-3 -left-12 z-40 rounded-lg opacity-0 transition03',
                (boolean && 'opacity-100'))}
                onMouseEnter={on} onMouseLeave={off}>
                <input type="range" id='p-0' onChange={changeHandler} defaultValue={100} />
            </div>
        </div>
    )
}
