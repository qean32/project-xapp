import pkg from 'electron';
import path from 'path'
const { app, BrowserWindow, ipcMain } = pkg;

const extenation = new Map([
    ["dev", "http://localhost:5173"],
    ["prod", path.join(app.getAppPath(), '/dist-react/index.html')],
])

// @ts-ignore
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true

app.on('ready', () => {
    const mainWindow = new BrowserWindow({
        // autoHideMenuBar: true,
        // titleBarStyle: 'hidden'

    });
    // mainWindow.setMenu(null)
    mainWindow.webContents.openDevTools();

    // @ts-ignore
    mainWindow.loadURL(extenation.get('prod'));

    ipcMain.on('sendFrameAction', (payload) => {
        switch (payload) {
            case 'CLOSE':
                mainWindow.close();
                break;
            case 'MAXIMIZE':
                mainWindow.maximize();
                break;
            case 'MINIMIZE':
                mainWindow.minimize();
                break;
        }
    });
})