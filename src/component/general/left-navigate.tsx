import React from 'react'
import { cn, getDataId } from '../../lib/function'
import { ClickHocFn } from '../hoc'
import { IconAndAText } from '../ui'
import { useNavigate } from 'react-router-dom'
import { useBoolean } from '../../lib/castom-hook'
import { createPortal } from 'react-dom'
import { ModalSET } from './modal-set'
import { PlayListModal } from '../children'
import { arrowImg, communityImg, homeImg, logoImg, messageImg, playlistImg } from '../ui/img'

interface Props {
    className?: string
}


export const LeftNavigate: React.FC<Props> = ({ className }: Props) => {
    const navigate = useNavigate()
    const { bool, swap } = useBoolean(false)

    const navToChats = React.useCallback(() => {
        navigate('/chats')
    }, [navigate])

    const navToCommunity = React.useCallback(() => {
        navigate('/community')
    }, [navigate])

    const navToHome = React.useCallback(() => {
        navigate('/')
    }, [navigate])

    const navToBack = React.useCallback(() => {
        navigate(-1)
    }, [navigate])

    const selectPlayListHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        navigate(`/playlist/${getDataId(e.target)}`)
        swap()
    }

    return (
        <div className={cn('h-100 fit-content min-w-[60px]', className)}>
            {bool && createPortal(
                <ModalSET fn={swap} className="items-start justify-start" className_="modal-add-playlist-anim h-100 rounded-none" >
                    <PlayListModal fn={selectPlayListHandler} />
                </ModalSET>, document.body)}
            <div className="flex flex-col gap-5 pl-5 bg-color-dark p-5 h-100 pt-10">
                <ClickHocFn fn={navToBack} ><IconAndAText icon={arrowImg} text="назад" /></ClickHocFn>
                <ClickHocFn fn={navToHome} ><IconAndAText icon={homeImg} text="главная" /></ClickHocFn>
                <ClickHocFn fn={navToChats} ><IconAndAText icon={messageImg} text="мессенджер" /></ClickHocFn>
                <ClickHocFn fn={navToCommunity} ><IconAndAText icon={communityImg} text="сообщество" /></ClickHocFn>
                <ClickHocFn fn={swap} ><IconAndAText icon={playlistImg} text="плейлисты" /></ClickHocFn>
                <img src={logoImg} alt="" className='small- cursor-pointer' />
            </div>
        </div>
    )
}
