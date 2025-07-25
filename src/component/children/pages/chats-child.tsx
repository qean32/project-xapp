import React from 'react'
import { useDinamickPagination, useNotification } from '../../../lib/castom-hook'
import { useAppSelector } from '../../../lib/castom-hook/redux'
import { getDataId, getRoomId } from '../../../lib/function'
import { ChatDto } from '../../../model'
import { Chat } from '../../shared'
import { messageService } from '../../../service/message-service'
import { useNavigate } from 'react-router-dom'



interface Props {
}

export const ChatsChild: React.FC<Props> = ({ }: Props) => {
    const navigate = useNavigate();
    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const id = getDataId(e.target)
        id && navigate('/chat/' + id)
    }

    const { search } = useAppSelector(state => state.search);
    const { refHandler, refParent, finaldata: array, skip, setFinalData }
        = useDinamickPagination<ChatDto>(() => messageService.getChats(skip, 10, search), ['chats'], 0, search);

    const { messages } = useNotification();
    React.useEffect(() => {
        if (messages.length) {
            // @ts-ignore
            setFinalData(prev => {
                const chatId = getRoomId(messages[0].to, messages[0].from)
                return [
                    {
                        ...prev.find(item => chatId == getRoomId(item.fromId.id, item.toId.id)) ?? {},
                        hashMessage: messages[0].hashMessage,
                        createdAt: messages[0].createdAt,
                        toId: { id: messages[0].to },
                        isView: false,
                        fromId: messages[0].fromId
                    },
                    ...prev.filter(item => chatId != getRoomId(item.fromId.id, item.toId.id))]
            })
        }
    }, [messages])

    return (
        <>
            {/* <Loader /> */}
            <div className="flex flex-col max-h-[90%] relative overflow-scroll" onClick={clickHandler} ref={refParent}>
                {array && array.map((item, i) => {

                    return <Chat key={i} chat={item} />
                })}
                <div className='w-100 min-h-[50px]' ref={refHandler} ></div>
            </div >
        </>
    )
}
