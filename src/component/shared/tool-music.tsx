import React from 'react'
import { ToolModeSound } from '../ui'
import { cn } from '../../lib/function'
import { useSound } from '../../lib/castom-hook'
import { nextarrowImg, nextmainarrowImg, pauseImg } from '../import'
import { AudioValue } from './audio-value'
import { useAppSelector } from '../../lib/castom-hook/redux'

interface Props {
    className?: string
    left?: boolean
    small?: boolean
}


export const ToolMusic: React.FC<Props> = ({ className = 'p-5', left = true, small = false }: Props) => {
    const { audioElem, back, current, next, play, isPlay, onPlaying, isNewAudio } = useSound();
    const { value } = useAppSelector(state => state.audioValue);
    const { mode } = useAppSelector(state => state.modeSound);

    const modeSound = React.useMemo(() => new Map([
        ['repeat', next],
        ['repeat-music', () => { }],
        ['random-play', next],
    ]), [])
    const endAudio = () => {
        // @ts-ignore
        modeSound.get(mode)()
    }

    React.useEffect(() => {
        if (current.currentTime)
            audioElem.current.currentTime = current.currentTime;
    }, [current.currentTime])
    React.useEffect(() => {
        if (audioElem.current.volume)
            audioElem.current.volume = value
    }, [value])
    React.useEffect(() => {
        isNewAudio && play()
    }, [isNewAudio])
    return (
        <div className={cn('relative flex gap-1 items-end pointer-events-none child-fill-event trans-5', className)} >
            <audio src={current.link} ref={audioElem} onTimeUpdate={onPlaying} onEnded={endAudio} />
            <AudioValue />
            {left && <ToolModeSound />}

            <div className='flex gap-1'>
                <img width={small ? '16px' : '24px'} className='cursor-pointer' src={nextarrowImg} alt="" onClick={back} style={{ transform: 'scaleX(-1)' }} />
                <img width={small ? '16px' : '55px'} className='cursor-pointer' src={isPlay ? pauseImg : nextmainarrowImg} alt="" onClick={play} />
                <img width={small ? '16px' : '24px'} className='cursor-pointer' src={nextarrowImg} alt="" onClick={next} />
            </div>

            {!left && <ToolModeSound className='w-[20px] trans-10' />}
        </div>
    )
}