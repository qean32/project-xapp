import React from 'react'
import { cn } from '../../lib/function'
// const { ipcRenderer } = require('electron')


interface Props {
    className?: string
}


export const TopMenu: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('absolute top-0 w-100 flex justify-end items-center gap-4 pt-2 pr-2', className)}>
            {/* <img onClick={() => window.electron.sendFrameAction('hide')} className='small cursor-pointer' src="./svg/hide.svg" alt="" /> */}
            {/* <img onClick={() => window.electron.sendFrameAction('change-window')} className='small cursor-pointer' src="./svg/change-window.svg" alt="" /> */}
            {/* <img onClick={() => ipcRenderer.send('CLOSE')} className='small cursor-pointer' src="./svg/cross.svg" alt="" /> */}
        </div>
    )
}
