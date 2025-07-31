// import { io } from "socket.io-client";

// const en = {
//     connection: "connection",
//     connected: "connected",

//     server_send: "server_send",
//     server_view: "server_view",
//     server_update: "server_update",
//     server_remove: "server_remove",

//     client_send: "client_send",
//     client_view: "client_view",
//     client_update: "client_update",
//     client_remove: "client_remove"
// }

// const socket = io('http://localhost:3000/')

// socket.emit(en.connection, {chatId: 'room'})
// socket.emit(en.client_send, { 'zxc': 'zxc', chatId: 'room' })

// socket.on(en.server_send, (payload) => {
//     console.log(payload)
// })

// socket.on(en.server_view, (payload) => {
//     console.log(payload)
// })

// socket.on(en.server_update, (payload) => {
//     console.log(payload)
// })

// socket.on(en.server_remove, (id) => {
//     console.log(id)
// })

globalThis.name = 'John2'

const zxc = {
    name: 'John',

    zxc: () => {
        this.name = 'zxc'
        console.log(this)
    },
    zxc_: function () {
        console.log(this.name)
    }
}

zxc.zxc()
zxc.zxc_()