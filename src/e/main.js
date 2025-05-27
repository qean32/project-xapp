const { app, BrowserWindow } = pkg;
import pkg from 'electron';
import path from 'path'

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true
const extenation = new Map([
    ["dev", "http://localhost:5173"],
    ["prod", path.join(app.getAppPath(), '/dist-react/index.html')],
])

app.on('ready', () => {
    const mainWindow = new BrowserWindow({});
    mainWindow.webContents.openDevTools();
    mainWindow.loadURL(extenation.get('dev'));
})