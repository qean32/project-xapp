import React from 'react'
import { cn, isTrueAudio } from '../../lib/function'
import { useBoolean } from '../../lib/castom-hook'
import { MusicDto } from '../../model'
import { downloadImg, recoverImg, trashImg } from '../import'
import { SmallAva } from '../ui'
import { bigFileMessage } from '../../export'
import { musicService } from '../../service/music-service'

interface Props {
    className?: string
    music: MusicDto & { playlistId: number }
}


export const MusicPlayList: React.FC<Props> = ({ className = 'music', music }: Props) => {
    const { swap, boolean: isDelete } = useBoolean(false)
    const audioLink = isTrueAudio(music.link)
    const deleteHandler = () => {
        musicService.removeFromPlayList(music)
        swap()
    }
    const recoverHandler = () => {
        musicService.addToPlayList(music)
        swap()
    }

    return (
        <>
            <div className={cn('flex justify-between items-center py-3 pr-7 pl-8 cursor-pointer transition03', className, (isDelete && 'opacity-60'))}>
                <div className='flex gap-5 overflow-hidden pointer-events-none'>
                    <SmallAva path={music.ava} />
                    <div className="flex flex-col justify-between p-1 max-w-[80%]">
                        <p className={'text-nowrap text-ellipsis abaptive-text-music overflow-hidden' + (audioLink == bigFileMessage && 'underline')}>{music.name}</p>
                    </div>
                </div>
                <div className='flex justify-end gap-3 pl-5 w-[120px]'>
                    {!isDelete ?
                        <img className='cursor-pointer pointer-events-auto' src={trashImg} alt="" onClick={deleteHandler} />
                        :
                        <img className='cursor-pointer pointer-events-auto' src={recoverImg} alt="" onClick={recoverHandler} />
                    }
                    <a
                        download={true}
                        href={audioLink ? music.link : music.link.split('/').at(-1)}
                    ><img className='cursor-pointer pointer-events-auto' src={downloadImg} alt="" /></a>
                </div>
            </div>
        </>
    )
}
