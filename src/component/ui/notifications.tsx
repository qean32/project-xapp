import React from 'react'
import { useAppDispatch, useAppSelector } from '../../lib/castom-hook/redux'
import { swapBigFileNotification, swapDownloadFileNotification } from '../../store/state-file'
import { NotificationHoc } from '../hoc'
import { bigFileMessage } from '../../export'

interface Props {
}


export const Notification: React.FC<Props> = ({ }: Props) => {
    const { download, bigFile } = useAppSelector(state => state.stateFile)
    const { current } = useAppSelector(state => state.music)
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        if (download)
            setTimeout(() => dispatch(swapDownloadFileNotification()), 2100)
    }, [download])
    React.useEffect(() => {
        if (bigFile)
            setTimeout(() => dispatch(swapBigFileNotification()), 2100)
    }, [bigFile])
    return (
        <>
            <NotificationHoc view={(!!(current.link == bigFileMessage) || bigFile)} >
                Слишком большой аудиофайл!
            </NotificationHoc>
            <NotificationHoc view={download} >
                Загрузка аудиофайла...
            </NotificationHoc>
        </>
    )
}
