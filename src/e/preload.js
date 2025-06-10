const electron = require('electron')

console.log('zxc123zxc')
console.log(electron)

electron.contextBridge.exposeInMainWorld('electron', {
    sendFrameAction: (payload) => { ipcSend('sendFrameAction', payload); electron.ipcRenderer.emit(payload); electron.ipcRenderer.send(payload); console.log('zxczxc52') },
    ipcRenderer: (payload) => ipcRenderer(payload)
})

function ipcSend(
    key,
    payload
) {
    electron.ipcRenderer.send(key, payload);
}