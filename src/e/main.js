import pkg from 'electron';
const { app, BrowserWindow } = pkg;
import path from 'path'

app.on('ready', () => {
    const mainWindow = new BrowserWindow({});
    mainWindow.webContents.openDevTools();
    // mainWindow.loadURL(path.join(app.getAppPath(), '/dist-react/index.html'));
    // console.log(path.join(app.getAppPath(), '/dist/index.html'));
    mainWindow.loadURL('http://localhost:5173');
})