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
        autoHideMenuBar: true,
        titleBarStyle: 'hidden',
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(app.getAppPath(), 'src/e/', 'preload.js')
        }

    });
    mainWindow.setMenu(null)
    mainWindow.webContents.openDevTools();

    mainWindow.loadURL(extenation.get('dev'));
    ipcMain.on('CLOSE', () => {
        mainWindow.close();
    })

    ipcMain.on('HIDE', () => {
        mainWindow.minimize();
    })

    ipcMain.on('CHANGE-WiNDOW-', () => {
        mainWindow.unmaximize();
    })

    ipcMain.on('CHANGE-WiNDOW+', () => {
        mainWindow.maximize();
    })

    ipcMain.on('set-ignore-mouse-events', (event, ignore, options) => {
        const win = BrowserWindow.fromWebContents(event.sender)
        win.setIgnoreMouseEvents(ignore, options)
    })
})