import React from 'react'
import { cn } from '../../lib/function'
import { ClickHocFn } from '../hoc'
import { IconAndAText } from '../ui'
import { useNavigate } from 'react-router-dom'

interface Props {
    className?: string
}


export const LeftSide: React.FC<Props> = ({ className }: Props) => {
    const navigate = useNavigate()

    const navToChats = React.useCallback(() => {
        navigate('/chats')
    }, [navigate])

    const navToCommunity = React.useCallback(() => {
        navigate('/community')
    }, [navigate])

    return (
        <div className={cn('', className)}>
            <div className="flex gap-5 pl-3 pt-10"
                // style={{ transform: 'rotate(90deg) translateY(-255px)', transformOrigin: 'left' }}
            >
                <ClickHocFn fn={navToChats} ><IconAndAText icon="svg/message.svg" text="чат" /></ClickHocFn>
                <ClickHocFn fn={navToCommunity} ><IconAndAText icon="svg/community.svg" text="сообщество" /></ClickHocFn>
            </div>
        </div>
    )
}
