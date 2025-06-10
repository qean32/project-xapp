import React from 'react'
import { cn } from '../../lib/function'


interface Props {
    className?: string
}


export const TopMenu: React.FC<Props> = ({ className }: Props) => {
    // @ts-ignore
    // console.log(window)

    const clickhandl = () => {

        // @ts-ignore
        window.electron.sendFrameAction('CLOSE')
        //@ts-ignore
        // @ts-ignore
        console.log(window.electron)
        // @ts-expect-error
        window.electron.ipcRenderer('CLOSE')
    }
    return (
        <div className={cn('absolute top-0 w-100 flex justify-start items-center gap-4 pt-2 pr-2', className)}>
            {/* <img onClick={() => window.electron.sendFrameAction('hide')} className='small cursor-pointer' src="./svg/hide.svg" alt="" /> */}
            {/* <img onClick={() => window.electron.sendFrameAction('change-window')} className='small cursor-pointer' src="./svg/change-window.svg" alt="" /> */}
            {/*// @ts-ignore */}
            <img onClick={clickhandl} className='small cursor-pointer' src="./svg/cross.svg" alt="" />
        </div>
    )
}
