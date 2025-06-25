import React from 'react'
import { cn } from '../../lib/function'
import { useBoolean } from '../../lib/castom-hook'
import { createPortal } from 'react-dom'
import { AddToPlayList } from '../children'
import { ModalSET } from '../general'

interface Props {
    className?: string
}


export const Music: React.FC<Props> = ({ className = 'music pl-10' }: Props) => {
    const { bool, swap } = useBoolean(false)

    return (
        <>
            {bool && createPortal(
                <ModalSET fn={swap} className="items-start justify-start" className_="modal-add-playlist-anim h-100 rounded-none" >
                    <AddToPlayList />
                </ModalSET>, document.body)}

            <div className={cn('flex justify-between items-center py-3 pr-8 cursor-pointer transition03', className)}>
                <div className='flex gap-5 overflow-hidden justify-center items-center'>
                    <div className="small-ava"></div>
                    <div className="flex flex-col justify-between p-1 max-w-[85%]">
                        <p className='text-nowrap text-ellipsis'>АРТИСТ</p>
                        <p className='text-nowrap text-ellipsis'>НАЗВАНИЕ НАЗВАНИЕ</p>
                    </div>
                </div>
                <div className='flex gap-3 pl-5'>
                    <img className='cursor-pointer' src="./svg/playlist.svg" alt="" onClick={swap} />
                    <img className='cursor-pointer' src="./svg/download.svg" alt="" />
                </div>
            </div>
        </>
    )
}
