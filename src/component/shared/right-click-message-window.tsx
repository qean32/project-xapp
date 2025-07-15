import React from 'react'
import { createPortal } from 'react-dom'
import { useAppSelector } from '../../lib/castom-hook/redux'
import { editImg, trashImg } from '../ui/img'


export const RightClickMessageWindowComponent: React.FC<{}> = () => {
    const { position, view } = useAppSelector((state) => state.rightClickMessageWindow)

    return (
        <>
            {view && createPortal(
                <div className="flex flex-col py-2 absolute bg-white bg-color rounded-md z-50 rightClickMessageWindow cursor-pointer" style={{ ...position }} >
                    <p className='py-1 px-5 flex justify-between'>изменить <img className='pl-4' src={editImg} alt="" /></p>
                    <p className='py-1 px-5 flex justify-between'>удалить <img className='pl-4' src={trashImg} alt="" /></p>
                </div >
                , document.body)}
        </>
    )
}
