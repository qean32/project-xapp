import React from 'react'
import { useAppDispatch, useAppSelector } from '../../lib/castom-hook/redux'
import { swapDownload } from '../../store/is-downloading'
import { cn } from '../../lib/function'

interface Props {
}


export const IsDownloading: React.FC<Props> = ({ }: Props) => {
    const { download } = useAppSelector(state => state.isDownload)
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        if (download)
            setTimeout(() => dispatch(swapDownload()), 2000)
    })
    return (
        <>
            {download &&
                <div className={cn('fixed top-11 left-1/2 bg-color z-50 p-5 rounded-lg px-7', download && 'is-downloading-anim')} >
                    загрузка аудиофайла на сервер...
                </div>
            }
        </>
    )
}
