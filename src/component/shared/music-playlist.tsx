import React from 'react'
import { cn, isTrueAudio } from '../../lib/function'
import { useBoolean } from '../../lib/castom-hook'
import { MusicDto } from '../../model'
import { downloadImg, trashImg } from '../import'
import { SmallAva } from '../ui'
import { bigFileMessage } from '../../export'

interface Props {
    className?: string
    music: MusicDto
}


export const MusicPlayList: React.FC<Props> = ({ className = 'music', music }: Props) => {
    const { swap } = useBoolean(false)
    const audioLink = isTrueAudio(music.link)

    return (
        <>
            <div className={cn('flex justify-between items-center py-3 pr-7 pl-8 cursor-pointer transition03', className)}>
                <div className='flex gap-5 overflow-hidden pointer-events-none'>
                    <SmallAva path={music.ava} />
                    <div className="flex flex-col justify-between p-1 max-w-[80%]">
                        <p className={'text-nowrap text-ellipsis abaptive-text-music overflow-hidden' + (audioLink == bigFileMessage && 'underline')}>{music.name}</p>
                    </div>
                </div>
                <div className='flex justify-end gap-3 pl-5 w-[120px]'>
                    {/* {!isTrue && <img className='cursor-pointer pointer-events-auto' src={playlistImg} alt="" onClick={swap} />} */}
                    <img className='cursor-pointer pointer-events-auto' src={trashImg} alt="" onClick={swap} />
                    <a
                        download={true}
                        href={audioLink ? music.link : music.link.split('/').at(-1)}
                    ><img className='cursor-pointer pointer-events-auto' src={downloadImg} alt="" /></a>
                </div>
            </div>
        </>
    )
}
