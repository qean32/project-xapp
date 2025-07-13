import React from 'react'
import { createPortal } from 'react-dom'
import { useAppSelector } from '../../lib/castom-hook/redux'


export const RightClickMessageWindowComponent: React.FC<{}> = () => {
    const rightClickMessageWindow = useAppSelector((state) => state.rightClickMessageWindow)

    return (
        <>
            {rightClickMessageWindow.view && createPortal(
                <div className="flex flex-col py-2 absolute bg-white bg-color rounded-md z-50 rightClickMessageWindow cursor-pointer" style={{ ...rightClickMessageWindow.position }} >
                    <p className='py-1 px-5 flex justify-between'>изменить <img className='pl-4' src="/svg/edit.svg" alt="" /></p>
                    <p className='py-1 px-5 flex justify-between'>удалить <img className='pl-4' src="/svg/trash.svg" alt="" /></p>
                </div >
                , document.body)}
        </>
    )
}
