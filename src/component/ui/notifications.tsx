import React from 'react'
import { useAppDispatch, useAppSelector } from '../../lib/castom-hook/redux'
import { swapAddedNotification, swapBigFileNotification, swapDownloadFileNotification } from '../../store/notification'
import { NotificationHoc } from '../hoc'
import { bigFileMessage } from '../../export'

interface Props {
}


export const Notification: React.FC<Props> = ({ }: Props) => {
    const { added, download, bigFile } = useAppSelector(state => state.notification)
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
    React.useEffect(() => {
        if (added)
            setTimeout(() => dispatch(swapAddedNotification()), 2100)
    }, [added])
    return (
        <>
            <NotificationHoc view={(!!(current.link == bigFileMessage) || bigFile)} >
                Слишком большой аудиофайл!
            </NotificationHoc>
            <NotificationHoc view={download} >
                Загрузка аудиофайла...
            </NotificationHoc>
            <NotificationHoc view={added} >
                Плейлист обнавлен!
            </NotificationHoc>
        </>
    )
}
