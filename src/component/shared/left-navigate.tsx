import React from 'react'
import { cn } from '../../lib/function'
import { ClickHocFn } from '../hoc'
import { IconAndAText } from '../ui'
import { useNavigate } from 'react-router-dom'

interface Props {
    className?: string
}


export const LeftNavigate: React.FC<Props> = ({ className }: Props) => {
    const navigate = useNavigate()

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

    return (
        <div className={cn('h-100 fit-content min-w-[60px]', className)}>
            <div className="flex flex-col gap-5 pl-5 bg-color-dark p-5 h-100 pt-10"
            // style={{ transform: 'rotate(90deg) translateY(-27px)', transformOrigin: 'left' }}
            >
                <ClickHocFn fn={navToBack} ><IconAndAText icon="svg/arrow.svg" text="назад" /></ClickHocFn>
                <ClickHocFn fn={navToChats} ><IconAndAText icon="svg/message.svg" text="чат" /></ClickHocFn>
                <ClickHocFn fn={navToCommunity} ><IconAndAText icon="svg/community.svg" text="сообщество" /></ClickHocFn>
                <ClickHocFn fn={navToHome} ><IconAndAText icon="svg/home.svg" text="главная" /></ClickHocFn>
                <ClickHocFn fn={navToHome} ><IconAndAText icon="svg/playlist.svg" text="плейлисты" /></ClickHocFn>
                <ClickHocFn fn={() => navigate('chat')} ><IconAndAText icon="svg/playlist.svg" text="плейлисты" /></ClickHocFn>
            </div>
        </div>
    )
}
