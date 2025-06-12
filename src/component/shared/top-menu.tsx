import React from 'react'
import { cn } from '../../lib/function'
import { useBoolean } from '../../lib/castom-hook'


interface Props {
    className?: string
}


export const TopMenu: React.FC<Props> = ({ className }: Props) => {
    const { bool, swap } = useBoolean(false)

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
            <div className='fixed top-0 w-100 z-10 pt-3 pr-1'>
                <div className={cn('gap-4 pr-2 cursor-pointer flex', className)} >
                    <div id='top-bar'></div>

                    <img onClick={() => clickHandler('HIDE')} className='small cursor-pointer' src="./svg/hide.svg" style={{ transform: 'translateY(-2px)' }} alt="" />
                    <img onClick={changeWinwdowClickHandler} className='small cursor-pointer' src="./svg/change-window.svg" alt="" />
                    <img onClick={() => clickHandler('CLOSE')} className='cursor-pointer' src="./svg/cross.svg" alt="" width={'17'} />
                </div>
            </div>
        </>
    )
}