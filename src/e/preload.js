const electron = require('electron')

electron.contextBridge.exposeInMainWorld('electron', {
    sendFrameAction: (payload) => electron.ipcRenderer.send(payload)
})