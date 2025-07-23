import React from 'react'
import { useDinamickPagination, useChat } from '../../../lib/castom-hook'
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

    const { messages } = useChat({ userRoom: true, getData: true });
    React.useEffect(() => {
        if (messages.length) {
            // @ts-ignore
            setFinalData(prev => {
                const chatId = messages[0].chatId.toString()
                const current = prev.find(item => chatId != getRoomId(item.fromId.id, item.toId.id))
                // @ts-ignore
                return [{ ...current, hashMessage: messages[0].hashMessage, isView: false, fromId: messages[0].fromId, chatId: messages[0].chatId, toId: messages[0] },
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
