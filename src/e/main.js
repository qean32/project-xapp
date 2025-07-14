import pkg from 'electron';
import path from 'path'
const { app, BrowserWindow, ipcMain } = pkg;

const extenation = new Map([
    ["dev", "http://localhost:5173"],
    ["prod", path.join(app.getAppPath(), '/dist-react/index.html')],
])
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true
const overlay = false

app.whenReady().then(() => {
    createMainWindow();
    overlay && createOverlayWindow();
});

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        autoHideMenuBar: true,
        titleBarStyle: 'hidden',
        icon: path.join(app.getAppPath(), 'public/favicon/', 'favicon-32x32.png'),
        width: 620,
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

    ipcMain.on('CHANGE-WiNDOW', () => {
        if (mainWindow.isMaximized()) {
            mainWindow.unmaximize();
        } else {
            mainWindow.maximize();
        }
    })
}

function createOverlayWindow() {
    const overlayWindow = new BrowserWindow({
        transparent: true,
        // alwaysOnTop: true,
        icon: path.join(app.getAppPath(), 'src/e/', 'lock.svg'),
        // resizable: false,
        skipTaskbar: true,
        x: 20,
        y: 20,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(app.getAppPath(), 'src/e/', 'preload-overlay.js')
        },
        height: 35,
        width: 160,
        backgroundColor: '#141414',
    });

    ipcMain.on('CHANGE-SIZE-OVERLAY-WINDOW', () => {
        if (overlayWindow.getSize()[1] == 35) {
            overlayWindow.setSize(160, 75)
        }
        else {
            overlayWindow.setSize(160, 35)
        }
    })
    // overlayWindow.webContents.openDevTools();
    overlayWindow.loadURL(extenation.get('dev'));
}