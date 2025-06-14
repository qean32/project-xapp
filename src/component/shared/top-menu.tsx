import React from 'react'
import { cn } from '../../lib/function'
import { useBoolean } from '../../lib/castom-hook'
import { useNavigate } from 'react-router-dom'


interface Props {
    className?: string
}


export const TopMenu: React.FC<Props> = ({ className }: Props) => {
    const { bool, swap } = useBoolean(false)
    const navigate = useNavigate()

    const clickHandler = (key: 'CLOSE' | 'HIDE' | 'CHANGE-WiNDOW') => {
        // @ts-ignore
        window.electron.sendFrameAction(key)
    }

    const changeWinwdowClickHandler = () => {
        if (bool) {
            // @ts-ignore
            window.electron.sendFrameAction('CHANGE-WiNDOW-')
            swap()
            return
        }

        // @ts-ignore
        window.electron.sendFrameAction('CHANGE-WiNDOW+')
        swap()
    }

    return (
        <>
            <div className='fixed top-0 w-100 z-10 pt-2'>
                <div className={cn('gap-2 pr-2 pl-8 cursor-pointer flex', className)} >
                    <img src="./svg/arrow.svg" alt="" onClick={() => navigate(-1)} title='назад' className='medium' />
                    <div id='top-bar'></div>

                    <img onClick={() => clickHandler('HIDE')} className='medium' src="./svg/hide.svg" style={{ transform: 'translateY(-2px)' }} alt="" />
                    <img onClick={changeWinwdowClickHandler} className='medium' src="./svg/change-window.svg" alt="" style={{ transform: 'translateX(2px)' }} />
                    <img onClick={() => clickHandler('CLOSE')} className='medium' src="./svg/cross.svg" alt="" />
                </div>
            </div>
        </>
    )
}