// @ts-nocheck 

import React from 'react'
import { cn, getUrl } from '../../lib/function'
import { useBoolean } from '../../lib/castom-hook'
import { IpcEventNameDto } from '../../model'
import { changewindowbigImg, changewindowsmallImg, crossImg, hideImg } from '../ui/img'

interface Props {
    className?: string
}


export const TopMenu: React.FC<Props> = ({ className }: Props) => {
    const { bool, swap } = useBoolean(false)

    const clickHandler = (key: IpcEventNameDto) => {
        window.electron?.sendFrameAction(key)
    }

    const changeWinwdowClickHandler = () => {
        window.electron?.sendFrameAction('CHANGE-WiNDOW')
        swap()
    }

    return (
        <>
            <div className='fixed top-0 w-100 z-10 pt-2'>
                <div className={cn('gap-2 pr-2 pl-8 cursor-pointer flex', className)} >
                    <div id='top-bar'></div>
                    <img onClick={() => clickHandler('HIDE')} className='medium' src={hideImg} style={{ transform: 'translateY(-2px)' }} alt="" />

                    {bool ?
                        <img onClick={changeWinwdowClickHandler} className='medium' src={changewindowbigImg} alt="" style={{ transform: 'translateX(2px)' }} />
                        :
                        <img onClick={changeWinwdowClickHandler} className='medium' src={changewindowsmallImg} alt="" style={{ transform: 'translateX(2px)' }} />
                    }
                    <img onClick={() => clickHandler('CLOSE')} className='medium' src={crossImg} alt="" />
                </div>
            </div>
        </>
    )
}