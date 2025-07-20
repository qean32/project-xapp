import React from "react"
import { MessageDto } from "../../model"
import io from 'socket.io-client'
import { en } from "../../export"
import { useBoolean, useDebounce, useRequest } from "."
import { messageService } from "../../service/message-service"
import { getRoomId, getToken } from "../function"
import { useParams } from "react-router-dom"
import { jwtDecode } from "jwt-decode"

export const useChat = (userRoom: boolean = false) => {
    const { id }: any = jwtDecode(getToken())
    const { id: toId } = useParams()
    const { finaldata: messages, setFinalData: setMessages } = useRequest<MessageDto>(() => messageService.getMessages(skip, 10, Number(toId)), ['messages']);
    const [skip, setSkip] = React.useState<number>(0);
    const { bool: companionTyping, on, off } = useBoolean(false)
    const debounceCompanionTyping = useDebounce(companionTyping, 600)
    const socketRef = React.useRef<any>(null)

    React.useEffect(() => {
        socketRef.current = io('http://localhost:3000')

        socketRef.current.emit(en.connection, { roomId: (userRoom ? id : getRoomId(Number(toId), id)) });
        socketRef.current.on(en.serverSend, (payload: MessageDto) => {
            setSkip(prev => prev++)
            setMessages(prev => [payload, ...prev])
        })
        socketRef.current.on(en.serverTyping, () => {
            on()

            setTimeout(() => {
                off()
            }, 1000);
        })
        socketRef.current.on(en.serverView, (payload: MessageDto) => {
            setMessages(prev => [...prev.filter(message => message.id != messages.find(message => message.id == payload.id)?.id), payload])
        })
        socketRef.current.on(en.serverUpdate, (payload: MessageDto) => {
            setMessages(prev => [...prev.filter(message => message.id != messages.find(message => message.id == payload.id)?.id), payload])
        })
        socketRef.current.on(en.serverRemove, (id: number) => {
            setSkip(prev => prev--)
            setMessages(prev => [...prev.filter(message => message.id != messages.find(message => message.id == id)?.id)])
        })

    }, [])


    const typing = () => {
        socketRef.current.emit(en.clientTyping, '')
    }

    const sendMessage = (data: { message: string, from: number, files?: any }) => {
        socketRef.current.emit(en.clientSend, { ...data, to: Number(toId) })
    }

    const removeMessage = (id: number) => {
        socketRef.current.emit(en.clientRemove, { id })
    }

    const updateMessage = (message: string) => {
        socketRef.current.emit(en.clientUpdate, { message })
    }

    const viewMessage = (message: string) => {
        socketRef.current.emit(en.clientView, { message })
    }

    const getPrevMessage = () => {
    }

    return { valueTyping: debounceCompanionTyping, messages, skip, typing, viewMessage, sendMessage, updateMessage, removeMessage, getPrevMessage }
}