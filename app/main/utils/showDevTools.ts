import { BrowserWindow } from 'electron';

function showDevTools(window: BrowserWindow | null) {
    window && window.isVisible() && window.webContents.openDevTools({ mode: 'detach' });
}

export { showDevTools };
