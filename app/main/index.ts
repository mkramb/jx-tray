import { app } from 'electron';
import { patchNodePath } from './util';
import { initRemoteApi } from './remote';
import { createMainWindow, createTrayIcon, getTrayIcon } from './browser';

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
