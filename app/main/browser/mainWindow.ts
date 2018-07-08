import { BrowserWindow } from 'electron';
import { getCentralPosition } from '../util';
import { getTrayIcon } from '../menu';

let mainWindow: BrowserWindow | null;

function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 240,
        height: 380,
        show: false,
        frame: false,
        fullscreenable: false,
        resizable: false,
        transparent: true,
        webPreferences: {
            backgroundThrottling: false
        }
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

function toggleMainWindow() {
    if (!mainWindow) {
        mainWindow = createMainWindow();
    }

    if (!mainWindow.isVisible() || !mainWindow.isFocused()) {
        const position = getCentralPosition(mainWindow.getBounds(), getTrayIcon()!.getBounds());

        mainWindow.setPosition(position.x, position.y, false);
        mainWindow.show();
        mainWindow.focus();
    } else {
        mainWindow.hide();
    }
}

function getMainWindow() {
    return mainWindow;
}

export { toggleMainWindow, createMainWindow, getMainWindow };
