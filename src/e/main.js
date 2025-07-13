import pkg from 'electron';
import path from 'path'
const { app, BrowserWindow, ipcMain } = pkg;

const extenation = new Map([
    ["dev", "http://localhost:5173"],
    ["prod", path.join(app.getAppPath(), '/dist-react/index.html')],
])
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true

app.whenReady().then(() => {
    // createMainWindow();
    createOverlayWindow();
});

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        autoHideMenuBar: true,
        titleBarStyle: 'hidden',
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(app.getAppPath(), 'src/e/', 'preload.js')
        },
        minWidth: 620,
        minHeight: 130
    });
    mainWindow.webContents.openDevTools();

    mainWindow.loadURL(extenation.get('dev'));
    ipcMain.on('CLOSE', () => {
        mainWindow.close();
    })

    ipcMain.on('HIDE', () => {
        mainWindow.minimize();
        mainWindow.setAlwaysOnTop(true)
    })

    ipcMain.on('CHANGE-WiNDOW-', () => {
        mainWindow.unmaximize();
    })

    ipcMain.on('CHANGE-WiNDOW+', () => {
        mainWindow.maximize();
    })
}

function createOverlayWindow() {
    const overlayWindow = new BrowserWindow({
        transparent: true,
        alwaysOnTop: true,
        icon: './lock.svg',
        resizable: false,
        // skipTaskbar: true,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(app.getAppPath(), 'src/e/', 'preload-overlay.js')
        },
        height: 85,
        width: 170,
        backgroundColor: '#141414',
    });
    // overlayWindow.webContents.openDevTools();
    overlayWindow.loadURL(extenation.get('dev'));
}