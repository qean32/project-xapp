import { io } from "socket.io-client";
import { en } from '../../export';

const socket = io('http://localhost:3000/')

socket.emit(en.connection, { chatId: 'room' })
socket.on(en.connected, (e) => console.log(e))

const gosms = () => {
    socket.emit(en.client_send, { 'zxc': 'zxc', chatId: 'room' })
}

socket.on(en.server_typing, (payload: any) => {
    console.log(payload)
})

socket.on(en.server_send, (payload: any) => {
    console.log(payload)
})

socket.on(en.server_view, (payload: any) => {
    console.log(payload)
})

socket.on(en.server_update, (payload: any) => {
    console.log(payload)
})

socket.on(en.server_remove, (id: number) => {
    console.log(id)
})

function App() {
    return (
        <>
        </>
    )
}

export default App
