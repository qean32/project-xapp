import React from "react"
import { MessageDto } from "../../model"
import { socket } from "../socket-config"
import { en } from "../../export"
import { useBoolean, useDebounce, useChatDinamickPagination, useWindowFocused } from "."
import { messageService } from "../../service/message-service"
import { getRoomId, getToken } from "../function"
import { useParams } from "react-router-dom"
import { jwtDecode } from "jwt-decode"

export const useChat = ({ getData = false, isTyping = false, userRoom = false }: { userRoom?: boolean, getData?: boolean, isTyping?: boolean }) => {
    const { id: userId }: { id: number } = jwtDecode(getToken());
    const { id: toUserId } = useParams();
    const roomId = !userRoom ? getRoomId(Number(toUserId), userId) : userId.toString()
    const windowFosused = useWindowFocused()

    const { finaldata: messages, setFinalData: setMessages, skip, setSkip, refHandler, refParent }
        = getData ?
            useChatDinamickPagination<MessageDto>(() => messageService.getMessages(skip, 10, Number(toUserId ?? userId)), [`messages${toUserId ?? userId}`])
            :
            { finaldata: [], setFinalData: () => { }, setSkip: () => { }, skip: 0, refParent: null };

    const { boolean: companionTyping, on, off } = useBoolean(false)
    const debounceCompanionTyping = useDebounce(companionTyping, 600)

    React.useEffect(() => {
        const userUnRead = messages.filter(item => !item.isView && item.from != userId)
        if (userUnRead.length)
            viewMessage(userUnRead)
    }, [messages, windowFosused])
    React.useEffect(() => {
        socket.emit(en.connection, { roomId });
        socket.on(en.serverSend, (payload: MessageDto) => {
            setSkip(prev => ++prev)
            setMessages(prev => [payload, ...prev])
        })
        socket.on(en.serverTyping, ({ user }: { user: number }) => {
            if (user != userId && isTyping) {
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
            setSkip(prev => --prev)
            setMessages(prev => [...prev.filter(message => message.id != prev.find(message => message.id == id)?.id)])
        })

        return () => {
            socket.emit(en.disconnection, { roomId });
        }
    }, [])

    const typing = () => {
        socket.emit(en.clientTyping, { roomId, user: userId })
    }

    const sendMessage = (data: { message: string, from: number, files?: any }) => {
        socket.emit(en.clientSend, { ...data, to: Number(toUserId) })
    }

    const removeMessage = (idMessage: number) => {
        socket.emit(en.clientRemove, { id: idMessage, roomId })
    }

    const updateMessage = (message: MessageDto) => {
        socket.emit(en.clientUpdate, message)
    }

    const viewMessage = (messages: MessageDto[]) => {
        if (!userRoom) {
            socket.emit(en.clientView, { messages, roomId })
        }
    }

    return { valueTyping: debounceCompanionTyping, messages, typing, viewMessage, sendMessage, updateMessage, removeMessage, refHandler, refParent }
}