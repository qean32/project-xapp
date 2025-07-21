import React from 'react'
import { cn } from '../../lib/function'
import { useBoolean } from '../../lib/castom-hook'
import { createPortal } from 'react-dom'
import { PlayListModal } from '../children'
import { ModalSET } from '../general'
import { MusicDto } from '../../model'
import { downloadImg, playlistImg } from '../import'

interface Props {
    className?: string
    music: MusicDto
}


export const Music: React.FC<Props> = ({ className = 'music', music =
    {
        link: 'https://cdn2.deliciousoranges.com/s1/get/cuts/d4/87/d4870c957a77b4f9ce597548a2ebfbb6/73433358/Serega_pirat_-_Masha_b128f0d151.mp3',
        author: 'Serega Pirat',
        ava: 'https://i.pinimg.com/1200x/d3/99/bc/d399bc4b020f56d316e4c3de3702e2cb.jpg',
        name: 'Masha'
    }
}: Props) => {
    const { boolean, swap } = useBoolean(false)

    return (
        <>
            {boolean && createPortal(
                <ModalSET fn={swap} className="items-start justify-start" classNameWindow="modal-add-playlist-anim h-100 rounded-none" >
                    <PlayListModal fn={() => { }} />
                </ModalSET>, document.body)}

            <div className={cn('flex justify-between items-center py-3 pr-7 pl-8 cursor-pointer transition03', className)}>
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
