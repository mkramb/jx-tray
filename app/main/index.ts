import { app } from 'electron';
import { setupRemote } from './remote';
import { createTrayIcon, getTrayIcon } from './menu';

app.on('ready', () => {
    setupRemote();
    createTrayIcon();
});

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
