import { BrowserWindow } from 'electron';

let mainWindow: BrowserWindow | null;

function createWindow() {
    mainWindow = new BrowserWindow({
        height: 200,
        width: 620
    });

    if (process.env.NODE_ENV === 'development') {
        mainWindow.loadURL('http://localhost:9000');
    } else {
        mainWindow.loadFile(__dirname + '/index.html');
    }

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    return mainWindow;
}

function showDevTools() {
    mainWindow && mainWindow.isVisible() && mainWindow.webContents.openDevTools({ mode: 'detach' });
}

function toggleWindow() {
    if (!mainWindow) {
        mainWindow = createWindow();
    }

    if (!mainWindow.isVisible() || !mainWindow.isFocused()) {
        mainWindow.show();
    } else {
        mainWindow.hide();
    }
}

export { toggleWindow, createWindow, showDevTools };
