import React from 'react'
import { cn, getDataId } from '../../lib/function'
import { ClickHocFn } from '../hoc'
import { IconAndAText } from '../ui'
import { useNavigate } from 'react-router-dom'
import { useBoolean } from '../../lib/castom-hook'
import { createPortal } from 'react-dom'
import { ModalSET } from './modal-set'
import { PlayListModal } from '../children'
import { arrowImg, communityImg, homeImg, logoImg, messageImg, playlistImg, notificationsound } from '../import'

interface Props {
    className?: string
}


export const LeftNavigate: React.FC<Props> = React.memo(({ className }: Props) => {
    const { bool: notification, swap: swapNotification } = useBoolean(false)
    const { bool, swap } = useBoolean(false)
    const navigate = useNavigate()

    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        if (getDataId(e.target) == '-1') {
            navigate(-1)
            return
        }

        navigate(getDataId(e.target))
    }

    const selectPlayListHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        navigate(`/playlist/${getDataId(e.target)}`)
        swap()
    }

    const ref = React.useRef(null)
    React.useEffect(() => {
        if (notification && ref.current) {
            // @ts-ignore
            ref.current.volume = 0.0
            // @ts-ignore
            ref.current.play()
        }
    }, [notification])

    React.useEffect(() => {
        setTimeout(() => {
            swapNotification()
        }, 2000);
    }, [])

    return (
        <div className={cn('h-100 fit-content min-w-[60px]', className)}>
            {bool && createPortal(
                <ModalSET fn={swap} className="items-start justify-start" classNameWindow="modal-add-playlist-anim h-100 rounded-none">
                    <PlayListModal fn={selectPlayListHandler} />
                </ModalSET>, document.body)}
            <audio src={notificationsound} ref={ref} />

            <div className="h-100 bg-color-dark">
                <div className='flex flex-col gap-5 pl-5 items-start p-5 pt-10' onClick={clickHandler}>
                    <IconAndAText icon={arrowImg} text="назад" dataId='-1' />
                    <IconAndAText icon={homeImg} text="главная" dataId='/' />

                    <div className='relative'>
                        <IconAndAText icon={messageImg} text="мессенджер" dataId='/chats' />
                        {notification && <div className={cn("rounded-full w-2 h-2 bg-blue-700 absolute top-1 -right-3", (notification && 'notification-anim'))}></div>}
                    </div>

                    <IconAndAText icon={communityImg} text="сообщество" dataId='/community' />
                    <ClickHocFn fn={swap}><IconAndAText icon={playlistImg} text="плейлисты" /></ClickHocFn>

                    <img src={logoImg} alt="" className='cursor-pointer' width={22} />
                </div>
            </div>
        </div>
    )
})
