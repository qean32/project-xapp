import React from "react"
import { MessageDto } from "../../model"
import io from 'socket.io-client'
import { en } from "../../export"
import { useBoolean, useDebounce, useRequest } from "."
import { messageService } from "../../service/message-service"
import { getRoomId, getToken } from "../function"
import { useParams } from "react-router-dom"
import { jwtDecode } from "jwt-decode"

export const useChat = (userRoom: boolean = false, getData: boolean = true, isTyping: boolean = false) => {
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
    const socketRef = React.useRef<any>(null)
    const roomId = getRoomId(Number(toId), id)

    React.useEffect(() => {
        socketRef.current = io('http://localhost:3000')

        socketRef.current.emit(en.connection, { roomId: (userRoom ? id : roomId) });
        socketRef.current.on(en.serverSend, (payload: MessageDto) => {
            setSkip(prev => prev++)
            setMessages(prev => [payload, ...prev])
        })
        socketRef.current.on(en.serverTyping, ({ user }: { user: number }) => {
            if (user != id && isTyping) {
                on()

                setTimeout(() => {
                    off()
                }, 1000);
            }
        })
        socketRef.current.on(en.serverView, (payload: MessageDto) => {
            setMessages(prev => {
                const index = prev.findIndex(item => item.id == payload.id)
                return [...prev.slice(index + 1, prev.length).reverse(), payload, ...prev.slice(0, index)].reverse()
            })
        })
        socketRef.current.on(en.serverUpdate, (payload: MessageDto) => {
            setMessages(prev => {
                const index = prev.findIndex(item => item.id == payload.id)
                return [...prev.slice(index + 1, prev.length).reverse(), payload, ...prev.slice(0, index)].reverse()
            })
        })
        socketRef.current.on(en.serverRemove, (id: number) => {
            setSkip(prev => prev--)
            setMessages(prev => [...prev.filter(message => message.id != prev.find(message => message.id == id)?.id)])
        })

    }, [])


    const typing = () => {
        socketRef.current.emit(en.clientTyping, { roomId, user: id })
    }

    const sendMessage = (data: { message: string, from: number, files?: any }) => {
        socketRef.current.emit(en.clientSend, { ...data, to: Number(toId) })
    }

    const removeMessage = (idMessage: number) => {
        socketRef.current.emit(en.clientRemove, { id: idMessage, roomId: getRoomId(Number(toId), id) })
    }

    const updateMessage = (message: MessageDto) => {
        socketRef.current.emit(en.clientUpdate, message)
    }

    const viewMessage = (message: string) => {
        socketRef.current.emit(en.clientView, { message })
    }

    const getPrevMessage = () => {
    }

    return { valueTyping: debounceCompanionTyping, messages, typing, viewMessage, sendMessage, updateMessage, removeMessage, getPrevMessage }
}