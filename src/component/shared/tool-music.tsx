import React from 'react'
import { ToolModeSound } from '../ui'
import { cn } from '../../lib/function'
import { useSound } from '../../lib/castom-hook'
import { arrowImg, nextImg, pauseImg } from '../ui/img'

interface Props {
    className?: string
    left?: boolean
    small?: boolean
}


export const ToolMusic: React.FC<Props> = ({ className = 'p-5', left = true, small = false }: Props) => {
    const { audioElem, back, current, next, play, isPlay, onPlaying } = useSound();
    React.useEffect(() => {
        if (current.currentTime)
            audioElem.current.currentTime = current.currentTime;
    }, [current.currentTime])

    return (
        <div className={cn('flex gap-1 items-end pointer-events-none child-fill-event', className)}>
            {left && <ToolModeSound className='w-[20px] trans-5' />}
            <audio src={current.link} ref={audioElem} onTimeUpdate={onPlaying} />

            <div className='flex gap-5'>
                <img width={small ? '16px' : '24px'} className='cursor-pointer' src={arrowImg} alt="" onClick={back} />
                <img width={small ? '16px' : '30px'} className='cursor-pointer' src={isPlay ? pauseImg : nextImg} alt="" onClick={play} />
                <img width={small ? '16px' : '24px'} className='cursor-pointer' src={arrowImg} alt="" style={{ transform: 'scaleX(-1)' }} onClick={next} />
            </div>

            {!left && <ToolModeSound className='w-[20px] trans-10' />}
        </div>
    )
}