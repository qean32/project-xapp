import React from "react"
import { MessageDto } from "../../model"
import { socket } from "../socket-config"
import { en } from "../../export"
import { useBoolean, useDebounce, useRequest } from "."
import { messageService } from "../../service/message-service"
import { getRoomId, getToken } from "../function"
import { useParams } from "react-router-dom"
import { jwtDecode } from "jwt-decode"

export const useChat = ({ getData = false, isTyping = false, userRoom = false }: { userRoom?: boolean, getData?: boolean, isTyping?: boolean }) => {
    const { id }: any = jwtDecode(getToken());
    const { id: toId } = useParams();

    const { finaldata: messages, setFinalData: setMessages }
        = getData ?
            useRequest<MessageDto>(() => messageService.getMessages(skip, 10, Number(toId)), ['messages'])
            :
            { finaldata: [], setFinalData: () => { } };

    const [skip, setSkip] = React.useState<number>(0);
    const { bool: companionTyping, on, off } = useBoolean(false)
    const debounceCompanionTyping = useDebounce(companionTyping, 600)
    const roomId = getRoomId(Number(toId), id)
    React.useEffect(() => {
        const uUnread = messages.filter(item => !item.isView && item.from != id)
        if (uUnread.length)
            viewMessage(uUnread)
    }, [messages])

    React.useEffect(() => {
        socket.emit(en.connection, { roomId: (userRoom ? id : roomId) });
        socket.on(en.serverSend, (payload: MessageDto) => {
            setSkip(prev => prev++)
            setMessages(prev => [payload, ...prev])
        })
        socket.on(en.serverTyping, ({ user }: { user: number }) => {
            if (user != id && isTyping) {
                on()

                setTimeout(() => {
                    off()
                }, 1000);
            }
        })
        socket.on(en.serverView, ({ messages: mess }: { messages: MessageDto[] }) => {
            setMessages(prev => {
                const include = [...prev.filter((item) => mess.find((item_ => item.id == item_.id)))]
                const uninclude = [...prev.filter((item) => !mess.find((item_ => item.id == item_.id)))]
                console.log([...include, ...uninclude].sort((a, b) => a.id - b.id))
                return [...include, ...uninclude].sort((a, b) => a.id - b.id).map(item => { return { ...item, isView: true } }).reverse()
            })
        })
        socket.on(en.serverUpdate, (payload: MessageDto) => {
            setMessages(prev => {
                const index = prev.findIndex(item => item.id == payload.id)
                return [...prev.slice(index + 1, prev.length).reverse(), payload, ...prev.slice(0, index)].reverse()
            })
        })
        socket.on(en.serverRemove, (id: number) => {
            setSkip(prev => prev--)
            setMessages(prev => [...prev.filter(message => message.id != prev.find(message => message.id == id)?.id)])
        })

    }, [])


    const typing = () => {
        socket.emit(en.clientTyping, { roomId, user: id })
    }

    const sendMessage = (data: { message: string, from: number, files?: any }) => {
        socket.emit(en.clientSend, { ...data, to: Number(toId) })
    }

    const removeMessage = (idMessage: number) => {
        socket.emit(en.clientRemove, { id: idMessage, roomId: getRoomId(Number(toId), id) })
    }

    const updateMessage = (message: MessageDto) => {
        socket.emit(en.clientUpdate, message)
    }

    const viewMessage = (messages: MessageDto[]) => {
        socket.emit(en.clientView, { messages, roomId })
    }

    const getPrevMessage = () => {
    }

    return { valueTyping: debounceCompanionTyping, messages, typing, viewMessage, sendMessage, updateMessage, removeMessage, getPrevMessage }
}