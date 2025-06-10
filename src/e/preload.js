const electron = require('electron')

electron.contextBridge.exposeInMainWorld('electron', {
    sendFrameAction: (payload) => electron.ipcRenderer.send(payload)
})

window.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('top-bar')
    el.addEventListener('mouseenter', () => {
        ipcRenderer.send('set-ignore-mouse-events', true, { forward: true })
    })
    el.addEventListener('mouseleave', () => {
        ipcRenderer.send('set-ignore-mouse-events', false)
    })
})