import React from 'react'
import { createPortal } from 'react-dom'
import { useAppDispatch, useAppSelector } from '../../lib/castom-hook/redux'
import { editImg, trashImg } from '../import'
import { changeMessage } from '../../store/change-message'
import { setSelectMessage } from '../../store/right-click-message-window'


export const RightClickMessageWindowComponent: React.FC<{}> = () => {
    const dispatch = useAppDispatch()
    const { position, view, message } = useAppSelector((state) => state.rightClickMessageWindow)

    const clickHandler = () => {
        dispatch(changeMessage(message))
        dispatch(setSelectMessage({ message: message, position: { left: '0', top: '0' } }))
    }

    return (
        <>
            {view && createPortal(
                <div className="flex flex-col py-2 absolute bg-white bg-color rounded-md z-50 rightClickMessageWindow cursor-pointer" style={{ ...position }} >
                    <p className='py-1 px-5 flex justify-between' onClick={clickHandler}>изменить <img className='pl-4' onClick={clickHandler} src={editImg} alt="" /></p>
                    <p className='py-1 px-5 flex justify-between'>удалить <img className='pl-4' src={trashImg} alt="" /></p>
                </div >
                , document.body)}
        </>
    )
}
