import { app } from 'electron';
import { initRemoteApi } from './remote';
import { createTrayIcon, getTrayIcon } from './menu';
import { createMainWindow } from './browser';
import { patchNodePath } from './util';

patchNodePath();

app.on('ready', () => {
    createMainWindow();
    createTrayIcon();
    initRemoteApi();
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
