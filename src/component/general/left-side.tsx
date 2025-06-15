import React, { useCallback } from 'react'
import { cn } from '../../lib/function'
import { ClickHocFn, DefaultContiner } from '../hoc'
import { MusicShort, PlayList } from '../shared'
import { IconAndAText } from '../ui'
import { useNavigate } from 'react-router-dom'

interface Props {
    className?: string
}


export const LeftSide: React.FC<Props> = ({ className }: Props) => {
    const navigate = useNavigate()

    const navToChats = useCallback(() => {
        navigate('/chats')
    }, [navigate])

    const navToCommunity = useCallback(() => {
        navigate('/community')
    }, [navigate])

    return (
        <div className={cn('', className)}>
            <DefaultContiner className="py-5 px-0 mt-8 overflow-hidden">
                <h2 className="px-5">ТЕКУЩИЙ ПЛЕЙЛИСТ: </h2>
                <h2 className="px-5">автоподбор</h2>

                <div className="flex flex-col relative pt-10 overflow-y-scroll max-h-[280px]">
                    <MusicShort />
                    <MusicShort />
                    <MusicShort />
                    <MusicShort />
                </div>
            </DefaultContiner>

            <div className="flex gap-5 pl-3 pt-3">
                <ClickHocFn fn={navToChats} ><IconAndAText icon="svg/message.svg" text="чат" /></ClickHocFn>
                <ClickHocFn fn={navToCommunity} ><IconAndAText icon="svg/community.svg" text="сообщество" /></ClickHocFn>
            </div>
        </div>
    )
}
