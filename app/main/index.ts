import { app } from 'electron';
import { createTrayIcon, getTrayIcon } from './menu';

app.on('ready', createTrayIcon);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (getTrayIcon() === null) {
        createTrayIcon();
    }
});
