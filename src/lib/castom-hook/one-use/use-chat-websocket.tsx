import React from "react"
import { MessageDto } from "../../../model"
import io from 'socket.io-client'
import { en } from "../../../export"
import { useDebounce } from ".."

export const useChatWebsocket = (chatId: number) => {
    const [messages, setMessages] = React.useState<MessageDto[]>([]);
    const [offset, setOffset] = React.useState<number>(0);
    // const { bool: companionTyping, swap } = useBoolean(false)

    const [companionTyping, setCompanionTyping] = React.useState<boolean>(false)
    const debounceCompanionTyping = useDebounce(companionTyping, 600)

    const socket = io('http://localhost:3000');

    const getPrevMessage = () => {
        // get prev message http
    }

    socket.emit(en.connection, chatId);

    const typing = () => {
        socket.emit(en.client_typing, '')
    }

    const sendMessage = (message: string) => {
        socket.emit(en.client_send, { message })
    }

    const removeMessage = (id: number) => {
        socket.emit(en.client_remove, { id })
    }

    const updateMessage = (message: string) => {
        socket.emit(en.client_update, { message })
    }

    const viewMessage = (message: string) => {
        socket.emit(en.client_view, { message })
    }

    socket.on(en.server_send, (payload: MessageDto) => {
        setOffset(prev => prev++)
        setMessages(prev => [...prev, payload])
    })

    socket.on(en.server_typing, () => {
        setCompanionTyping(true)

        setTimeout(() => {
            setCompanionTyping(false)
        }, 1000);
    })

    socket.on(en.server_view, (payload: MessageDto) => {
        setMessages(prev => [...prev.filter(message => message.id != messages.find(message => message.id == payload.id)?.id), payload])
    })

    socket.on(en.server_update, (payload: MessageDto) => {
        setMessages(prev => [...prev.filter(message => message.id != messages.find(message => message.id == payload.id)?.id), payload])
    })

    socket.on(en.server_remove, (id) => {
        setOffset(prev => prev--)
        setMessages(prev => [...prev.filter(message => message.id != messages.find(message => message.id == id)?.id)])
    })

    return { valueTyping: debounceCompanionTyping, messages, offset, typing, viewMessage, sendMessage, updateMessage, removeMessage, getPrevMessage }
}