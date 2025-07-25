import React from "react"
import { MessageDto } from "../../model"
import { socket } from "../socket-config"
import { en } from "../../export"
import { jwtDecode } from "jwt-decode"
import { getToken } from "../function"

export const useNotification = () => {
    const { id: userId }: { id: number } = jwtDecode(getToken());
    const roomId = userId.toString()
    const [messages, setMessages] = React.useState<MessageDto[]>([])

    React.useEffect(() => {
        socket.emit(en.connection, { roomId });
        socket.on(en.notificationSend, (payload: MessageDto) => {
            if (payload.from != userId)
                setMessages(prev => [payload, ...prev])
        })
        return () => {
            socket.emit(en.disconnection, { roomId });
        }
    }, [])

    return { messages }
}