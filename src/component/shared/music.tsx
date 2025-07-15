import React from 'react'
import { cn } from '../../lib/function'
import { useBoolean } from '../../lib/castom-hook'
import { createPortal } from 'react-dom'
import { PlayListModal } from '../children'
import { ModalSET } from '../general'
import { MusicDto } from '../../model'
import { downloadImg, playlistImg } from '../ui/img'

interface Props {
    className?: string
    music: MusicDto
}


export const Music: React.FC<Props> = ({ className = 'music pl-9', music }: Props) => {
    const { bool, swap } = useBoolean(false)

    return (
        <>
            {bool && createPortal(
                <ModalSET fn={swap} className="items-start justify-start" className_="modal-add-playlist-anim h-100 rounded-none" >
                    <PlayListModal fn={() => { }} />
                </ModalSET>, document.body)}

            <div className={cn('flex justify-between items-center py-3 pr-7 cursor-pointer transition03', className)}>
                <div className='flex gap-5 overflow-hidden justify-center items-center'>
                    <div className="small-ava" style={{ backgroundImage: `url(${music.ava})` }} ></div>
                    <div className="flex flex-col justify-between p-1 max-w-[85%]">
                        <p className='text-nowrap text-ellipsis'>{music.author}</p>
                        <p className='text-nowrap text-ellipsis'>{music.name}</p>
                    </div>
                </div>
                <div className='flex gap-3 pl-5'>
                    <img className='cursor-pointer pointer-events-auto' src={playlistImg} alt="" onClick={swap} />
                    <a
                        download={''}
                        href={music.link}
                    ><img className='cursor-pointer pointer-events-auto' src={downloadImg} alt="" /></a>
                </div>
            </div>
        </>
    )
}
